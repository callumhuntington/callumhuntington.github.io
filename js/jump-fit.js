/* jump-fit.js — hold the section list on one line.
 *
 * The obvious approach is a vw-based clamp on the font size, and it does not
 * survive contact with a second city: the row's natural width depends on how
 * many sections there are and how long their names are, so a formula tuned for
 * five short words breaks the first time somewhere wants "brutalist icons".
 * Measuring costs fifteen lines and works for any label set.
 *
 * white-space: nowrap in the CSS is what makes scrollWidth the width the row
 * WANTS rather than the height it settled for. The ratio of that to the space
 * available is the factor to shrink by.
 */
(function () {
  'use strict';

  var MIN = 11;      // px. Below this it is illegible; better to overflow.
  var SAFETY = 0.98; // sub-pixel rounding, and the trailing letter-spacing
                     // on the last word, which scrollWidth includes.

  function fit(nav) {
    // Back to the stylesheet's size first, or each pass would shrink the
    // result of the last one and the row would creep away to nothing.
    nav.style.fontSize = '';
    var base = parseFloat(getComputedStyle(nav).fontSize);
    var avail = nav.clientWidth;
    var natural = nav.scrollWidth;
    if (!avail || natural <= avail) return;
    nav.style.fontSize = Math.max(MIN, base * (avail / natural) * SAFETY) + 'px';
  }

  function fitAll() {
    document.querySelectorAll('.jump').forEach(fit);
  }

  document.addEventListener('DOMContentLoaded', fitAll);

  // Orbita arrives after first paint, and a display face's metrics are nothing
  // like the fallback's — measuring before it lands gives the wrong answer.
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(fitAll);
  }

  // rAF rather than a timer: resize fires far faster than the browser paints,
  // and every one of these is a forced layout.
  var queued = false;
  window.addEventListener('resize', function () {
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () { queued = false; fitAll(); });
  });
})();
