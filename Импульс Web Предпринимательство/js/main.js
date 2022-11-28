$(document).ready(function () {
	$('.menu-btn').click(function () {
		if ($('.menu5-main').css('display') == "none") {
			$('.menu5-main').css('top', $('.vis').height()+20);
			$('.menu5-main').css('display', 'flex');
		} else {
			$('.menu5-main').css('display', 'none');
		}
	});
	$('.menu6-btn').click(function () {
		if ($('.menu-selects').css('display') == "none") {
			$('.menu-selects').css('display', 'flex');
		} else {
			$('.menu-selects').css('display', 'none');
		}
	});
	$('.menu7-btn').click(function () {
		if ($('.tags').css('display') == "none") {
			$('.tags').css('display', 'flex');
		} else {
			$('.tags').css('display', 'none');
		}
	});
	if (($(window).width() <= 1200) && ($(window).width() >= 980)) { /* 111 */
		kol = $('.carousel-item')
		console.log(kol)
		for (var i = 0; i < kol.length; i++) {
			$(kol[i]).append($(kol[i]).find('.img-carousel > .carousel-item-text'))
		}
	} else {
		kol = $('.carousel-item')
		console.log(kol)
		for (var i = 0; i < kol.length; i++) {
			$(kol[i]).find('.img-carousel').append($(kol[i]).find('.carousel-item-text'))
		}
	}
});

$(window).resize(function () {
	if (($(window).width() <= 1200) && ($(window).width() >= 980)) { /* 111 */
		kol = $('.carousel-item')
		console.log(kol)
		for (var i = 0; i < kol.length; i++) {
			$(kol[i]).append($(kol[i]).find('.img-carousel > .carousel-item-text'))
		}
	} else {
		kol = $('.carousel-item')
		console.log(kol)
		for (var i = 0; i < kol.length; i++) {
			$(kol[i]).find('.img-carousel').append($(kol[i]).find('.carousel-item-text'))
		}
	}
	if (($(window).width() > 1200)) {
		$('.menu-selects').css('display', 'block');
		$('.tags').css('display', 'flex');
	} else {
		$('.menu-selects').css('display', 'none');
		$('.tags').css('display', 'none');
	}
})