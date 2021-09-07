/*
================================================================
 Styles Switcher
================================================================
*/

(function ($) {
	"use strict";

$(".switcher-toggle").on('click', function(){
			var div = $("#styles-switcher.left");
			var divright = $("#styles-switcher.right");
			
			if (divright.css("right") === "-202px") {
				$(divright).animate({right: "0px"},300).addClass("shadow");
			} else {
				$(divright).animate({right: "-202px"},300).removeClass("shadow");
			};
			
			if (div.css("left") === "-202px") {
				$(div).animate({left: "0px"},300).addClass("shadow");; 
			} else {
				$(div).animate({left: "-202px"},300).removeClass("shadow");
			};
		});
$('#styles-switcher ul li').on('click', function(){
	 var path = $(this).data('path');
     $('#color-switcher').attr('href', path);
	 $(this).parent().find("li").removeClass("active");
	 $(this).addClass("active");
});

$('#reset-color').on('click', function(){
	 $("#color-switcher").removeAttr("href");
	 $("#styles-switcher ul li").parent().find("li").removeClass("active");
});

})(jQuery);