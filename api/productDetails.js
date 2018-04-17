$(function(){

    // 置顶导航栏
    $(window).scroll(function () {
        $('.fixed-nav')[$(document).scrollTop() >= 725 ? 'addClass' : 'removeClass']('fixed-enable');
    });

    //加
    $(".plus").click(function(){
        var n=$(this).prev().val();
        var num=parseInt(n)+1;
        if(num==0){ return;}
        $(this).prev().val(num);
        addColor ();
    });
    //减
    $(".minus").click(function(){
        var n=$(this).next().val();
        var num=parseInt(n)-1;
        if (num == 1) {
           this.style.color = "rgb(195, 178, 178)";
        }
        if(num==0){ return}
        $(this).next().val(num);
    });

    function addColor() {
        $('.jia-jian input').each(function(index, el) {
            if($(this).val()>1) {
                $(this).prev().css({"color":"#222"});
            }
        });
    }

    //尺寸选择
    $('.size-f li').click(function(){
        $(this).addClass("proColor").siblings().removeClass("proColor");
    });

    //颜色选择
    $('.color-f li').click(function(){
        $(this).addClass("proColor").siblings().removeClass("proColor");
    });

    // tab切换
    $(".conPro").eq(0).show();
    $(".btnPro span").click(function(){
        var num =$(".btnPro span").index(this);
        $(".conPro").hide();
        $(".conPro").eq(num).show().slblings().hide();
    })

    $(".btnPro > a").click(function(){
        var num =$(".btnPro > a").index(this);
        $("html,body").animate({scrollTop:675}, 1);
        $(".conPro").hide();
        $(".conPro").eq(num).show().slblings().hide();
    })

});