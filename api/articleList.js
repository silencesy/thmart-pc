new Vue({
	el: '#articleList',
	data: {
		articleListData: null,
		mescroll: null,
		catId: null,
		page: 0,
		pageSize: 9,
		listData: [],
		totalPages: 0,
        tabs: [],
        tabContents: [],
        banner: null,
        num: 0,
        flag: 0
	},
	mounted: function () {
		var self = this;
		self.loading();
	},
	methods: {
		upCallback: function() {
			var self = this;
			self.page ++;
            axios.get('http://proj7.thatsmags.com/Api/Article/getList', {
                params: {
                    cat_id: self.catId,
                    p: self.page,
                    pageSize: self.pageSize
                }
            })
            .then(function(res){
            	console.log(res)
                if (res.data.code==1) {
                    self.tabs = res.data.data.cat;
                    self.banner = res.data.data.banner;
                    self.totalPages = res.data.data.totalPages;
                    if (self.tabContents.length == 0 && self.flag == 0) {
                        self.flag ++;
                        self.tabContents[self.num] = [];
                    }
                    for ( item in res.data.data.articles) {
                        self.tabContents[self.num].push(res.data.data.articles[item]);
                    }
                    self.$nextTick(function(){
                        console.log(1)
                        var imgLoadBox = this.$el.querySelector('.article-list');
                        var imgLoad = imagesLoaded( imgLoadBox, function() {
                            self.newMasonry();
                        });  
                    });
                    self.mescroll.endUpScroll(self.totalPages==self.page);
                } else {

                }
            })
            .catch(function(err){
                self.mescroll.endErr();
            });
		},
        tab(index) {
            var self = this;
            if (index!=self.num) {
                self.mescroll.destroy();
                self.page = 0;
                self.num = index;
                self.catId = index;    
                self.tabContents[self.num]= [];
                self.loading();
            }
        },
        loading: function () {
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
        newMasonry: function () {
            this.grid = this.$el.querySelectorAll('.article-list');
            for (var i = 0; i < this.grid.length; i++) {
                this.msnry = new Masonry( this.grid[i], {
                    "gutter": 14,
                    itemSelector: '.th-product-item'
                });
            }    
        }
	}
});
