// Shared helpers for every page: text and stress marks, scoring, picking questions, headers, results.

const NUM = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять',
  'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать',
  'восемнадцать', 'девятнадцать', 'двадцать'];

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
const isRu = s => /[а-яё]/i.test(s);
const plain = s => String(s).replace(/`/g, '');

// Stress marks: a ` after a vowel is drawn as an accent over it (Onest misplaces the combining acute).
// A final stressed и gets no mark, as on the sheets (it would look like й).
function stress(s) {
  return esc(s).replace(/([аеёиоуыэюяАЕЁИОУЫЭЮЯ])`(?=([а-яёА-ЯЁ])?)/g, (m, v, next) =>
    (v === 'и' || v === 'И') && !next ? v : `<span class="st${v === v.toUpperCase() ? ' up' : ''}">${v}</span>`);
}
// Wrap text in the right font: Onest (with stress marks) for anything Cyrillic, DM Sans otherwise.
const t = s => isRu(s) ? `<span class="ru">${stress(s)}</span>` : `<span class="en">${esc(s)}</span>`;
const icon = (name, cls = 'ic') => `<span class="${cls}">${ICONS[name] || ''}</span>`;

// "Russian sentence. (English translation.)" -> [russian, english]
function splitEx(e) {
  const m = String(e).match(/^(.*?)\s*\(([^()]*(?:\([^()]*\)[^()]*)*)\)\s*$/);
  return m ? [m[1], m[2]] : [e, ''];
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

// ── Scores: 0–5 per item, kept in this browser ─────────────────────────────
const Store = {
  get(key, fallback) { try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; } },
  set(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* storage unavailable */ } },
};
const NS = 'scores_v3';
function bump(ns, key, correct) {
  const s = Store.get(ns, {});
  s[key] = Math.max(0, Math.min(5, (s[key] || 0) + (correct ? 1 : -1)));
  Store.set(ns, s);
}
// Pick n items without repeats. weightOf(item, score|undefined) gives each item's weight.
function weightedSample(items, n, keyOf, ns, weightOf) {
  const s = Store.get(ns, {});
  return items.map(it => ({ it, k: -Math.log(Math.random()) / Math.max(1e-6, weightOf(it, s[keyOf(it)])) }))
    .sort((a, b) => a.k - b.k).slice(0, n).map(x => x.it);
}
// Default weighting: wrong or new questions come up more often than ones you know.
const scoreWeight = sc => sc === undefined ? 3 : [6, 5, 4, 3, 2, 1][sc];
function weightedPick(items, keyOf, n, ns) { return weightedSample(items, n, keyOf, ns, (it, sc) => scoreWeight(sc)); }

// Counts: known (5), nearly (3–4), to review (0–2, seen), new.
function progress(ns, keys) {
  const s = Store.get(ns, {});
  const c = { mastered: 0, getting: 0, review: 0, fresh: 0 };
  keys.forEach(k => { if (!(k in s)) c.fresh++; else if (s[k] >= 5) c.mastered++; else if (s[k] >= 3) c.getting++; else c.review++; });
  return c;
}
function bar(c) {
  const total = c.mastered + c.getting + c.review + c.fresh || 1;
  const w = n => (n / total * 100).toFixed(2) + '%';
  return `<div class="prog">
    <div class="bar"><i class="m1" style="width:${w(c.mastered)}"></i><i class="m2" style="width:${w(c.getting)}"></i><i class="m3" style="width:${w(c.review)}"></i></div>
    <div class="k"><b>${c.mastered}</b> known · <b>${c.getting}</b> nearly · <b>${c.review}</b> review · ${c.fresh} new</div>
  </div>`;
}

// ── Layout pieces ──────────────────────────────────────────────────────────
function header(title, right = '', back = 'index.html', backLabel = 'Русский') {
  return `<header class="top">
    ${back ? `<a class="left" href="${back}">${icon('back')}${esc(backLabel)}</a>` : '<span class="left">Тренировка</span>'}
    <h1 class="disp">${esc(title)}</h1>
    <span class="right" id="meta">${right}</span>
  </header>`;
}
function sectionHead(n, title, ru = '', en = '') {
  const p = (ru || en) ? `<p>${ru ? t(ru) : ''}${en ? (ru ? ` <i>(${esc(en)})</i>` : `<i>${esc(en)}</i>`) : ''}</p>` : '';
  const num = n ? `<span class="disc">${n}</span>${NUM[n] ? `<span class="nw">${NUM[n]}</span>` : ''}<span class="dv"></span>` : '';
  return `<div class="sh"><h2>${num}<span class="disp">${esc(title)}</span></h2>${p}</div>`;
}
function card(href, ic, title, desc, extra = '') {
  return `<a class="card" href="${href}">${icon(ic)}
    <div class="t"><h2 class="disp">${esc(title)}</h2>${desc ? `<div class="d">${desc}</div>` : ''}${extra}</div>
    ${icon('next', 'ic go')}</a>`;
}
function bear(pct) { return pct >= 70 ? 'bear_happy.png' : pct >= 40 ? 'bear_neutral.png' : 'bear_sad.png'; }
function resultsBox(score, total, back = 'index.html', backLabel = 'Домой') {
  const pct = Math.round(score / total * 100);
  const msg = pct === 100 ? 'Отлично! Everything right.' : pct >= 70 ? 'Хорошо! Good work.' : pct >= 40 ? 'Getting there — keep practising.' : 'Review these and try again — каждый день.';
  return `<section class="box results">
    ${sectionHead(0, 'Итог', '', '')}
    <img src="${bear(pct)}" alt="">
    <div class="disp score">${score} / ${total}</div>
    <p class="msg">${msg}</p>
    <div class="btns centre">
      <a class="btn ghost" href="${back}">${icon(back === 'index.html' ? 'home' : 'back')}${esc(backLabel)}</a>
      <button class="btn" id="again">${icon('again')}Ещё раз</button>
    </div>
  </section>`;
}
function setTrack(frac) { const i = $('.track > i'); if (i) i.style.width = Math.round(frac * 100) + '%'; }
function setMeta(s) { const m = $('#meta'); if (m) m.textContent = s; }

// Speech (uses the phone's own Russian voice, if it has one).
function speak(text) {
  if (!window.speechSynthesis) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(plain(text));
  u.lang = 'ru-RU'; u.rate = 0.85;
  const v = speechSynthesis.getVoices().find(v => v.lang.startsWith('ru'));
  if (v) u.voice = v;
  speechSynthesis.speak(u);
}

// Header: shrink the title until it fits between the left and right labels.
function fitTop() {
  document.querySelectorAll('.top h1').forEach(h => {
    h.style.fontSize = '';
    let fs = parseFloat(getComputedStyle(h).fontSize);
    while (h.scrollWidth > h.clientWidth + 1 && fs > 14) { fs -= 1; h.style.fontSize = fs + 'px'; }
  });
}
let fitQueued = false;
function queueFit() { if (fitQueued) return; fitQueued = true; requestAnimationFrame(() => { fitQueued = false; fitTop(); }); }
try {
  new MutationObserver(queueFit).observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener('resize', queueFit);
  if (document.fonts) document.fonts.ready.then(queueFit);
} catch (e) { /* older browsers: title just stays full size */ }

if ('serviceWorker' in navigator && location.protocol === 'https:') {
  try { navigator.serviceWorker.register('sw.js').catch(() => {}); } catch (e) { /* not available here */ }
}
