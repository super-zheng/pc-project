/**
 * Created by web-01 on 2018/1/22.
 */
$(function () {
    $(".advantage_c1_slide:has([data-toggle=collapse])")
        .on("click","[data-toggle=collapse]",e=> {
            var $title = $(e.target);
            //如果$title旁边的div是张开的
            if ($title.next().is(".in"))
            //就将$title旁边的div上滑
            $title.next().removeClass("in");

            else{//否则
                //将$title旁边的div下滑
                $title.next().addClass("in")
                //再将$title旁边的div的兄弟中的其它.content上滑
                    .siblings(".content").removeClass("in")
            }
        })

    $(".category_nav_icon8").hover(function () {
        $(this).css({"backgroundImage":"url(img/nav_icon8_hover.png)",
                       "backgroundColor":"#fff"})
    },function () {
        $(this).css({"backgroundImage":"url(img/nav_icon8.png)",
            "backgroundColor":"#282827"})
    })

    $(".category_nav_icon9").hover(function () {
        $(this).css({"backgroundImage":"url(img/nav_icon9_hover.png)",
            "backgroundColor":"#fff"})
    },function () {
        $(this).css({"backgroundImage":"url(img/nav_icon9.png)",
            "backgroundColor":"#282827"})
    })

    $(".category_nav_icon10").hover(function () {
        $(this).css({"backgroundImage":"url(img/nav_icon10_hover.png)",
            "backgroundColor":"#fff"})
    },function () {
        $(this).css({"backgroundImage":"url(img/nav_icon10.png)",
            "backgroundColor":"#282827"})
    })


})
