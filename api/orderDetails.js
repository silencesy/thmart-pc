$(function(){
            $('.address_ul li input').on('click',function(){
                $('.address_ul li input').each(function(index, el) {
                    $(this).siblings('label').css('color','#666');
                });
                $(this).css('color','#222');
            });
            $('.show-address').on('click', function(event) {
                event.preventDefault();
                $('.address_ul').css({"height":"auto"});
                $(this).hide();
            });
            // $('.hide-address').on('click', function(event) {
            //     event.preventDefault();
            //     $('.address_ul').css({"height":"58px"});
            //     $(this).hide().siblings('.show-address').show();
            // });

            $('.sub').on('click',function(){
                var n = $(this).siblings('input').val() || 2;
                var num = parseInt(n)-1;
                if (num == 1) {
                   $(this).css({'color':'#D5D5D5'});
                }
                if(num==0){
                    return;
                }
                $(this).siblings('input').val(num);
                singleProductPrice (this);
            });
            $('.add').on('click',function(){
                $(this).siblings('.sub').css({'color':'#A9A9A9'});
                var n = $(this).siblings('input').val() || 1;
                var num=parseInt(n)+1;
                $(this).siblings('input').val(num);
                singleProductPrice (this)
            });

            $('.order_shop_ul li .shop_check').on('click',function(){
                var that = this;
                $(that).parents('.shop_li').children('.order_pro_ul').find('input:checkbox').each(function(index, el) {
                    $(this).prop("checked",$(that).prop("checked"));
                });
                allLight();
            });

            $('.all-checkbox').on('click',function(){
                var that = this;
                $('.order_shop_ul').find('input:checkbox').each(function(index, el) {
                    $(this).prop("checked",$(that).prop("checked"));
                });

            });

            $('.order_pro_ul input:checkbox').on('click',function(){
                if ($(this).parents('.order_pro_ul').
                    find('input:checkbox:checked').length==$(this).parents('.order_pro_ul').
                    find('input:checkbox').length) {
                        $(this).parents('.shop_li').find('.shop_check').prop("checked",true);
                } else {
                        $(this).parents('.shop_li').find('.shop_check').prop("checked",false);
                }
                allLight();
            });
            
            function allLight() {
                if ($('.order_shop_ul').find('input:checkbox:checked').length==$('.order_shop_ul').find('input:checkbox').length) {
                    $('.all-checkbox').prop("checked",true);
                } else {
                    $('.all-checkbox').prop("checked",false);
                }
            }

            function singleProductPrice (that) {
                var number = $(that).siblings('input').val();
                var price = $(that).parents('.count').siblings('.order_pro_price').find('span').text();
                var tatol = $(that).parents('.count').siblings('.pro_pay_price').find('span');
                    tatol.text(number*price);
            }
        });