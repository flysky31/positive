




$(document).ready(function() {

    $(".tab-link").click(function() {
      var tabId = $(this).attr("data-tab");
  
      $(".tab-link").removeClass("active");
      $(".tab-content").removeClass("active");
  
      $(this).addClass("active");
      $("#" + tabId).addClass("active");
    });


    var swiper = new Swiper(".mainSwiper", {
        slidesPerView:1,
        centeredSlides: true,
        effect:"fade",
        fadeEffect: {
          crossFade: true
        },
        speed:1000,
        autoplay: {
            delay: 5000,
           disableOnInteraction: false,
          },
        pagination: {
          el: ".mainSwiper .swiper-pagination",
          clickable: true,
        },       
        observer: true,
        observeParents: true,       
        // on: {
        //     slideChange: function () {
        //       // 슬라이드 변경 시 active 슬라이드 설정
        //       var activeSlide = this.slides[this.activeIndex];
        //       activeSlide.classList.add('active');
        
        //       // 다른 슬라이드는 active 클래스 제거
        //       var slides = this.slides.filter(slide => slide !== activeSlide);
        //       slides.forEach(slide => slide.classList.remove('active'));
        //     }
        //   }
      });

      var swiper = new Swiper(".tab02_slide", {       
        slidesPerView:1, 
        centeredSlides: true,
        effect:"fade",
        //speed:1000,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        pagination: {
          el: ".tab02_slide .swiper-pagination",
          clickable: true,
        },       
        observer: true,
        observeParents: true,  
      });




      $(".select_box").slideUp();
      //$(".global .select a").slideUp();
     
      $(".all .flex_box .tab_box .m_show a").click(function(){
        $(this).toggleClass("on");
        $(".all .flex_box .tab_box .m_show a i").toggleClass("on");
        if($(".all .flex_box .tab_box .m_show a").hasClass("on") === true){
          $(".select_box").slideDown();
          
        } else {
          $(".select_box").slideUp();
        }
    });


  //     $("#ceo_area .m_show a").click(function(){
  //         $(this).toggleClass("on");
  //         $("#ceo_area .m_show a i").toggleClass("on");
  //         if($("#ceo_area .m_show a").hasClass("on") === true){
  //           $(".select_box").slideDown();
            
  //         } else {
  //           $(".select_box").slideUp();
  //         }
  //     });

  //     $("#company_area .m_show a").click(function(){
  //       $(this).toggleClass("on");
  //       $("#company_area .m_show a i").toggleClass("on");
  //       if($("#company_area .m_show a").hasClass("on") === true){
  //         $(".select_box").slideDown();
          
  //       } else {
  //         $(".select_box").slideUp();
  //       }
  //   });

  //     $("#history_area .m_show a").click(function(){
  //       $(this).toggleClass("on");
  //       $("#history_area .m_show a i").toggleClass("on");
  //       if($("#history_area .m_show a").hasClass("on") === true){
  //         $(".select_box").slideDown();
          
  //       } else {
  //         $(".select_box").slideUp();
  //       }
  //   });


  //   $("#delos_area .m_show a").click(function(){
  //     $(this).toggleClass("on");
  //     $("#delos_area .m_show a i").toggleClass("on");
  //     if($("#delos_area .m_show a").hasClass("on") === true){
  //       $(".select_box").slideDown();
        
  //     } else {
  //       $(".select_box").slideUp();
  //     }
  // });

     $(".global").click(function(){
       $(this).toggleClass("on");
       
       $(".global .select button").toggleClass("on");       
       if ($(this).hasClass("on")) {
         $('#my-menu .fox').off("mouseover");
        
       } else{
         $('#my-menu .fox').mouseover(
           function() {
               $(this).find('.s_first').show();           
         }     
       );
       }
   });      

   var swiacademySwiperper = new Swiper(".academySwiper", {
    slidesPerView: 7,
    spaceBetween: 25,
    loop:true,
    navigation: {
        nextEl: ".academy.swiper-button-next",
        prevEl: ".academy.swiper-button-prev",
      },
      breakpoints:{
        430: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        640: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        //   768: {
        //     slidesPerView: 4,
        //     spaceBetween: 20,
        //   },
          1024: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
    }
  });


  const mySwiper = new Swiper('.thumbSwiper', {
    slidesPerView: 4,
    slidesPerColumn: 2,
    slidesPerGroup :1,
    spaceBetween: 30,

    navigation: {
        nextEl: ".thumb.swiper-button-next",
        prevEl: ".thumb.swiper-button-prev",
      },
      pagination: {
        el: ".thumb.swiper-pagination",
        clickable: true,
      },
      breakpoints:{
        480: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
            1024: {
            slidesPerView: 3,
        },
    }
});


});



  