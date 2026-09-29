/* landing-pile.js — turns the pile of polaroids on the landing page.
 *
 * Each card's place in the pile is one number, --rel: 0 on top, 1 under it,
 * and so on. style.css works out the offset, tilt, size and stacking from that
 * number and transitions between them, so all this does is count. Each turn
 * the top card goes to the back and every other card moves up a place.
 *
 * Pauses while a mouse is over the pile and while the tab is in the
 * background. Under reduced motion the stylesheet turns each step into a
 * crossfade; the counting here is the same.
 */
(function () {
  'use strict';

  var INTERVAL = 4500;   // ms between turns

  var pile = document.querySelector('.pile');
  if (!pile) return;

  var cards = Array.prototype.slice.call(pile.querySelectorAll('.pile-card'));
  var n = cards.length;
  if (n < 2) return;

  var turn = 0;          // how many cards have gone to the back, mod n
  var timer = null;
  var pointedAt = false;

  function paint() {
    cards.forEach(function (card, i) {
      var rel = (i - turn + n) % n;
      card.style.setProperty('--rel', rel);
      card.setAttribute('data-top', rel === 0 ? 'true' : 'false');
    });
  }

  function step() {
    turn = (turn + 1) % n;
    paint();
  }

  function start() {
    if (timer || pointedAt || document.hidden) return;
    timer = setInterval(step, INTERVAL);
  }

  function stop() {
    clearInterval(timer);
    timer = null;
  }

  // Mouse only. A tap on a phone fires pointerenter and nothing to undo it,
  // which would leave the pile stopped for good after one touch.
  pile.addEventListener('pointerenter', function (e) {
    if (e.pointerType !== 'mouse') return;
    pointedAt = true;
    stop();
  });
  pile.addEventListener('pointerleave', function (e) {
    if (e.pointerType !== 'mouse') return;
    pointedAt = false;
    start();
  });

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) stop(); else start();
  });

  paint();
  start();
})();
