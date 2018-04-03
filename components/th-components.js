// th头部
Vue.component('th-header',{
	template: `
		<div id="th-header">
			<!-- 顶部栏开始 -->
	        <div class="wrapper-top">
	            <div class="container top_bar">
	                <div class="top_bar_content banxin clearfix">
	                    <ul class="user_login fl userName">
	                        <li class="userName-li">UserName<span class="iconfont icon-xiangshangjiantou-copy-copy-copy"></span></li>
	                        <div class="user-menu clearfix">
	                            <div>
	                                <img src="./static/images/user-img.png" alt="">
	                            </div>
	                            <p>
	                                <a href="" class="iconfont icon-bianji"><span>Edit</span></a>
	                                <a href="">Logout</a>
	                            </p>
	                        </div>
	                    </ul>
	                    <ul class="user-info fr">
	                        <li><a href="#">Vendor Background</a></li>
	                        <b>|</b>
	                        <li><a href="#">Open Shop</a></li>
	                        <b>|</b>
	                        <li><a href="#">Buyer Centre</a></li>
	                        <b>|</b>
	                        <li><a href="#">My order</a></li>
	                        <b>|</b>
	                        <li><a href="#"><i class="iconfont icon-cart-on"></i>Cart</a></li>
	                    </ul>
	                </div>
	            </div>
	        </div>
	        <!-- 顶部栏结束 -->
	        <!-- 搜索栏开始 -->
	        <div class="search_bar">
	            <div class="search_bar_content banxin">
	                <div class="logo_box shop_logo_box">
	                    <a href="#">
	                        <img src="./static/images/thatsmart-logo.png" alt="">
	                    </a>
	                </div>
	                <div class="shop_info_box">
	                	<div class="shop_info">
	                		<!-- <span class="line fl"></span> -->
	                		<div class="shop_text fl">
	                			<p>Shops name name name</p>
			                	<p>
			                		<span><i class="iconfont icon-kefu"></i>Live</span>
			                		<span><i class="iconfont icon-shoucang"></i>Favourite</span>
			                	</p>
	                		</div>
	                	</div>
	                </div>
	                <div class="search_group shop_search_group">
	                    <i class="iconfont icon-sousuo"></i>
	                    <input type="text" placeholder="Products / Shops">
	                    <button>Search</button>
	                </div>
	            </div>
	        </div>
	        <!-- 搜索栏结束 -->
		</div>
	`	
	,
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
// th对联
Vue.component('th-couplet',{
	template: `
		<div id="th-couplet">
			<!-- 对联广告开始 -->
            <div class="couplet couplet-left">
                <a href="#">
                    <img src="./static/images/ad1_left.jpg" alt="">
                </a>
                <a class="couplet-close couplet-left-close">X</a>
            </div>
            <div class="couplet couplet-right">
                <a href="#">
                    <img src="./static/images/ad1_right.jpg" alt="">
                </a>
                <a class="couplet-close couplet-right-close">X</a>
            </div>
            <!-- 对联广告结束 -->
		</div>
	`
});