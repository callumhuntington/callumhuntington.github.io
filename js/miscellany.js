/* miscellany.js — tap to open, tap again to go.
 *
 * Where there is a pointer, hover does all the work and this file does nothing:
 * every click falls straight through to the link. Where there is not, a card
 * has to be opened before it can be followed, or the only way to read a title
 * would be to visit the piece it belongs to.
 *
 * The media query is tested at click time rather than at load, so a window
 * dragged across the breakpoint — or a laptop with a touchscreen, which
 * reports both — behaves correctly without a reload.
 *
 * No jQuery: this is four listeners and a class.
 */
(function () {
  'use strict';

  var TOUCH = window.matchMedia('(hover: none), (max-width: 600px)');
  var pieces = document.querySelectorAll('.piece');
  if (!pieces.length) return;

  function closeAll(except) {
    document.querySelectorAll('.piece.is-open').forEach(function (p) {
      if (p !== except) p.classList.remove('is-open');
    });
  }

  document.querySelectorAll('.piece-sheet').forEach(function (sheet) {
    sheet.addEventListener('click', function (e) {
      if (!TOUCH.matches) return;              // hovering already opened it
      var piece = sheet.closest('.piece');
      if (piece.classList.contains('is-open')) return;   // second tap: follow
      e.preventDefault();
      // Only one at a time. Two open sheets would overlap each other, and the
      // one later in source order would win on z-index for no good reason.
      closeAll(piece);
      piece.classList.add('is-open');
    });
  });

  document.querySelectorAll('.piece-close').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      // The button is a sibling of the link, not a child, so this is only
      // guarding against the document listener below.
      e.stopPropagation();
      btn.closest('.piece').classList.remove('is-open');
    });
  });

  // A tap anywhere else on the page closes whatever is open — the same thing
  // moving the pointer away does on a desktop.
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.piece')) closeAll(null);
  });

  // Escape, for a keyboard that has one.
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAll(null);
  });

  // Crossing the breakpoint mid-session would otherwise strand a card open
  // with no × to close it, because the button is hidden above 600px.
  TOUCH.addEventListener('change', function () { closeAll(null); });
})();
