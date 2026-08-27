/* Lightbox tuning, shared by every page that opens one — the atlas and the
 * recommendations pages. It was inline in gallery.html until there were two.
 */
// Lightbox tuning. disableScrolling is the important one: the overlay is
  // fixed now, so letting the page scroll behind it would be disorienting
  // rather than merely misaligned.
  $(function () {
    if (!window.lightbox) return;
    lightbox.option({
      disableScrolling: true,
      wrapAround: true,
      albumLabel: '%1 of %2',
      fadeDuration: 200,
      imageFadeDuration: 200,
      positionFromTop: 50    // now only feeds the maximum-height sum
    });
    // Move the close control into the white card so the CSS above can hang it
    // off the card's corner. Lightbox2 finds it with $lightbox.find(), so it
    // does not mind where in the tree it lives.
    $('.lb-outerContainer').append($('.lb-closeContainer'));
  });

/* ── video in the album ──
 * Lightbox2 shows photographs only: changeImage() points an <img> at the album
 * entry's link, so an mp4 arrives as a broken image. That is fine until a strip
 * holds both, because an album is one list and the chevrons walk all of it —
 * a reader stepping from Monumental 1 to Monumental 2 would land on the break.
 *
 * So the plugin is taught the case rather than the videos being pulled out of
 * the albums. Everything below wraps the INSTANCE: lightbox.js ends on
 * `return new Lightbox()`, so the constructor is never exposed and there is no
 * prototype to reach from here — but a method set on the instance shadows the
 * prototype, and the plugin's own internal calls go through `this`, so they
 * arrive here too. lightbox.js itself is untouched; it is vendor and gets
 * replaced wholesale on an update.
 *
 * The one asymmetry worth knowing: a photograph's size is known from a
 * preloaded Image, a video's only after loadedmetadata. Same fitting maths,
 * different event.
 */
$(function () {
  var LB = window.lightbox;
  if (!LB) return;

  var VIDEO = /\.(mp4|webm|ogv)(\?.*)?(#.*)?$/i;

  // A sibling for .lb-image inside the same container, so the white card, the
  // nav arrows and the foot all apply to it unchanged.
  var $video = $('<video class="lb-video" controls playsinline preload="metadata"></video>');
  $('.lb-container').append($video);

  function quiet() {
    $video[0].pause();
    $video.hide().removeAttr('src');
    $video[0].load();            // drops the buffer rather than leaving it resident
  }

  // showImage() fades in .lb-image by name. Fade in whichever this entry is.
  var showImage = LB.showImage;
  LB.showImage = function () {
    var isVideo = VIDEO.test(this.album[this.currentImageIndex].link);
    showImage.call(this);
    if (isVideo) {
      this.$lightbox.find('.lb-image').hide();
      $video.fadeIn(this.options.imageFadeDuration);
      $video[0].muted = false;   // sound is the point of opening it
      $video[0].play().catch(function () {
        /* an unmuted autoplay may be refused — the controls are right there */
      });
    }
  };

  var changeImage = LB.changeImage;
  LB.changeImage = function (imageNumber) {
    var self = this;
    var link = this.album[imageNumber].link;

    $video[0].pause();           // whatever is being left, stop it making noise

    if (!VIDEO.test(link)) {
      quiet();
      return changeImage.call(this, imageNumber);
    }

    this.disableKeyboardNav();
    this.$overlay.fadeIn(this.options.fadeDuration);
    $('.lb-loader').fadeIn('slow');
    this.$lightbox.find('.lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption').hide();
    $video.hide();
    this.$outerContainer.addClass('animating');

    $video.off('loadedmetadata').one('loadedmetadata', function () {
      var v = $video[0];
      var w = v.videoWidth;
      var h = v.videoHeight;

      // The same fit the plugin gives a photograph: the viewport less the
      // card's padding, the image border, and the room the foot needs.
      var maxW = $(window).width() - self.containerPadding.left - self.containerPadding.right -
                 self.imageBorderWidth.left - self.imageBorderWidth.right - 20;
      var maxH = $(window).height() - self.containerPadding.top - self.containerPadding.bottom -
                 self.imageBorderWidth.top - self.imageBorderWidth.bottom -
                 self.options.positionFromTop - 70;

      if (w > maxW || h > maxH) {
        if ((w / maxW) > (h / maxH)) { h = Math.round(h / (w / maxW)); w = maxW; }
        else                         { w = Math.round(w / (h / maxH)); h = maxH; }
      }

      $video.width(w).height(h);
      self.sizeContainer(w, h);
    });

    $video.attr('src', link);
    $video[0].load();
    this.currentImageIndex = imageNumber;
  };

  // Closing has to silence it too, or the audio outlives the card.
  var end = LB.end;
  LB.end = function () {
    quiet();
    end.call(this);
  };
});
