// Mobile phone mask
function setCursorPosition(pos, e) {
	e.focus();
	if (e.setSelectionRange) e.setSelectionRange(pos, pos);
	else if (e.createTextRange) {
		var range = e.createTextRange();
		range.collapse(true);
		range.moveEnd("character", pos);
		range.moveStart("character", pos);
		range.select()
	}
}

function mask(e) {
	var matrix = this.placeholder,
				 i = 0,
				 def = matrix.replace(/\D/g, ""),
				 val = this.value.replace(/\D/g, "");
	
	def.length >= val.length && (val = def);
	
	matrix = matrix.replace(/[_\d]/g, function(a) {
		return val.charAt(i++) || "_"
	});
	
	this.value = matrix;
	i = matrix.lastIndexOf(val.substr(-1));
	i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
	setCursorPosition(i, this)
}
// End mobile phone mask

$(document).ready(function (e) {
	var width = $('.entries')[0].offsetWidth;
	$('.timeline')[0].style.width = width;
	$(".spoiler").click(function (e) {
		body = e.currentTarget.lastElementChild;
		body.classList.toggle('spoiler-body-display');

		present = e.currentTarget.firstElementChild;
		svg = present.lastElementChild.firstElementChild;
		svg.classList.toggle('svg-rotate');
	});
	$("#phone")[0].addEventListener("input", mask, false);
})