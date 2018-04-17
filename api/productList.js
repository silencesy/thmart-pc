new Vue({
	el: '#productList',
	data: {
		mescroll: null,
		page: 0,
		pageSize: 16,
		listData: [],
		totalPages: 0,
		catId: null,
		align: 'center',
        msnry: null,
        grid: null,
        flag: 0,
        isActive: false,
        proName: null,
        titleList: [{
            name: "All",
            sort: null
        },{
            name: "Sales",
            sort: 3
        },{
            name: "Sales",
            sort: 2
        }],
        sort: null
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
        self.newMasonry();
    },
	methods: {
		upCallback: function() {
			var self = this;
            self.catId = self.getUrlParameter("id");
			self.page ++;
            axios.get('http://proj7.thatsmags.com/Api/Archive/getList', {
                params: {
                    cat_id: self.catId,
                    p: self.page,
                    pageSize: self.pageSize,
                    sort: self.sort
                }
            })
            .then(function(res){
                console.log(res.data);
                if (res.data.code==1) {
                    self.flag++;
                    var i;
                    for (i in res.data.data.goods) { 
                        self.listData.push(res.data.data.goods[i]);
                    }
                    self.proName = res.data.data.cat_name;
                    // console.log(self.msnry.masonry());
                    self.mescroll.endUpScroll(self.page == res.data.data.totalPages);
                    // self.minirefresh.endUpLoading(self.page == res.data.data.totalPages);
                    self.$nextTick(function(){
                        var imgLoadBox = this.$el.querySelector('.th-product-box');
                        var imgLoad = imagesLoaded( imgLoadBox, function() {
                            self.newMasonry();
                            self.isActive = true;
                        });
                        console.log(imgLoad);
                        
                    });

                } else {

                }
            })
            .catch(function(err){
                self.mescroll.endUpScroll(true);
            });
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