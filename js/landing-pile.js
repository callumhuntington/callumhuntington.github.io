/* landing-pile.js — turns the pile of polaroids on the landing page.
 *
 * Each card's place in the pile is one number, --rel: 0 on top, 1 under it,
 * and so on. style.css works out the offset, tilt, size and stacking from that
 * number and transitions between them, so most of this is counting.
 *
 * A turn is a tuck, in two halves:
 *   1. The top card is marked data-leaving: it stays above the pile and is
 *      pulled off to the side. At the same moment the others move up a place
 *      underneath it.
 *   2. At the far point the mark comes off. The card takes the back place —
 *      its z-index drops behind the others there and then — and slides back
 *      in underneath them.
 * The two durations are read from style.css (--leave-ms, --return-ms), so the
 * script and the transitions cannot drift apart.
 *
 * Then the pile is still for STILL ms, and the next turn starts.
 *
 * Under reduced motion there is no tuck: the stylesheet makes each turn a
 * crossfade between top cards.
 *
 * Pauses while a mouse is over the pile (a turn already under way finishes)
 * and while the tab is in the background.
 */
(function () {
  'use strict';

  var STILL = 2500;      // ms each photograph rests on top between turns

  var pile = document.querySelector('.landing-pile');
  if (!pile) return;

  var cards = Array.prototype.slice.call(pile.querySelectorAll('.landing-card'));
  var n = cards.length;
  if (n < 2) return;

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  function ms(name, fallback) {
    var v = parseFloat(getComputedStyle(pile).getPropertyValue(name));
    return isNaN(v) ? fallback : v;
  }

  var turn = 0;          // how many cards have gone to the back, mod n
  var timer = null;      // the wait before the next turn
  var leaving = null;    // the card in the first half of a tuck, if any
  var halfway = null;    // the timer that ends that first half
  var pointedAt = false;

  function paint() {
    cards.forEach(function (card, i) {
      var rel = (i - turn + n) % n;
      card.style.setProperty('--rel', rel);
      card.setAttribute('data-top', rel === 0 ? 'true' : 'false');
    });
  }

  // How far to pull the top card off, in % of the card's width. Ideally 62%,
  // which leaves little of it over the pile when it drops behind. But it must
  // not end up more than about a third of a card past the edge of the window,
  // so where the pile sits near the edge it goes less far — and at worst 30%.
  function leaveDistance() {
    var box = pile.getBoundingClientRect();
    var w = box.width;
    if (!w) return 60;
    var room = document.documentElement.clientWidth - box.right;
    var pct = (room + 0.35 * w) / w * 100;
    return Math.max(30, Math.min(62, pct));
  }

  // Second half of the tuck. Safe to call early: a turn cut short by the tab
  // going to the background finishes here at once.
  function tuck() {
    clearTimeout(halfway);
    halfway = null;
    if (!leaving) return;
    leaving.removeAttribute('data-leaving');
    leaving = null;
  }

  function step() {
    timer = null;
    tuck();
    var top = cards[turn];
    turn = (turn + 1) % n;

    var turnLength = 500;  // reduced motion: just the crossfade
    if (!reduced.matches) {
      var leaveMs = ms('--leave-ms', 420);
      turnLength = leaveMs + ms('--return-ms', 600);
      top.style.setProperty('--leave-x', leaveDistance());
      leaving = top;
      top.setAttribute('data-leaving', 'true');
      halfway = setTimeout(tuck, leaveMs);
    }
    paint();

    if (!pointedAt && !document.hidden) timer = setTimeout(step, turnLength + STILL);
  }

  function start() {
    if (timer || pointedAt || document.hidden) return;
    timer = setTimeout(step, STILL);
  }

  function stop() {
    clearTimeout(timer);
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
    if (document.hidden) { stop(); tuck(); } else start();
  });

  paint();
  start();
})();
