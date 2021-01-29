$(function () {

	$(".rating").rateYo({
		starWidth: "11px",
		normalFill: "#d6d6d6",
		ratedFill: "#ffcc00",
		readOnly: true,
		spacing: "8px",
	});

	$(".filter-price__input").ionRangeSlider({
		type: "double",
		onStart: function (data) {
			$(".filter-price__from").text(data.from);
			$(".filter-price__to").text(data.to);
		},
		onChange: function (data) {
			$(".filter-price__from").text(data.from);
			$(".filter-price__to").text(data.to);
		},
	});

	$(".top-slider__inner").slick({
		arrows: false,
		dots: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000,
	});

	var mixerFirst = mixitup(".products-top__content", {
		selectors: {
			control: ".filter-1",
		},
	});

	var mixerSecond = mixitup(".design__content", {
		selectors: {
			control: ".filter-2",
		},
	});
});
