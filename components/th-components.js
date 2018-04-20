Vue.component('top',{
	template:  '<!-- 顶部栏开始 -->'
		    +    '<div class="wrapper-top">'
		    +        '<div class="container top_bar">'
		    +            '<div class="top_bar_content banxin clearfix">'
		    +                '<ul class="user_login fl userName">'
		    +                    '<li class="userName-li">UserName<span class="iconfont icon-xiangshangjiantou-copy-copy-copy"></span></li>'
		    +                    '<div class="user-menu clearfix">'
		    +                        '<div>'
		    +                            '<img src="./static/images/user-img.png" alt="">'
		    +                        '</div>'
		    +                        '<p>'
		    +                            '<a href="" class="iconfont icon-bianji"><span>Edit</span></a>'
		    +                            '<a href="">Logout</a>'
		    +                        '</p>'
		    +                    '</div>'
		    +                '</ul>'
		    +                '<ul class="user-info fr">'
		    +                    '<li><a href="#">Vendor Background</a></li>'
		    +                    '<b>|</b>'
		    +                    '<li><a href="#">Open Shop</a></li>'
		    +                    '<b>|</b>'
		    +                    '<li><a href="#">Buyer Centre</a></li>'
		    +                    '<b>|</b>'
		    +                    '<li><a href="#">My order</a></li>'
		    +                    '<b>|</b>'
		    +                    '<li><a href="#"><i class="iconfont icon-cart-on"></i>Cart</a></li>'
		    +                '</ul>'
		    +            '</div>'
		    +        '</div>'
		    +    '</div>'
		    +    '<!-- 顶部栏结束 -->'
});
Vue.component('head-nav-one',{
	template:  '<!-- 搜索栏开始 -->'
	    +    '<div class="search_bar">'
	    +        '<div class="search_bar_content banxin">'
	    +            '<div class="logo_box shop_logo_box">'
	    +                '<a href="./index.html">'
	    +                    '<img src="./static/images/thatsmart-logo.png" alt="">'
	    +                '</a>'
	    +            '</div>'
	    +            '<div class="shop_info_box">'
	    +            	'<div class="shop_info">'
	    +            		'<!-- <span class="line fl"></span> -->'
	    +            		'<div class="shop_text fl">'
	    +            			'<p>Shops name name name</p>'
		+	                	'<p>'
		+	                		'<span><i class="iconfont icon-kefu"></i>Live</span>'
		+	                		'<span><i class="iconfont icon-shoucang"></i>Favourite</span>'
		+	                	'</p>'
	    +            		'</div>'
	    +            	'</div>'
	    +            '</div>'
	    +            '<div class="search_group shop_search_group">'
	    +                '<i class="iconfont icon-sousuo"></i>'
	    +                '<input type="text" placeholder="Products / Shops">'
	    +                '<button>Search</button>'
	    +            '</div>'
	    +        '</div>'
	    +    '</div>'
	    +    '<!-- 搜索栏结束 -->'
});
Vue.component('head-nav-two',{
	template: '<div class="topline container clearfix">'
            +    '<p>'
            +        '<a href="./index.html">'
            +            '<img src="static/images/thmart.png" alt="">'
            +        '</a>'
            +    '</p>'
            +    '<!-- 搜索框开始 -->'
            +    '<form id="search-form">'
            +        '<div class="search-group">'
            +            '<div class="dropdown">'
            +                '<button id="dLabel" type="button" class="dropdown-toggle" @click="dropDownShow" aria-haspopup="true" aria-expanded="false">'
            +                    '<span v-text="defaultClass"></span>'
            +                    '<i class="iconfont icon-xiangshangjiantou-copy-copy-copy"></i>'
            +                '</button>'
               
            +                '<ul id="search-module-list" class="dropdown-menu" role="menu" aria-labelledby="dLabel" v-if="dropDown">'
            +                    '<li v-for="item in dropDownList" @click="checkdropDownList(item)"><a>{{item.name}}</a></li>'
            // +                    '<li><a>Products</a></li>'
            // +                    '<li><a>Shops</a></li>'
            // +                    '<li><a>Ticketing</a></li>'
            // +                    '<li><a>Coupons</a></li>'
            +                '</ul>'
            +            '</div>'
            +            '<div class="search-pad">'
            +                '<input name="keywords" class="search" v-model="keyWords" type="search" value="">'
            +                '<button type="button" class="top-search" @click="searchBtn">'
            +                    '<span >Search</span>'
            +                '</button>'
            +            '</div>'
            +        '</div>'
            +    '</form>'
            +    '<!-- 搜索框结束 -->'
            +    '<div class="top-ad">'
            +        '<a href="#"><img src="static/images/ad_top.jpg" alt=""></a>'
            +    '</div>'
            +'</div>',
            data(){
		        return {
		            keyWords: "",
		            defaultClass: "All",
		            dropDownList: [{
		            	name: 'All',
		            	id: 0
		            },{
		            	name: 'Shops',
		            	id: "shop"
		            },{
		            	name: 'Deals',
		            	id: 1
		            },{
		            	name: 'Ticketing',
		            	id: 3
		            },{
		            	name: 'Coupons',
		            	id: 4
		            }],
		            dropDown: false
		        }
		    },
		    methods: {
		    	dropDownShow: function () {
		    		var self = this;
		    		self.dropDown = !self.dropDown;
		    	},
		    	checkdropDownList: function (data) {
		    		var self = this;
		    		self.dropDown = !self.dropDown;
		    		self.defaultClass = data.name;
		    	},
		    	searchBtn: function () {
		    		var self = this;
		    		if (!self.keyWords) {
		    			alert("请输入关键词");
		    		} else {

		    		}
		    	}
		    }
});
Vue.component('head-nav-three',{
	template: '<!-- 搜索栏开始 -->'
		    +    '<div class="search_bar">'
		    +        '<div class="search_bar_content banxin clearfix">'
		    +            '<div class="logo_box shop_logo_box">'
		    +                '<a href="./index.html">'
		    +                    '<img src="./static/images/thatsmart-logo.png" alt="">'
		    +                '</a>'
		    +            '</div>'
		    +            '<div class="shop_info_box">'
		    +            	'<div class="shop_info">'
		    +            		'<span class="line fl"></span>'
		    +            		'<div class="shop_text fl">'
		    +            			'<p>Shops name name name</p>'
			+	                	'<p>'
			+	                		'<span><i class="iconfont icon-kefu"></i>Live</span>'
			+	                		'<span><i class="iconfont icon-shoucang"></i>Favourite</span>'
			+	                	'</p>'
		    +            		'</div>'
		    +            	'</div>'
		    +            '</div>'
		    +            '<div class="search_group shop_search_group">'
		    +                '<i class="iconfont icon-sousuo"></i>'
		    +                '<input type="text" placeholder="Products / Shops">'
		    +                '<button>thMart</button>'
		    +            '</div>'
		    +            '<div class="shop-btn">'
		    +                '<button>shop</button>'
		    +            '</div>'
		    +        '</div>'
		    +    '</div>'
		    +    '<!-- 搜索栏结束 -->',
})

// th头部
Vue.component('th-header',{
	template: 
		'<div id="th-header">'
		+	'<!-- 顶部栏开始 -->'
	    +    '<div class="wrapper-top">'
	    +        '<div class="container top_bar">'
	    +            '<div class="top_bar_content banxin clearfix">'
	    +                '<ul class="user_login fl userName">'
	    +                    '<li class="userName-li">UserName<span class="iconfont icon-xiangshangjiantou-copy-copy-copy"></span></li>'
	    +                    '<div class="user-menu clearfix">'
	    +                        '<div>'
	    +                            '<img src="./static/images/user-img.png" alt="">'
	    +                        '</div>'
	    +                        '<p>'
	    +                            '<a href="" class="iconfont icon-bianji"><span>Edit</span></a>'
	    +                            '<a href="">Logout</a>'
	    +                        '</p>'
	    +                    '</div>'
	    +                '</ul>'
	    +                '<ul class="user-info fr">'
	    +                    '<li><a href="#">Vendor Background</a></li>'
	    +                    '<b>|</b>'
	    +                    '<li><a href="#">Open Shop</a></li>'
	    +                    '<b>|</b>'
	    +                    '<li><a href="#">Buyer Centre</a></li>'
	    +                    '<b>|</b>'
	    +                    '<li><a href="#">My order</a></li>'
	    +                    '<b>|</b>'
	    +                    '<li><a href="#"><i class="iconfont icon-cart-on"></i>Cart</a></li>'
	    +                '</ul>'
	    +            '</div>'
	    +        '</div>'
	    +    '</div>'
	    +    '<!-- 顶部栏结束 -->'
	    +    '<!-- 搜索栏开始 -->'
	    +    '<div class="search_bar">'
	    +        '<div class="search_bar_content banxin">'
	    +            '<div class="logo_box shop_logo_box">'
	    +                '<a href="#">'
	    +                    '<img src="./static/images/thatsmart-logo.png" alt="">'
	    +                '</a>'
	    +            '</div>'
	    +            '<div class="shop_info_box">'
	    +            	'<div class="shop_info">'
	    +            		'<!-- <span class="line fl"></span> -->'
	    +            		'<div class="shop_text fl">'
	    +            			'<p>Shops name name name</p>'
		+	                	'<p>'
		+	                		'<span><i class="iconfont icon-kefu"></i>Live</span>'
		+	                		'<span><i class="iconfont icon-shoucang"></i>Favourite</span>'
		+	                	'</p>'
	    +            		'</div>'
	    +            	'</div>'
	    +            '</div>'
	    +            '<div class="search_group shop_search_group">'
	    +                '<i class="iconfont icon-sousuo"></i>'
	    +                '<input type="text" placeholder="Products / Shops">'
	    +                '<button>Search</button>'
	    +            '</div>'
	    +        '</div>'
	    +    '</div>'
	    +    '<!-- 搜索栏结束 -->'
		+'</div>'
});
// th底部
Vue.component('th-footer',{
	template: 
        '<!-- 底部栏开始 -->'
        +'<div class="wrapper-bottom" id="th-footer">'
        +    '<div class="container">'
        +        '<div class="container-bottom">'
        +            '<a href="javascript:;" class="iconfont icon-thmart"></a>'
        +            '<span class="copyright">© 2017 SH Aoyang Advertising Co., Ltd. 沪ICP备12038926号-2</span>'
        +        '</div>'
        +    '</div>'
        +'</div>'
        +'<!-- 底部栏结束 -->'
	
});
// th导航
Vue.component('th-banner',{
	template:  '<div class="navigation_bar navigation_bar2">'
	        +    '<div class="navigation_bar_content banxin">'
	        +       ' <ul class="navigation_ul">'
	        +            '<li @mouseover="navigationShow(true)" @mouseleave="navigationHide">'
	        +                '<a href="#"><i class="iconfont icon-fenlei"></i>All Categories</a>'
	        +                '<div class="all-navigation-box" v-show="allNavigationShow">'
	        +                    '<div class="all-navigation">'
	        +                       '<div class="all-navigation-sub" :style="{height: height,lineHeight: height}" v-for="item in allNavigationData">'
			+`<a class="navigationchild" :style="{height: height,lineHeight: height}" :href="['./especially-product-list.html?id='+ item.id]" v-if="item.id == 1 || item.id == 2">`
			+    '{{item.name}}'
			+'</a>'
			+`<a class="navigationchild" :style="{height: height,lineHeight: height}" :href="['./product_list.html?id='+ item.id]" v-else>`
			+    '{{item.name}}'
			+'</a>'							
           
	        +                        '</div>'
	        +                    '</div>'
	        +                '</div>'
	        +            '</li>'
	        +            '<li>'
	        +                '<a href="#">Home</a>'
	        +            '</li>'
	        +            '<li>'
	        +                '<a href="especially-product-list.html?id=deal">Deals</a>'
	        +            '</li>'
	        +            '<li>'
	        +                '<a href="especially-product-list.html?id=1">Ticketing</a>'
	        +            '</li>'
	        +            '<li>'
	        +                '<a href="especially-product-list.html?id=2">Coupons</a>'
	        +            '</li>'
	        +            '<li>'
	        +                '<a href="article-list.html">Article</a>'
	        +            '</li>'
	        +            '<li>'
	        +                '<a href="#">Shops</a>'
	        +            '</li>'
	        +        '</ul>'
	        +    '</div>'
	        +'</div>',
	data(){
        return {
            allNavigationData: null,
            allNavigationShow: false,
            height: null
        }
    },
    methods:{
        navigationShow: function(data) {
    		var self = this;
    		if(!self.allNavigationData) { 
                self.http.ajax({
                    type: 'get',
                    url: 'http://proj7.thatsmags.com/Api/Archive/getGoodsCats',
                    data: { 
                        set_position: self.set_position,
                        p: self.page,
                        pageSize: self.pageSize
                    },
                    success: function(response){
                    	console.log(response);
                        if (response.code == 1) {
                            self.allNavigationData = response.data;
                            self.height = 318/Math.ceil(self.allNavigationData.length/4) + "px";
                            self.allNavigationShow = data;
                        }
                    },
                    error: function(xhr, type){
                       
                    }
                });
    		} else {
    			self.allNavigationShow = data;
    		}
    		
    	},
    	navigationHide: function() {
    		this.allNavigationShow = false;
    	}
    },
	ready() {
		var self = this;
        document.addEventListener('click', (e) => {
           if (!this.$el.contains(e.target)) self.allNavigationShow = false
        })
    }
})
// th对联
Vue.component('th-couplet',{
	template: 
		'<div id="th-couplet">'
		+	'<!-- 对联广告开始 -->'
        +    '<div class="couplet couplet-left">'
        +        '<a href="#">'
        +            '<img src="./static/images/ad1_left.jpg" alt="">'
        +        '</a>'
        +        '<a class="couplet-close couplet-left-close">X</a>'
        +    '</div>'
        +    '<div class="couplet couplet-right">'
        +        '<a href="#">'
        +            '<img src="./static/images/ad1_right.jpg" alt="">'
        +        '</a>'
        +        '<a class="couplet-close couplet-right-close">X</a>'
        +    '</div>'
        +    '<!-- 对联广告结束 -->'
		+'</div>'
});
Vue.component('th-ad',{
	template: 
		'<div class="ad ad-banner-top">'
        +    '<img src="./static/images/ad_1000.jpg" alt="">'
        +'</div>'
	
});
