$(function(){
	
	var productContainer = new Swiper('.product-container', {
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

	$('.cli').click(function () {
		var cliShow = $(this).find('i').prop('class');
		var needShow = $('.pro-container');
		$(this).addClass('reviewActive ').siblings().removeClass('reviewActive ')
		$.each(needShow,function(index,item) {
			if($(item).hasClass(cliShow)){
				$(this).addClass('isShow').removeClass('isHide');
			}else if(cliShow == 'All'){
				$(item).addClass('isShow').removeClass('isHide');
			}else{
				$(item).addClass('isHide').removeClass('isShow');
			}
		})
	});

	// 关闭对联广告
	$('.couplet-close').on('click',function(){
		$(this).parents('.couplet').hide();
	});

	CoupletPositionLeft();
	CoupletPositionRight();
	$(window).resize(function(event) {
		CoupletPositionLeft();
		CoupletPositionRight();
		
	});
	// 广告位随着屏幕的改变而改变
	function CoupletPositionLeft(){
		if ($('.couplet-left')) {
			$isShow = $('.wrapper>.container').offset().left-$('.couplet-left').width();
			if ($isShow>0) {
				$('.couplet-left').css({"display":"block","left":$isShow});
			} else if($isShow>-20) {
				$('.couplet-left').css({"display":"block","left":$isShow+Number(20)});
			} 
			else {
				$('.couplet-left').css({"display":"none"});
			}
		}
	}
	function CoupletPositionRight(){
		if ($('.couplet-right')) {
			$isShow = $('.wrapper>.container').offset().left-$('.couplet-left').width();
			$rightIsShow = $('.wrapper>.container').offset().left+1000;
			
			if ($isShow>0) {
				$('.couplet-right').css({"display":"block","right":$isShow});
			} else if($isShow>-20) {
				$('.couplet-right').css({"display":"block","right":$isShow+Number(20)});
			} 
			else {
				$('.couplet-right').css({"display":"none"});
			}
		}
	}

});










