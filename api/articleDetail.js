new Vue({
	el: '#articleDtail',
	data: {
		mescroll: null,
		articleId: 0,
		articleDtailData: '',
		articleList: ''
	},
	mounted: function () {
		var self = this;
		self.$nextTick(function() {
			self.articleId = sessionStorage.getItem("articleId") || 2;
	        self.mescroll = new MeScroll("body", { //id固定"body"
	            down: {
	                isLock: true
	            },
	            up: {
	                auto: true,
	                callback: self.upCallback, //上拉回调
	                isBounce: false,
	                toTop:{
	                    src : "./static/images/goback.png", //默认滚动到1000px显示,可配置offset修改
	                    //html: null, //html标签内容,默认null; 如果同时设置了src,则优先取src
	                    offset : 50
	                },
	                offset: 50,
	                noMoreSize: 5,
	                empty:{ //配置列表无任何数据的提示
	                    warpId:"article-list",
	                    icon : "../res/img/mescroll-empty.png" , 
	                    tip : "亲,暂无相关数据哦~" , 
	                    btntext : "去逛逛 >" , 
	                    btnClick : function() {
	                        alert("点击了去逛逛按钮");
	                    } 
	                },
	            }
	        });
		});
	},
	methods: {
		upCallback: function () {
			var self = this;
			var param = new URLSearchParams();
			param.append("id", 2);
			axios.post('http://api.mall.thatsmags.com/Api/Article/getDetail',param)
			.then(function (response) {
				if (response.data.code == 1) {
					self.articleDtailData = response.data.data.article;
					self.articleList = response.data.data.list;
					self.mescroll.endUpScroll(true);
				} else {
					console.log(error);
				}
			})
			.catch(function (error) {
				console.log(error);
			});
		}
	}
});

// $(function(){
// 	$(".icon-shoucang1").click(function(){
//   		$(this).toggleClass("product-shoucang");
// 	});

// 	// 关闭对联广告
// 	$('.couplet-close').on('click',function(){
// 		$(this).parents('.couplet').hide();
// 	});

// 	CoupletPositionLeft();
// 	CoupletPositionRight();
// 	$(window).resize(function(event) {
// 		CoupletPositionLeft();
// 		CoupletPositionRight();
		
// 	});
// 	// 广告位随着屏幕的改变而改变
// 	function CoupletPositionLeft(){
// 		if ($('.couplet-left')) {
// 			$isShow = $('.wrapper>.container').offset().left-$('.couplet-left').width();
// 			if ($isShow>0) {
// 				$('.couplet-left').css({"display":"block","left":$isShow});
// 			} else if($isShow>-20) {
// 				$('.couplet-left').css({"display":"block","left":$isShow+Number(20)});
// 			} 
// 			else {
// 				$('.couplet-left').css({"display":"none"});
// 			}
// 		}
// 	}
// 	function CoupletPositionRight(){
// 		if ($('.couplet-right')) {
// 			$isShow = $('.wrapper>.container').offset().left-$('.couplet-left').width();
// 			$rightIsShow = $('.wrapper>.container').offset().left+1000;
			
// 			if ($isShow>0) {
// 				$('.couplet-right').css({"display":"block","right":$isShow});
// 			} else if($isShow>-20) {
// 				$('.couplet-right').css({"display":"block","right":$isShow+Number(20)});
// 			} 
// 			else {
// 				$('.couplet-right').css({"display":"none"});
// 			}
// 		}
// 	}

// });