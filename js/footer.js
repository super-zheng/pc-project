$(function(){
    // ajax 加载页头

    // $.ajax({
    //     type:"get",
    //     url:"footer.html"
    // }).then(html=>{
    //     document.getElementById("footer")
    //     .innerHTML=html;
    // })

    //load 加载页头
    $("#footer").load("footer.html",()=>{

    });
})