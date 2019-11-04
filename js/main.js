$(function(){
   $('#about .left').css({ "opacity" : 1 },3000);
   $('#about .left').css({ "left" : 0 },3000);

   // 스크롤 발생 시 네비바
   $(window).scroll(function(){
      var scrollTop=$(this).scrollTop();
      if(scrollTop>100){
          $('header>div').addClass('scroll');
      }else{
          $('header>div').removeClass('scroll');
      }
  })
   // 메뉴 클릭 시 자연스러운 이동
   var $menu = $('nav ul li');
   var $contents = $('.content');

   $menu.click(function(x){
      x.preventDefault();
      var idx = $(this).index();
      var section = $contents.eq(idx);
      var sectionDistance = section.offset().top;
      $('html, body').stop().animate({scrollTop:sectionDistance});
   });
 
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


   // 슬라이드
   var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop:true,
      autoplay: {
         delay: 2500,
         disableOnInteraction: true,
      },
    });

    $('.swiper-container').on({
      mouseenter:function(){
          swiper.autoplay.stop();
      },
      mouseleave:function(){
          swiper.autoplay.start();
      }
   })

});