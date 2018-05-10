
$(function(){
    // 轮播图加载
    const LIWIDTH=1900;
    var $ul=$(".banner_img");
    $ul.css("width",LIWIDTH*6);
    var $ids=$(".indicators");
    $ids.children().first().addClass("hover");
    
  const WAIT=3000,DURA=500;
  var moved=0,timer=null;
  function move(dir=1){
    moved+=dir;
    $ul.animate({
      left:-LIWIDTH*moved
    },DURA,()=>{
      if(moved==5){
        $ul.css("left",0);
        moved=0;
      }
      $ids.children(":eq("+moved+")")
        .addClass("hover")
        .siblings().removeClass("hover")
    })
  }
  var timer=setInterval(move,WAIT);

  $(".banner").hover(
    ()=>{ clearInterval(timer); timer=null; },
    ()=>{ timer=setInterval(move,WAIT); }
  );
  $("[data-move=right]").click(()=>{
    if(!$ul.is(":animated")) 
      move();
  });
  $("[data-move=left]").click(()=>{
    if(!$ul.is(":animated")){
      if(moved==0){
        $ul.css("left",-LIWIDTH*5);
        moved=5;
      }
      move(-1);
    }
  })
  $ids.on("mouseover","li",function(){
    var $li=$(this);
    var i=$li.index();
    moved=i;
    $ul.stop(true).animate({
      left:-LIWIDTH*moved
    },DURA,()=>{
      $ids.children(":eq("+i+")")
        .addClass("hover")
        .siblings().removeClass("hover");
    })
  });

  // 产品体验
  $(".c1_img").hover(function(){ 
              $(this).children("[alt=5]").attr("src","img/img5_hover.jpg");                            
  },function(){ 
              $(this).children("[alt=5]").attr("src","img/img5.jpg");                            
  })
  $(".c1_img").hover(function(){ 
              $(this).children("[alt=6]").attr("src","img/img6_hover.jpg");                            
  },function(){ 
              $(this).children("[alt=6]").attr("src","img/img6.jpg");                            
  })
  $(".c1_img").hover(function(){ 
              $(this).children("[alt=7]").attr("src","img/img7_hover.jpg");                            
  },function(){ 
              $(this).children("[alt=7]").attr("src","img/img7.jpg");                            
  })
  $(".c1_img").hover(function(){ 
              $(this).children("[alt=8]").attr("src","img/img8_hover.jpg");                            
  },function(){ 
              $(this).children("[alt=8]").attr("src","img/img8.jpg");                            
  })

  //加盟合作
  $(".c2_img").hover(function(){ 
              $(this).children("[alt=1]").attr("src","img/icon1_hover.png");              
                $(this).css("border","5px solid #89B126")
  },function(){ 
              $(this).children("[alt=1]").attr("src","img/icon1.png");             
                $(this).css("border","5px solid #fff")
  })
  $(".c2_img").hover(function(){ 
              $(this).children("[alt=2]").attr("src","img/icon2_hover.png");              
                $(this).css("border","5px solid #89B126")
  },function(){ 
              $(this).children("[alt=2]").attr("src","img/icon2.png");             
                $(this).css("border","5px solid #fff")
  })
  $(".c2_img").hover(function(){ 
              $(this).children("[alt=3]").attr("src","img/icon3_hover.png");              
                $(this).css("border","5px solid #89B126")
  },function(){ 
              $(this).children("[alt=3]").attr("src","img/icon3.png");             
                $(this).css("border","5px solid #fff")
  })
  $(".c2_img").hover(function(){ 
              $(this).children("[alt=4]").attr("src","img/icon4_hover.png");              
                $(this).css("border","5px solid #89B126")
  },function(){ 
              $(this).children("[alt=4]").attr("src","img/icon4.png");             
                $(this).css("border","5px solid #fff")
  });

  //万象更新
  $(".c3_jt").hover(function(){
    $(this).css({"background":"url(img/jt2_hover.png) no-repeat"})
    
  },function(){
    $(this).css({"background":"url(img/jt2.png) no-repeat"})
    
  })

  // 背景图区域
    $(".c4_img").hover(function(){
        $(this).children("[alt=5]").attr("src","img/icon5_hover.png");
    },function() {
        $(this).children("[alt=5]").attr("src", "img/icon5.png");
    })
    $(".c4_img").hover(function(){
        $(this).children("[alt=6]").attr("src","img/icon6_hover.png");
    },function() {
        $(this).children("[alt=6]").attr("src", "img/icon6.png");
    })
    $(".c4_img").hover(function(){
        $(this).children("[alt=7]").attr("src","img/icon7_hover.png");
    },function() {
        $(this).children("[alt=7]").attr("src", "img/icon7.png");
    })

    lazy()

  
})