new Vue({
    el: '#productDetails',
    data: {
        number: 1,
        productData: null,
        id: null,
        countColor: true,
        activeOne: false,
        active: 0,
        active2: 0,
        key1: null,
        key2: null,
        price_id: null
    },
    mounted: function () {
        var self = this;
        self.$nextTick(function() {
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
        });

    },
    methods: {
        upCallback: function () {
            var self = this;
            self.id = self.getUrlParameter('id');
            axios.get('http://proj7.thatsmags.com/Api/Archive/getDetail', {
                params: {
                    id: self.id
                }
            })
            .then(function (response) {
                if (response.data.code == 1) {
                    self.productData = response.data.data;
                    self.price_id = response.data.data.price.price_id;
                    self.key1 = response.data.data.price.goods_type_one;
                    self.key2 = response.data.data.price.goods_type_two;
                    self.mescroll.endUpScroll(true)
                } else {
                    console.log(error);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        clickActiveOne: function (index,item) {
            var self = this;
            if (self.active != index) {
                self.active = index;
                self.key1 = item;
                axios.get('http://proj7.thatsmags.com/Api/Archive/getOnePrice', {
                    params: {
                        id: self.id,
                        goods_type_one: self.key1,
                        goods_type_two: self.key2
                    }
                })
                .then(function (response) {
                    if (response.data.code == 1) {
                        console.log(response.data.data.price_id);
                        self.price_id = response.data.data.price_id;
                    } else {
                        console.log(error);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
            

        },
        clickActiveTwo: function (index,item) {
            var self = this;
            if (self.active2 != index) {
                self.active2 = index;
                self.key2 = item;
                axios.get('http://proj7.thatsmags.com/Api/Archive/getOnePrice', {
                    params: {
                        id: self.id,
                        goods_type_one: self.key1,
                        goods_type_two: self.key2
                    }
                })
                .then(function (response) {
                    if (response.data.code == 1) {
                        console.log(response.data.data.price_id);
                        self.price_id = response.data.data.price_id;
                    } else {
                        console.log(error);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        },
        add: function() {
            var self = this;
            self.number++;
            self.countColor = false;
        },
        minus: function() {
            var self = this;
            if (self.number>1) {
                --self.number;
            }
            if (self.number==1){
                self.countColor = true;
            }
        },
        mouseOverColor: function () {
            console.log(1);
        },
        buyBtn: function() {
            
            var self = this;

            var param = new URLSearchParams();
            param.append("price_id", self.price_id);
            axios.post('http://proj7.thatsmags.com/Api/Cart/judgeOrderFromGoods',param,{
                "headers": {
                    "TOKEN": localStorage.getItem("token")
                }
            })
            .then(function (response) {
                if (response.data.code == 1) {
                    if (response.data.data.status == 1) {
                        window.location.href= "./order-details.html?proarr={"+ self.price_id +":" + self.number + "}" + "&status=" + response.data.data.status;
                    } else if (response.data.data.status == 2) {
                        window.location.href= "./order-details.html?proarr={"+ self.price_id +":" + self.number + "}" + "&status=" + response.data.data.status;
                    }
                } else {
                    console.log("error");
                }
            })
            .catch(function (error) {
                console.log("error");
            });
        }
    }
})
