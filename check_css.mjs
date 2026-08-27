#!/usr/bin/env node
/**
 * check_css.mjs — audits the custom properties across the whole site.
 *
 *   node check_css.mjs
 *
 * Two bugs live in this gap, and neither of them looks like anything on
 * screen, which is why they want a script rather than an eye:
 *
 *   DECLARED, NEVER USED     a knob wired to nothing. Harmless, but it is
 *                            where a rename goes to hide: change --band to
 *                            --strip in one place and the old name sits here
 *                            for a year looking authoritative.
 *
 *   USED, NEVER DECLARED     the interesting one. `var(--x, 1rem)` with no
 *                            --x anywhere works perfectly and forever, on
 *                            the fallback, so the variable might as well not
 *                            exist — you cannot change it, because there is
 *                            nothing to change. --tile-gap was this, nine
 *                            times over. Without a fallback it is worse: the
 *                            whole declaration is invalid at computed-value
 *                            time and the property silently falls back to
 *                            inherit, which is how the lightbox's album
 *                            counter came out black on one page and grey on
 *                            another.
 *
 * SCOPE IS THE POINT. A property declared inside a page's own <style> is
 * invisible to every other page, so this reads the stylesheets AND the inline
 * blocks, and reports per page: what gallery.html declares for itself does not
 * count as a declaration for naples.html. That is precisely the --atlas-dim
 * case, and a whole-repository grep cannot see it.
 *
 * Properties set from JavaScript are declared nowhere and are not a bug, so
 * they are listed separately rather than reported. Same for the handful the
 * atlas writes inline on every card.
 *
 * Exits 1 if anything is used but never declared, so it can go in a hook.
 */

import {readFileSync, readdirSync, existsSync} from 'fs';

const CSS_DIR = existsSync('css') ? 'css' : '.';
const HTML = readdirSync('.').filter(f => f.endsWith('.html'));

// Set from script rather than from a stylesheet. Not missing — just declared
// somewhere this script cannot read.
const FROM_JS = new Set([
  '--frame-ar', '--card-w', '--free-h',           // atlas.js, on the frame
  '--x', '--y', '--z',                            // atlas.js, on a pile/card
  '--dx', '--dy', '--rot',                        // resting offset and tilt
  '--fx', '--fy', '--frot',                       // the fanned-open offsets
]);

const strip = s => s.replace(/\/\*[\s\S]*?\*\//g, '');
const decls = s => new Set([...strip(s).matchAll(/(--[\w-]+)\s*:/g)].map(m => m[1]));
const uses  = s => new Set([...strip(s).matchAll(/var\(\s*(--[\w-]+)/g)].map(m => m[1]));

// A use with no comma inside its var() has no fallback, so a missing
// declaration takes the whole property down rather than degrading.
const bare = s => new Set([...strip(s).matchAll(/var\(\s*(--[\w-]+)\s*\)/g)]
  .map(m => m[1]));

// ── the shared stylesheets ───────────────────────────────────────────────────
const sheets = readdirSync(CSS_DIR).filter(f => f.endsWith('.css'));
const shared = {d: new Set(), u: new Set(), b: new Set()};
const perSheet = {};
for (const f of sheets) {
  const src = readFileSync(`${CSS_DIR}/${f}`, 'utf8');
  perSheet[f] = {d: decls(src), u: uses(src), b: bare(src)};
  for (const x of perSheet[f].d) shared.d.add(x);
  for (const x of perSheet[f].u) shared.u.add(x);
  for (const x of perSheet[f].b) shared.b.add(x);
}

// ── each page, with its own inline block ─────────────────────────────────────
let bad = 0;
const usedAnywhere = new Set(shared.u);

console.log(`stylesheets: ${sheets.join(', ')}`);
console.log(`${shared.d.size} properties declared, ${shared.u.size} used\n`);

for (const page of HTML.sort()) {
  const src = readFileSync(page, 'utf8');
  const inline = [...src.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)]
    .map(m => m[1]).join('\n');

  // Which stylesheets does this page actually load? A page that never links
  // lightbox.css is not answerable for the properties lightbox.css uses.
  const linked = sheets.filter(f => src.includes(`${CSS_DIR}/${f}`) ||
                                    src.includes(f));
  const d = new Set(decls(inline));
  const u = new Set(uses(inline));
  const b = new Set(bare(inline));
  for (const f of linked) {
    for (const x of perSheet[f].d) d.add(x);
    for (const x of perSheet[f].u) u.add(x);
    for (const x of perSheet[f].b) b.add(x);
  }
  for (const x of u) usedAnywhere.add(x);

  const missing = [...u].filter(x => !d.has(x) && !FROM_JS.has(x)).sort();
  if (!missing.length) continue;

  bad += missing.length;
  console.log(`${page}`);
  for (const m of missing) {
    // Where it IS declared, if anywhere — that is the whole diagnosis for a
    // scope leak: "declared in gallery.html, used here".
    const elsewhere = HTML.filter(p => p !== page &&
      decls([...readFileSync(p, 'utf8').matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)]
        .map(x => x[1]).join('\n')).has(m));
    const note = b.has(m)
      ? 'NO FALLBACK — the whole declaration is dropped'
      : 'has a fallback, so the knob simply does not exist';
    console.log(`  ${m.padEnd(16)} ${note}`);
    if (elsewhere.length)
      console.log(`  ${''.padEnd(16)} declared only in ${elsewhere.join(', ')}`);
  }
  console.log('');
}

const unused = [...shared.d].filter(x => !usedAnywhere.has(x)).sort();
if (unused.length) {
  console.log('declared and never used:');
  for (const x of unused) console.log('  ' + x);
  console.log('');
}

if (bad) {
  console.error(`${bad} property use${bad === 1 ? '' : 's'} with no declaration in scope.`);
  process.exitCode = 1;
} else {
  console.log('every property used is declared in the scope that uses it.');
}
