# callumhuntington.com

Personal site: mathematics, and an atlas of film photographs. Static HTML, CSS
and jQuery, served by GitHub Pages from this repository.

---

## Layout

```
index.html            landing
mathematics.html      publications, talks, education
gallery.html          the atlas
miscellany.html       index of written pieces and city pages  (NOT IN THE NAV YET)
naples.html           a city page
vitti.html            a written piece  (DRAFT)
404.html              served for any unknown address
css/                  style.css, lightbox.css
js/                   app.js, atlas.js, lightbox.js, lightbox-init.js,
                      miscellany.js, jump-fit.js, and the two GENERATED files
data/photos.js        the source of truth for every photograph
images/<region>/      <id>_thumb.jpeg and <id>_full.jpeg
images/miscellany/    tile pictures, lead images, and the traced city maps
mathpdfs/             author copies of the papers
fonts/                DM Sans (subsetted) and Orbita Traced

build_city_map.py     traces a city coastline into images/miscellany/<city>-map.svg
                      and writes the numbered pins into the page
```

---

## The atlas: two tiers, and why it matters

The atlas is built from two different kinds of data, and confusing them is the
easiest way to waste an afternoon.

**`data/photos.js` is read at runtime.** Captions, file paths, years — change
one of those and a reload is all it takes.

**`js/atlas-data.js` and `js/atlas-sheets.js` are generated.** They hold the
map geometry: the world map, each region's silhouette, and where every pin and
card sits on it. Anything *geometric* — `lat`, `lon`, `group`, a `card`
override, a new photograph, a new region — only reaches the page after a
rebuild.

A photograph that is in `photos.js` but not in the built sheet is **not drawn
at all**, on either layout. `atlas.js` prints a console warning naming the ids
when this happens; if a card is mysteriously missing, look there first.

### Build

```bash
npm install
node prepare_subunits.mjs     # fetches Natural Earth data; re-run only when
                              # regions.mjs gains a country or a SPLIT_STATES entry
node build_atlas.mjs          # writes js/atlas-data.js   (the world map)
node build_sheets.mjs         # writes js/atlas-sheets.js (silhouettes + placement)
node check_css.mjs            # audits the custom properties (see below)
```

`prepare_subunits.mjs` writes three build-time files that are never served:
`subunits-topo.json` (country outlines, and the four UK countries),
`states-topo.json` (admin-1 divisions for the countries in `SPLIT_STATES` —
the US, and only the US), and `cities-10m.json` (fine coastline for the
panelled sheets). It caches the raw Natural Earth downloads beside them, so a
second run is offline.

Both generated `js/` files are committed. GitHub Pages does not run the build.

### Internal borders

Two settings in `regions.mjs`, and they are not the same question:

- `SPLIT_SUBUNITS` — **is this country's interior drawn at all?** Anything not
  in it is one solid silhouette.
- `SPLIT_STATES` — **and where do the pieces come from?** The map-subunits
  layer has no US states in it, so these come from the admin-1 layer instead,
  into their own topology. `SPLIT_SUBUNITS` folds this set in automatically.

`states-topo.json` is deliberately separate rather than merged into
`subunits-topo.json`. `build_sheets.mjs` simplifies the subunit topology as a
whole and picks its threshold as a **quantile over every arc in it** — so
adding fifty state borders to that pool would move the threshold, change how
every other region's coastline is simplified, and quietly move every card the
solver has to fit around, including hand-placed ones. Keeping them apart means
adding the US borders changed the `usa` sheet and *nothing else*: silhouette,
groups, cards and frames for the other thirteen regions came out bit-identical.

The border path is appended to the same `borders` string the UK's internal
borders use, so `atlas.js` strokes and clips it with no change.

---

## Adding a photograph

1. Two files into `images/<region>/`: `<id>_thumb.jpeg` (aim under ~500KB) and
   `<id>_full.jpeg` (1–2MB). The thumbnail is the card; the full image is what
   the lightbox opens.
2. A record in `data/photos.js`:

   ```js
   {id: 'matera', place: 'Matera', sub: 'Basilicata', year: 2023,
    region: 'italy', dir: 'italy', group: 'matera', lat: 40.667, lon: 16.611},
   ```

   `sub` is whatever sits one level below the sheet title — the region on a
   single-country sheet, the country on a multi-country one. Photographs
   sharing a `group` become one pile on the map, fanning open on hover, and
   share a number on the narrow layout.
3. `node build_sheets.mjs`
4. Bump the `?v=` on any changed asset, using the same number in every page
   that loads it — otherwise the browser caches one copy per page.
5. Commit the images, `photos.js` **and** `js/atlas-sheets.js`.

### When placement is wrong

`build_sheets.mjs` keeps cards clear of the coastline and inside the frame. To
override a single card, add to its record in `photos.js`:

```js
card: {angle: 210, lead: 180}   // bearing from the pin, and distance
```

Then rebuild. `CARD_SWAPS` at the top of **`data/photos.js`** exchanges the
positions of two groups where the automatic order crosses their strings.

---

## Two layouts

Above **800px** the photographs hang on strings from their pins. Below it they
leave the map for a two-column grid, and a numbered disc takes each one's place
at the end of its string; the numbers match, and tapping one opens the
lightbox. The hash is the same in both: `#italy/matera` opens that photograph
directly.

That number appears in two places and they must agree: the `@media` query in
`gallery.html` and the `matchMedia` call in `makeLayout()` in `js/atlas.js`.

---

## check_css.mjs

Audits every CSS custom property, per page and in scope. It catches two things
that look like nothing on screen:

- **used, never declared** — `var(--x, 1rem)` with no `--x` anywhere works
  forever on its fallback, so the knob does not exist. Worse without a
  fallback: the whole declaration is invalid at computed-value time and the
  property silently falls back to `inherit`.
- **scope leaks** — a property declared in one page's inline `<style>` and used
  by a shared stylesheet, so it works on that page and fails everywhere else. A
  repository-wide grep cannot see this; the script reports which page declares
  it and which pages use it without.

Exits 1 on anything missing, so it can go in a pre-commit hook.

---

## Notes

- **Fonts are self-hosted**, subsetted WOFF2. DM Sans needs its italic — the
  captions and the education rows use it.
- **Bootstrap loads before `style.css`.** At equal specificity the later sheet
  wins, so that order is required. Bootstrap's `a:hover` underline is (0,1,1);
  anything overriding it needs a pseudo-class of its own, not merely a class.
- **`404.html` inserts `<base href="/">` when served over http**, so it works
  at any depth, and skips it on `file://` so it can still be opened locally.
- A page is `.column` + `.module` + `h2`. Nothing else is needed for a new one.
- **`miscellany.html` is not in the nav yet.** The nav on `index`,
  `mathematics`, `gallery` and `404` has three items; the miscellany pages
  carry a fourth. Adding it means editing all four, and adding the page to
  `sitemap.xml`.
- **A miscellany page opens with `.piece-head`**: back link, `h2`, dateline,
  in that DOM order, on one row. Same construction as a region sheet's head.
  The `h2` keeps `.module h2`'s face and size; only its margin is cleared.
