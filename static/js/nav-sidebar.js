
//Template script here

(function($) {
  'use strict' ;
		
	$('nav').coreNavigation({
		layout: "sidebar",
		responsideSlide: true, // true or false
		dropdownEvent: "accordion",
		menuPosition: "center",
		mode: 'fixed',
		onInit: function(){
					console.log('Init coreNav');
				}
	});
		
})(jQuery);// End of use strict



