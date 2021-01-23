$(function () {
	$(".top-slider__inner").slick({
		arrows: false,
		dots: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000,
	});

	// var containerEl1 = document.querySelector("[.products__content]");
	// var containerEl2 = document.querySelector("[.design__content]");

	var mixerFirst = mixitup(".products-top__content", {
		selectors: {
			control: ".filter-1",
		},
		// animation: {
		// 	duration: 3000,
		// },
	});

	var mixerSecond = mixitup(".design__content", {
		selectors: {
			control: ".filter-2",
		},
	});
});
