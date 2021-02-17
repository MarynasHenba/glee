$(function () {

	$('.user-nav__link--menu').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active')
	});

	$(".details-top__num").styler();

	$(".details-bottom__btn").on("click", function (e) {
		e.preventDefault();
		$(".details-bottom__btn").removeClass("details-bottom__btn--active");
		$(this).addClass("details-bottom__btn--active");

		$(".details-bottom__content-item").removeClass(
			"details-bottom__content-item--active"
		);
		$($(this).attr("href")).addClass("details-bottom__content-item--active");
	});

	$(".details-top-slide__small").slick({
		asNavFor: ".details-top-slide__big",
		focusOnSelect: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		vertical: true,
		draggable: false,
		// fade: true,
	});
	$(".details-top-slide__big").slick({
		asNavFor: ".details-top-slide__small",
		draggable: false,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
	});

	$(".related-products__inner").slick({
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
	});

	$(".rating").rateYo({
		starWidth: "13px",
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
