new Vue({
	el: '#productList',
	data: {
		mescroll: null,
		page: 0,
		pageSize: 16,
        banner: null,
		listData: [],
		totalPages: 0,
		catId: 0,
		align: 'center',
        msnry: null,
        grid: null,
        flag: 0,
        isActive: false,
        footerShow: false,
        url: null,
        deal: false

	},
	components: {
		
    },
	mounted: function() {
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
                offset: 0,
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
        self.newMasonry();
    },
	methods: {
		upCallback: function() {
			var self = this;
            if (self.getUrlParameter('id') == 'deal') {
                self.deal = true;
                self.page ++;
                // axios.get('http://proj7.thatsmags.com/Api/Set/getList', {
                //     params: {
                //         set_position: 17,
                //         p: self.page,
                //         pageSize: self.pageSize
                //     }
                // })
                // .then(function(res){
                //     console.log(data);
                //     if (res.data.code==1) {
                //         self.flag++;
                //         self.banner = res.data.data.banner;
                //         var i;
                //         for (i in res.data.data.goods) { 
                //             self.listData.push(res.data.data.goods[i]);
                //         }
                //         // console.log(self.msnry.masonry());
                //         self.mescroll.endUpScroll(self.page == res.data.data.totalPages || res.data.data.totalPages == 0);
                //         if (self.page == res.data.data.totalPages || res.data.data.totalPages == 0) {
                //             self.footerShow = true;
                //         }
                //         // self.minirefresh.endUpLoading(self.page == res.data.data.totalPages);
                //         self.$nextTick(function(){
                //             var imgLoadBox = this.$el.querySelector('.th-product-box');
                //             var imgLoad = imagesLoaded( imgLoadBox, function() {
                //                 self.newMasonry();
                //                 self.isActive = true;
                //             });
                //             console.log(imgLoad);
                            
                //         });

                //     } else {

                //     }
                // })
                // .catch(function(err){
                //     self.mescroll.endUpScroll(true);
                // });
                self.http.ajax({
                    type: 'GET',
                    url: 'http://proj7.thatsmags.com/Api/Set/getList',
                    data: {
                        set_position: 17,
                        p: self.page,
                        pageSize: self.pageSize
                    },
                    success: function(data){
                        if (data.code==1) {
                            self.flag++;
                            self.banner = data.data.banner;
                            var i;
                            for (i in data.data.goods) { 
                                self.listData.push(data.data.goods[i]);
                            }
                            // console.log(self.msnry.masonry());
                            self.mescroll.endUpScroll(self.page == data.data.totalPages || data.data.totalPages == 0);
                            if (self.page == data.data.totalPages || data.data.totalPages == 0) {
                                self.footerShow = true;
                            }
                            // self.minirefresh.endUpLoading(self.page == data.data.totalPages);
                            self.$nextTick(function(){
                                var imgLoadBox = this.$el.querySelector('.th-product-box');
                                var imgLoad = imagesLoaded( imgLoadBox, function() {
                                    self.newMasonry();
                                    self.isActive = true;
                                });
                                console.log(imgLoad);
                                
                            });
                        } else {
                            self.mescroll.endUpScroll(true);
                        }
                    },
                    error: function(xhr, type){
                        self.mescroll.endUpScroll(true);
                    }
                })
            } else if (self.getUrlParameter('id') == 'feaProduct') {
                self.page ++;
                self.deal = true;
                self.http.ajax({
                    type: 'GET',
                    url: 'http://proj7.thatsmags.com/Api/Set/getList',
                    data: {
                        set_position: 4,
                        p: self.page,
                        pageSize: self.pageSize
                    },
                    success: function(data){
                        if (data.code==1) {
                            self.banner = data.data.banner;
                            self.flag++;
                            var i;
                            for (i in data.data.goods) { 
                                self.listData.push(data.data.goods[i]);
                            }
                            // console.log(self.msnry.masonry());
                            self.mescroll.endUpScroll(self.page == data.data.totalPages || data.data.totalPages == 0);
                            if (self.page == data.data.totalPages || data.data.totalPages == 0) {
                                self.footerShow = true;
                            }
                            // self.minirefresh.endUpLoading(self.page == data.data.totalPages);
                            self.$nextTick(function(){
                                var imgLoadBox = this.$el.querySelector('.th-product-box');
                                var imgLoad = imagesLoaded( imgLoadBox, function() {
                                    self.newMasonry();
                                    self.isActive = true;
                                });
                                console.log(imgLoad);
                                
                            });
                        } else {
                            self.mescroll.endUpScroll(true);
                        }
                    },
                    error: function(xhr, type){
                        self.mescroll.endUpScroll(true);
                    }
                })
                // axios.get('http://proj7.thatsmags.com/Api/Set/getList', {
                //     params: {
                //         set_position: 4,
                //         p: self.page,
                //         pageSize: self.pageSize
                //     }
                // })
                // .then(function(res){
                //     console.log(res.data);
                //     if (res.data.code==1) {
                //         self.banner = res.data.data.banner;
                //         self.flag++;
                //         var i;
                //         for (i in res.data.data.goods) { 
                //             self.listData.push(res.data.data.goods[i]);
                //         }
                //         // console.log(self.msnry.masonry());
                //         self.mescroll.endUpScroll(self.page == res.data.data.totalPages || res.data.data.totalPages == 0);
                //         if (self.page == res.data.data.totalPages || res.data.data.totalPages == 0) {
                //             self.footerShow = true;
                //         }
                //         // self.minirefresh.endUpLoading(self.page == res.data.data.totalPages);
                //         self.$nextTick(function(){
                //             var imgLoadBox = this.$el.querySelector('.th-product-box');
                //             var imgLoad = imagesLoaded( imgLoadBox, function() {
                //                 self.newMasonry();
                //                 self.isActive = true;
                //             });
                //             console.log(imgLoad);
                            
                //         });

                //     } else {

                //     }
                // })
                // .catch(function(err){
                //     self.mescroll.endUpScroll(true);
                // });
            } else {
                self.page ++;
                self.catId = self.getUrlParameter("id");
                // axios.get('http://proj7.thatsmags.com/Api/Archive/getList', {
                //     params: {
                //         cat_id: self.catId,
                //         p: self.page,
                //         pageSize: self.pageSize
                //     }
                // })
                // .then(function(res){
                //     console.log(res.data);
                //     if (res.data.code==1) {
                //         self.banner = res.data.data.banner;
                //         self.flag++;
                //         var i;
                //         for (i in res.data.data.goods) { 
                //             self.listData.push(res.data.data.goods[i]);
                //         }
                //         self.mescroll.endUpScroll(self.page == res.data.data.totalPages || res.data.data.totalPages == 0);
                //         if (self.page == res.data.data.totalPages || res.data.data.totalPages == 0) {
                //             self.footerShow = true;
                //         }
                //         self.$nextTick(function(){
                //             var imgLoadBox = this.$el.querySelector('.th-product-box');
                //             var imgLoad = imagesLoaded( imgLoadBox, function() {
                //                 self.newMasonry();
                //                 self.isActive = true;
                //             });
                //             console.log(imgLoad);
                            
                //         });

                //     } else {

                //     }
                // })
                // .catch(function(err){
                //     self.mescroll.endUpScroll(true);
                // });
                self.http.ajax({
                    type: 'GET',
                    url: 'http://proj7.thatsmags.com/Api/Archive/getList',
                    data: {
                        cat_id: self.catId,
                        p: self.page,
                        pageSize: self.pageSize
                    },
                    success: function(data){
                        console.log(data);
                        if (data.code==1) {
                            self.banner = data.data.banner;
                            self.flag++;
                            var i;
                            for (i in data.data.goods) { 
                                self.listData.push(data.data.goods[i]);
                            }
                            self.mescroll.endUpScroll(self.page == data.data.totalPages || data.data.totalPages == 0);
                            if (self.page == data.data.totalPages || data.data.totalPages == 0) {
                                self.footerShow = true;
                            }
                            self.$nextTick(function(){
                                var imgLoadBox = this.$el.querySelector('.th-product-box');
                                var imgLoad = imagesLoaded( imgLoadBox, function() {
                                    self.newMasonry();
                                    self.isActive = true;
                                });
                                console.log(imgLoad);
                                
                            });
                        } else {
                            self.mescroll.endUpScroll(true);
                        }
                    },
                    error: function(xhr, type){
                        self.mescroll.endUpScroll(true);
                    }
                })
            }
			
		},
        newMasonry: function () {
            this.grid = this.$el.querySelector('.th-product-box');
            this.msnry = new Masonry( this.grid, {
                "gutter": 20,
                itemSelector: '.th-product-item'
            });
        }
	}

});