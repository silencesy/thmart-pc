$(function() {
	var bannerSwiper = new Swiper('.banner-container', {
		autoplay: true,//可选选项，自动滑动
		loop : true,
	});
	console.log(this.homeData);
	var bannerSwiper = new Swiper('.pick-container', {
		autoplay: true,//可选选项，自动滑动
		loop : true,
		loopFillGroupWithBlank: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	var shopSwiper = new Swiper('.shops-container', {
		slidesPerView: 3,
		spaceBetween: 15,
		slidesPerGroup: 1,
		loop: true,
		loopFillGroupWithBlank: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
    });
});