/* Template: Evolo - StartUp HTML Landing Page Template
   Author: Inovatik
   Created: June 2019
   Description: Custom JS file
*/


(function ($) {
	"use strict";

	/* Video Lightbox - Magnific Popup */
	$('.popup-youtube, .popup-vimeo').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
		iframe: {
			patterns: {
				youtube: {
					index: 'youtube.com/',
					id: function (url) {
						var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
						if (!m || !m[1]) return null;
						return m[1];
					},
					src: 'https://www.youtube.com/embed/%id%?autoplay=1'
				},
				vimeo: {
					index: 'vimeo.com/',
					id: function (url) {
						var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
						if (!m || !m[5]) return null;
						return m[5];
					},
					src: 'https://player.vimeo.com/video/%id%?autoplay=1'
				}
			}
		}
	});

	/* Lightbox - Magnific Popup */
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: false, /* keep it false to avoid html tag shift with margin-right: 17px */
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

})(jQuery);