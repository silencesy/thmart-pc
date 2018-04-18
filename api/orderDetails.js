new Vue({
    el: '#OlderConfirmation',
    data: {
        addressData: null,
        orderData: null,
        merchant: null,
        couponName: null,
        reduceMoney: null,
        beforetotal: null,
        total: null,
        p: 1,
        pageSize: 1000,
        isShow: false,
        addrId: null,
        active: null,
        autoHeight: false,
        noAddress: false,
        layer: false,
        name: null,
        phone: null,
        EnAddress: null,
        ChAddress: null,
        tel: /^1[34578]\d{9}$/,
        fadeInDown: false
    },
    mounted: function () {
        var self = this;
        self.$nextTick(function(){
            self.getAddressData();
            self.getOlderData();
        });
    },
    methods: {
        getAddressData: function() {
            var self = this;
            axios.get('http://api.mall.thatsmags.com/Api/Address/getList', {
                params: {
                    p: self.page,
                    pageSize: self.pageSize
                },
                headers: {
                    "TOKEN": "bebb51694eeebcdd2559a2f738d648fcMTUyNDU0MDMwNTE1NDE2Mg=="
                }
            })
            .then(function(res){
                // console.log(res);
                if (res.data.code == 1) {
                    self.addressData = res.data.data.list;
                    self.addressData.length>1?self.isShow = true: self.isShow = false;
                    self.addressData.length==0?self.noAddress = true: self.noAddress = false;
                    self.active = self.addressData[0].id;
                    window.localstorage.setItem("token",res.data.data.token);
                } else {

                }
            })
            .catch(function(err){

            });
        },
        getOlderData: function() {
            var self = this;
            var param = new URLSearchParams();
            // console.log(self.getUrlParameter("proarr"));
            // eval("("+data+")")
            param.append("price_array",eval("("+self.getUrlParameter("proarr")+")"));
            // param.append("price_array",eval('(' + self.getUrlParameter("proarr") + ')'));
            param.append("status",self.getUrlParameter("status"));
            axios.post('http://192.168.0.254/mallapi/Api/Order/getOrder',param,{
                "headers": {
                    "TOKEN": "b4e7280abc2414cc8fb57821927e418bMTUyNDU1MDQ3MDE1NDE2"
                }
            })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log("error");
            });



            // self.orderData = getOlderinfo.data.order;
            // self.beforetotal = getOlderinfo.data.order.coupon.total;
            // self.couponName = getOlderinfo.data.order.coupon.reduce.id.coupon_name;
            // self.reduceMoney = getOlderinfo.data.order.coupon.reduce.id.reduce_money;
            // self.total = getOlderinfo.data.order.total;
            // self.merchant = getOlderinfo.data.order.merchant;
        },
        getMore: function () {
            var self = this;
            self.autoHeight = true;
        },
        getAddrId: function(item,index) {
            var self = this;
            self.addrId = item.id;
            self.active = item.id;
            self.addressData.unshift(item);
            self.addressData.splice(index+1,1);
            self.autoHeight = false;
        },
        AddAddress: function () {
            var self =this;
            self.layer = true;
            self.fadeInDown =true;
            self.name = '';
            self.phone = '';
            self.EnAddress = '';
            self.ChAddress = '';
        },
        hideLayer: function () {
            var self = this;
            self.layer = false;
            self.name = '';
            self.phone = '';
            self.EnAddress = '';
            self.ChAddress = '';
        },
        saveAddAddr: function () {
            var self = this;
            if (self.name == '') {
                alert("name");
                return false;
            } else if (self.phone == '' || !self.tel.test(self.phone)) {
                alert("phone");
                return false;
            } else if (self.ChAddress == '') {
                alert("addr");
                return false;
            } else {
                var param = new URLSearchParams();
                param.append("fullname", self.name);
                param.append("phone", self.phone);
                param.append("region", self.ChAddress);
                param.append("region_detail", self.EnAddress);
                param.append("is_default", false);
              
                axios.post('http://api.mall.thatsmags.com/Api/Address/addAddress',param,{
                    "headers": {
                        "TOKEN": localStorage.getItem("token")
                    }
                })
                .then(function (response) {
                    self.layer = false;
                    self.autoHeight = false;
                    console.log(response)
                    if (response.data.code == 1) {
                        self.getAddressData();
                    } else {
                        alert('1');
                    }
                })
                .catch(function (error) {
                    self.layer = false;
                    console.log(error);
                    alert('1')
                });
            }

        }
    }
})
// $(function(){
//             $('.address_ul li input').on('click',function(){
//                 $('.address_ul li input').each(function(index, el) {
//                     $(this).siblings('label').css('color','#666');
//                 });
//                 $(this).css('color','#222');
//             });
//             $('.show-address').on('click', function(event) {
//                 event.preventDefault();
//                 $('.address_ul').css({"height":"auto"});
//                 $(this).hide();
//             });
//             // $('.hide-address').on('click', function(event) {
//             //     event.preventDefault();
//             //     $('.address_ul').css({"height":"58px"});
//             //     $(this).hide().siblings('.show-address').show();
//             // });

//             $('.sub').on('click',function(){
//                 var n = $(this).siblings('input').val() || 2;
//                 var num = parseInt(n)-1;
//                 if (num == 1) {
//                    $(this).css({'color':'#D5D5D5'});
//                 }
//                 if(num==0){
//                     return;
//                 }
//                 $(this).siblings('input').val(num);
//                 singleProductPrice (this);
//             });
//             $('.add').on('click',function(){
//                 $(this).siblings('.sub').css({'color':'#A9A9A9'});
//                 var n = $(this).siblings('input').val() || 1;
//                 var num=parseInt(n)+1;
//                 $(this).siblings('input').val(num);
//                 singleProductPrice (this)
//             });

//             $('.order_shop_ul li .shop_check').on('click',function(){
//                 var that = this;
//                 $(that).parents('.shop_li').children('.order_pro_ul').find('input:checkbox').each(function(index, el) {
//                     $(this).prop("checked",$(that).prop("checked"));
//                 });
//                 allLight();
//             });

//             $('.all-checkbox').on('click',function(){
//                 var that = this;
//                 $('.order_shop_ul').find('input:checkbox').each(function(index, el) {
//                     $(this).prop("checked",$(that).prop("checked"));
//                 });

//             });

//             $('.order_pro_ul input:checkbox').on('click',function(){
//                 if ($(this).parents('.order_pro_ul').
//                     find('input:checkbox:checked').length==$(this).parents('.order_pro_ul').
//                     find('input:checkbox').length) {
//                         $(this).parents('.shop_li').find('.shop_check').prop("checked",true);
//                 } else {
//                         $(this).parents('.shop_li').find('.shop_check').prop("checked",false);
//                 }
//                 allLight();
//             });
            
//             function allLight() {
//                 if ($('.order_shop_ul').find('input:checkbox:checked').length==$('.order_shop_ul').find('input:checkbox').length) {
//                     $('.all-checkbox').prop("checked",true);
//                 } else {
//                     $('.all-checkbox').prop("checked",false);
//                 }
//             }

//             function singleProductPrice (that) {
//                 var number = $(that).siblings('input').val();
//                 var price = $(that).parents('.count').siblings('.order_pro_price').find('span').text();
//                 var tatol = $(that).parents('.count').siblings('.pro_pay_price').find('span');
//                     tatol.text(number*price);
//             }
//         });