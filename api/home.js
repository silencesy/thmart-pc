Vue.use(VueAwesomeSwiper);
new Vue({
	el: '#home',
	components: {
		LocalSwiper: VueAwesomeSwiper.swiper,
    	LocalSlide: VueAwesomeSwiper.swiperSlide
	},
	data: {
		swiperOptionA: {
     		pagination: {
	          	el: '.swiper-pagination',
	          	clickable :true,
	        },
	        navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
	        },
	        loop: true
		},
        // 首页数据
		homeData: null,
		mescroll: null,
        // 上拉加载
		page: 0,
		pageSize: 10,
		set_position: 12,
		hotProductData: [],
		totalPages: null,
		footerShow: false,
		allNavigationData: null,
		allNavigationShow: false,

	},
	mounted: function () {
		var self = this;
		self.$nextTick(function() {
            // 获取首页数据
			self.getHomeData();
            self.navigationShow(false);
		});
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
                    offset : 600
                },
                offset: 500,
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
    computed: {
		sy: function() {
			return this.$refs.awesomeSwiperA.swiper;
		}
    },
    methods: {
    	getHomeData: function () {
    		var self = this;
            
            
   //  		var param = new URLSearchParams();
			// param.append("terminal", "PC");
   //  		axios.post('http://proj7.thatsmags.com/Api/Public/home',param)
			// .then(function (response) {
			// 	self.homeData = response;
			// 	if (response.code == 1) {
			// 		self.homeData = response.data;
			// 	}
			// })
			// .catch(function (error) {
			// 	console.log(error);
			// });
            self.http.ajax({
                type: 'POST',
                url: 'http://proj7.thatsmags.com/Api/Public/home',
                data: { terminal: 'PC' },
                // type of data we are expecting in return:

                success: function(response){
                    self.homeData = response;
                    if (response.code == 1) {
                        self.homeData = response.data;
                    }
                },
                error: function(xhr, type){
                    console.log(123);
                }
            });
    	},
    	upCallback: function () {
    		var self = this;
    		self.page ++;
            self.http.ajax({
                type: 'get',
                url: 'http://api.mall.thatsmags.com/Api/Set/getList',
                data: { 
                    set_position: self.set_position,
                    p: self.page,
                    pageSize: self.pageSize
                },
                success: function(response){
                    // self.homeData = response;
                    if (response.code == 1) {
                        self.hotProductData = self.hotProductData.concat(response.data.goods);
                        self.totalPages = response.data.totalPages;
                        self.mescroll.endUpScroll(self.totalPages == self.page || self.totalPages==0 || self.page==2);
                        if(self.totalPages == self.page || self.totalPages==0 || self.totalPages==2) {
                            self.footerShow = true;
                        }
                    }
                },
                error: function(xhr, type){
                    self.mescroll.endErr();
                    self.mescroll.endUpScroll(true);
                    self.footerShow = true;
                }
            });
            // axios.get('http://api.mall.thatsmags.com/Api/Set/getList', {
            //     params: {
            //         set_position: self.set_position,
            //         p: self.page,
            //         pageSize: self.pageSize
            //     }
            // })
            // .then(function(response){
            	// if (res.data.code == 1) {
            	// 	self.hotProductData = self.hotProductData.concat(res.data.data.goods);
            	// 	self.totalPages = res.data.data.totalPages;
            	// 	console.log(self.totalPages)
            	// 	self.mescroll.endUpScroll(self.totalPages == self.page || self.totalPages==0 || self.totalPages==2);
            	// 	if(self.totalPages == self.page || self.totalPages==0 || self.totalPages==2) {
            	// 		self.footerShow = true;
            	// 	}
            	// }
               
            // })
            // .catch(function(err){
            //     self.mescroll.endErr();
            //     self.mescroll.endUpScroll(true);
            // });
    		
    	},
    	navigationShow: function(data) {
    		var self = this;
    		
    		if(!self.allNavigationData) {
    			// axios.get('http://api.mall.thatsmags.com/Api/Archive/getGoodsCats')
	      //       .then(function(res){
	      //       	console.log(res);
	      //       	if (res.data.code == 1) {
	      //       		self.allNavigationData = res.data.data;
	      //       		self.allNavigationShow = data;
	      //       	}
	      //       })
	      //       .catch(function(err){
	      //           console.log(err)
	      //       });
                self.http.ajax({
                    type: 'get',
                    url: 'http://api.mall.thatsmags.com/Api/Archive/getGoodsCats',
                    data: { 
                        set_position: self.set_position,
                        p: self.page,
                        pageSize: self.pageSize
                    },
                    success: function(response){
                        if (response.code == 1) {
                            self.allNavigationData = response.data;
                            self.allNavigationShow = data;
                        }
                    },
                    error: function(xhr, type){
                       
                    }
                });
    		} else {
    			self.allNavigationShow = true;
    		}
    		
    	},
    	navigationHide: function() {
    		this.allNavigationShow = false;
    	}
    }
})