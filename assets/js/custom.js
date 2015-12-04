(function($) {

// prettyPhoto
	jQuery(document).ready(function(){
		jQuery('a[data-gal]').each(function() {
			jQuery(this).attr('rel', jQuery(this).data('gal'));
		});
		jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});


		console.log($(".typedStrings")[0]);



		$(".typedStrings").typed({
            strings: ["<something else>", "lorem ipsum", "geek"],
						contentType: 'text',
            typeSpeed: 80,
						backSpeed: 50,
						backDelay: 1000,
						loop: true

        });

	});


})(jQuery);
