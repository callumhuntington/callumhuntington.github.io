/* Video polaroids: a silent preview on hover.
 *
 * Clicking is NOT handled here. The videos carry data-lightbox like the
 * photographs, so a click belongs to Lightbox2 and the album stays one list —
 * chevrons walk photographs and videos alike. The video case is taught to the
 * plugin in lightbox-init.js; this file only covers the card on the page.
 */
(function () {
  'use strict';

  var cards = document.querySelectorAll('.video-polaroid');
  if (!cards.length) return;

  cards.forEach(function (card) {
    var video = card.querySelector('video');
    if (!video) return;

    /* The card's video stays muted whatever happens: a strip of these is a
       contact sheet, and a page that makes noise when the pointer crosses it
       is a page people close. Sound belongs to the lightbox. */
    function preview() {
      video.muted = true;
      var p = video.play();
      if (p) p.catch(function () {});
    }

    function rest() {
      video.pause();
      video.currentTime = 0.1;   // the frame the media fragment shows on load
    }

    card.addEventListener('mouseenter', preview);
    card.addEventListener('mouseleave', rest);
    card.addEventListener('focus', preview, true);
    card.addEventListener('blur', rest, true);

    /* Hand a clean frame to the lightbox rather than whatever the preview had
       reached, and stop the card playing underneath the overlay. */
    card.addEventListener('click', rest);
  });
})();
