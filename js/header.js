$(function(){
    // ajax 加载页头

    // $.ajax({
    //     type:"get",
    //     url:"header.html"
    // }).then(html=>{
    //     document.getElementById("header")
    //     .innerHTML=html;
    // })

    //load 加载页头
    $("#header").load("header.html",()=>{

        // $(".pc_nav").on("click","a", e=> {
        //      e.preventDefault()
        //     location.href=$(e.target).attr("href");
        //     $(e.target).addClass("on")
        //         .parent().siblings().children().removeClass("on")
        //
        // })





    });
})