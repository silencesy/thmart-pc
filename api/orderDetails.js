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
                    "TOKEN": "46e75b2262b189cdc30963be7c2c33d4"
                }
            })
            .then(function(res){
                console.log(res);
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
            // axios.post('http://api.mall.thatsmags.com/Api/Order/getOrder', {
            //     firstName: 'Fred',
            //     lastName: 'Flintstone',
            //     headers: {
            //         "TOKEN": "05f2cc644c77f30950044ebc179b337c"
            //     }
            // })
            // .then(function (response) {
            //     console.log(response);
            // })
            // .catch(function (error) {
            //     console.log(error);
            // });
            var getOlderinfo = {"code":1,"message":"success","data":{"token":"05f2cc644c77f30950044ebc179b337c","order":{"merchant":[{"list":[{"goods_type_one":"White","goods_type_two":"","type_name_one":"Color","type_name_two":"","goods_price":"30","goods_sale_price":"","is_sale":"0","eticket":"0","goods_picture":"http:\/\/api.mall.thatsmags.com\/Public\/ckfinder\/images\/That's Product \/cup.jpg","goods_name":"That's 20th Anniversary Special Edition Mug","freight":"0","merchant_id":"2","price_id":"89","param":"4a360290-0a5d-11e8-af1c-9f1f9c589c07","id":"8","goods_cnt":"4","type":{"Color":"White"}},{"goods_type_one":"Wine Red","goods_type_two":"","type_name_one":"Color","type_name_two":"","goods_price":"20","goods_sale_price":"","is_sale":"0","eticket":"0","goods_picture":"http:\/\/api.mall.thatsmags.com\/Public\/ckfinder\/images\/That's Product \/pen2.jpg","goods_name":"That's 20th Anniversary Ball Pen","freight":"0","merchant_id":"2","price_id":"90","param":"4a360290-0a5d-11e8-af1c-9f1f9c589c07","id":"9","goods_cnt":"3","type":{"Color":"Wine Red"}},{"goods_type_one":"750ml","goods_type_two":"","type_name_one":"volume","type_name_two":"","goods_price":"85","goods_sale_price":"","is_sale":"0","eticket":"0","goods_picture":"http:\/\/api.mall.thatsmags.com\/Public\/ckfinder\/images\/That's Product \/\u5fae\u4fe1\u56fe\u7247_20180328144324.jpg","goods_name":"Dorrien Estate Grand Station Cabernet Sauvignon","freight":"0","merchant_id":"2","price_id":"124","param":"4a360290-0a5d-11e8-af1c-9f1f9c589c07","id":"27","goods_cnt":"1","type":{"volume":"750ml"}}],"merchant_name":"Urbanatomy","coverpic":"http:\/\/api.mall.thatsmags.com\/Public\/ckfinder\/images\/homepage\/featured.jpg","param":"4a360290-0a5d-11e8-af1c-9f1f9c589c07","freight":"0"},{"list":[{"goods_type_one":"Ultimate Dinosaur Science Kit","goods_type_two":"","type_name_one":"Name","type_name_two":"","goods_price":"168","goods_sale_price":"","is_sale":"0","eticket":"0","goods_picture":"http:\/\/api.mall.thatsmags.com\/Public\/ckfinder\/images\/Dr.Cool\/Cover!!\/ULTDINO1_0.jpg","goods_name":"Ultimate Dinosaur Science Kit","freight":"0","merchant_id":"8","price_id":"111","param":"2ef26170-0596-11e8-aae1-b9ffc905b3d3","id":"18","goods_cnt":"1","type":{"Name":"Ultimate Dinosaur Science Kit"}},{"goods_type_one":"Mine for Gems Science Kit","goods_type_two":"","type_name_one":"Name","type_name_two":"","goods_price":"228","goods_sale_price":"","is_sale":"0","eticket":"0","goods_picture":"http:\/\/api.mall.thatsmags.com\/Public\/ckfinder\/images\/Dr.Cool\/Cover!!\/MINEGEM1_1.jpg","goods_name":"Mine for Gems Science Kit","freight":"0","merchant_id":"8","price_id":"112","param":"2ef26170-0596-11e8-aae1-b9ffc905b3d3","id":"19","goods_cnt":"1","type":{"Name":"Mine for Gems Science Kit"}},{"goods_type_one":"Triceratops Dinosaur Dig Kit","goods_type_two":"","type_name_one":"Name","type_name_two":"","goods_price":"168","goods_sale_price":"","is_sale":"0","eticket":"0","goods_picture":"http:\/\/api.mall.thatsmags.com\/Public\/ckfinder\/images\/Dr.Cool\/Cover!!\/Puzzle-triceratops-box.jpg","goods_name":"Triceratops Dinosaur Dig Kit","freight":"0","merchant_id":"8","price_id":"116","param":"2ef26170-0596-11e8-aae1-b9ffc905b3d3","id":"22","goods_cnt":"3","type":{"Name":"Triceratops Dinosaur Dig Kit"}},{"goods_type_one":"Shark","goods_type_two":"","type_name_one":"type","type_name_two":"","goods_price":"60","goods_sale_price":"","is_sale":"0","eticket":"0","goods_picture":"http:\/\/api.mall.thatsmags.com\/Public\/ckfinder\/images\/Dr.Cool\/mini\/1.jpg","goods_name":"Discover with Dr.Cool Mini Dig Kit","freight":"0","merchant_id":"8","price_id":"134","param":"2ef26170-0596-11e8-aae1-b9ffc905b3d3","id":"31","goods_cnt":"2","type":{"type":"Shark"}}],"merchant_name":"Discover with Dr.Cool","coverpic":"http:\/\/api.mall.thatsmags.com\/Public\/ckfinder\/images\/Dr.Cool\/logo_toy.jpg","param":"2ef26170-0596-11e8-aae1-b9ffc905b3d3","freight":"0"}],"coupon":{"total":1285,"reduce":{"id":{"coupon_name":"coupon","reduce_money":"50"}}},"total":1235,"order_number":null,"payment_time":null,"delivered_time":null,"test":{"reduce":50,"coupon_array":["1"],"coupon_name_reduce":{"id":{"coupon_name":"coupon","reduce_money":"50"}}},"address":{"id":"27","fullname":"rain","phone":"18381302570","region":"\u4e0a\u6d77\u5e02\u6d66\u4e1c\u65b0\u533a\u9ad8\u79d1\u897f\u8def2111\u5f0422\u53f7\u697c502","region_detail":"china"}}}};
            self.orderData = getOlderinfo.data.order;
            self.beforetotal = getOlderinfo.data.order.coupon.total;
            self.couponName = getOlderinfo.data.order.coupon.reduce.id.coupon_name;
            self.reduceMoney = getOlderinfo.data.order.coupon.reduce.id.reduce_money;
            self.total = getOlderinfo.data.order.total;
            self.merchant = getOlderinfo.data.order.merchant;
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
                        "TOKEN": "46e75b2262b189cdc30963be7c2c33d4"
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