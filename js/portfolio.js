$(function(){
    // 스크롤 발생 시 네비바
    $(window).scroll(function(){
       var scrollTop=$(this).scrollTop();
       if(scrollTop>100){
           $('header>div').addClass('scroll');
       }else{
           $('header>div').removeClass('scroll');
       }
   })
    // 스크롤 위치에 따라 메뉴 활성화
    $(window).scroll(function(){
       $contents.each(function(){
          if($(this).offset().top <= $(window).scrollTop()){
             var idx = $(this).index();
             $menu.removeClass('active');
             $menu.eq(idx).addClass('active');
          }
       });
    });
 
    // 포트폴리오 슬라이드
    $(".slide_wrap").slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      fade: false,
      arrows: true,
      dots: false,
      swipe: true,
      centerMode: false,
      autoplay:false,
      swipeToSlide:true,
      responsive:[
      {
          breakpoint: 801,
          settings:{
              slidesToShow: 2,
              arrows:true,
          }
      },
      {
         breakpoint: 480,
         settings:{
             slidesToShow: 1,
         }
     }
  ]
  });
 
 
 });