$(document).ready(function() {
	$('.panel-min').css("height", $(".main").height());
	$('.windows_grids').click(function(){
		if ($('.panel-min').css('display') == "none") {
			$('.panel-min').css('display', 'flex')
			$('.panel-min').css('width', '15%')
		} else {
			$('.panel-min').css('display', 'none')
		}
	})
});

$(window).resize(function() {
	if ($(window).width() <= 1200) {
		if ($('.panel-min').css('display') != "none") {
			$('.panel-min').css('display', 'none')
		}
	}
});