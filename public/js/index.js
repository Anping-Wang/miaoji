$(function () {

    //透明度变化动画，这里不能用mouseover()和mouseout()事件，因为这两个具有冒泡性质，在进入子元素时也会触发，最终导致多次触发。
    $('#plan-list li').mouseenter( function(){
        $(this).find('p,span').addClass('current');
        $('#plan-list li').not(this).find('p,span').removeClass('current')
    }).mouseleave( function(){
        $(this).find('p,span').removeClass('current');
        // $(this).find('span').css('font-weight','normal')
    });

    //利用data-*自定义属性，实现元素关联
    $('.media-list img').mouseenter( function(){
        $(this).addClass('current');
        $('.media-list img').not(this).removeClass('current');
        var num = $(this).attr('data-num');
        $('.media-summary a:eq('+num+')').addClass('current').siblings().removeClass('current');
    });
    //回到顶部
    $('#to-top,.to-top').click( function(){
        $("html,body").animate({scrollTop:0},"slow")
    });
    //回到顶部按钮样式
    $('.to-top').mouseenter( function(){
        $(this).attr("src","../public/images/totop.png");
    }).mouseleave( function(){
        $(this).attr('src','../public/images/totop-grey.png');
    });

    //微信按钮样式
    $('.weixinpic').mouseenter( function(){
        $('.qr-code').stop().fadeIn()
    }).mouseleave( function(){
        $('.qr-code').stop().fadeOut();
    });

    //窗口滚动时，导航条吸顶   窗口滚动事件（scroll()）适用于任何可以滚动的元素以及window对象（浏览器窗口）
    $(window).scroll( function(){
        var scrollTop = $(window).scrollTop();
        // if(scrollTop >= 851){
        //     // alert('asd')
        //     $('.header nav').css({'position':'fixed','background-color':'rgba(2, 22, 61, 0.78)','z-index':'20'});
        // }else{
        //     $('.header nav').css({'position':'absolute','background-color':'transparent'});
        // }
        //落空类的方式实现样式和动画的添加
        if(scrollTop >= 851){
            $('.header nav').addClass('fixed');
        }else{
            $('.header nav').removeClass('fixed');
        }
    })
});