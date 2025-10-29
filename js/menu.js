//EasyParallax-->

function EasyParallax() {
	scrollPos = $(this).scrollTop();
	$('#hero').css({
		'background-position' : '50% ' + (-scrollPos/4)+"px"
	});
	$('#herotext').css({
		'margin-top': (scrollPos/4)+"px",
		'opacity': 1-(scrollPos/250)
	});
}
$(document).ready(function(){
	$(window).scroll(function() {
		EasyParallax();
	});
});
