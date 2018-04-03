$(function(){
	var bannerSwiper = new Swiper('.shop-container', {
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
});