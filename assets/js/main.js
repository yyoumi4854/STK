$(function(){
  //스크롤시 header bg변경
  $(window).scroll(function(){
    var winScrollT = $(window).scrollTop();

    if (winScrollT >= 150) {
      $("#header").addClass("scroll");
    }else {
      $("#header").removeClass("scroll");
    }
  });

  //section 이징 위치지정
  $("#header .gnb ul li a").click(function(){
    $(this).removeClass("on");
    $(this).addClass("on");
    var index = $(this).parent().index();
    var offsetT = $(".sec").eq(index).offset().top-50;

    $("html,body").animate({scrollTop:offsetT},800);
  });

  $(window).scroll(function(){
    $(".sec").each(function(idx,item){
      var secOffsetTop = $(this).offset().top;
      var winScrollTop = $(window).scrollTop()+100;

      if (winScrollTop >= secOffsetTop){
        $("#header .gnb ul li a").removeClass("on");
        $("#header .gnb ul li a").eq(idx).addClass("on");
      }
    });
  });

  // go_top TOP버튼
  $(".go_top").click(function(){
         $("body,html").animate({scrollTop: 0}, 500);
   });

  //모바일메뉴
  $(".gnb_btn").click(function(e){
    e.preventDefault();
    $(".gnb").slideToggle();
  });

  //화면크기 커질때 메뉴 나오게
  $(window).resize(function(){
    var wid = $(window).width();
    console.log(wid);

    if (wid>991) {
      $(".gnb").show();
    }
  });
});
