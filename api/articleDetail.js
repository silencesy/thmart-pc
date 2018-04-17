new Vue({
	el: '#articleDtail',
	data: {
		mescroll: null,
		articleId: 0,
		articleDtailData: null,
	},
	mounted: function () {
		var self = this;
		self.$nextTick(function() {
			self.getData();
		});
	},
	methods: {
		getData: function () {
			var self = this;
			
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
		},
		upCallback: function () {
			var self = this;
			self.articleId = self.getUrlParameter("id");
			var param = new URLSearchParams();
			param.append("id", self.articleId);
			axios.post('http://proj7.thatsmags.com/Api/Article/getDetail',param)
			.then(function (response) {
				if (response.data.code == 1) {
					self.articleDtailData = response.data.data;
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

// });