$(document).ready(function() {
    $(window).scroll(function() {

        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            $('#header').addClass('sticky-header');
            $('#positive_wrap').addClass('sticky-header');
        } else {
            $('#header').removeClass('sticky-header');
            $('#positive_wrap').removeClass('sticky-header');
        }
    });


    let burger = $('.menu-trigger');


    burger.each(function(index){
	  var $this = $(this);
	
    $this.on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('active-' + (index+1));
          $("#aside").toggleClass("on");
          $("#pc_aside").toggleClass("on");
          $("#hd_box").toggleClass("on");
          $("body").toggleClass("on");
          $("#my-menu").toggleClass("on");
          
        });
  
    });
    if ($("body").hasClass("on")) {
        
    }
    $("#hd_box").click(function (event) {
        event.stopPropagation();
        $(this).removeClass("on");
        $("#aside").removeClass("on");
        $("body").removeClass("on");
        $(".menu-trigger").removeClass("active-1");
      $("#my-menu").removeClass("on");
    });

    $('.s_first').hide();
   

    $('#my-menu .fox').mouseover(
        function() {
          let tab =  $(this).find('a.first').data("tab");   
          
          $('.s_first').removeClass('active');        
          //$(this).find("a.first .left .box a.first[data-tab='"+tab+"']").removeClass("active");
            $(this).find('.s_first').show();  
      
            //$(this).find('a.first').addClass("active"); 
            //$(this).find("a.first .left .box a.first[data-tab='"+tab+"']").addClass("active");
            //$(this).find('a.first').addClass("active");   
            
      }     
    );

    $('#my-menu .fox').hover(
        function() {
            // 마우스 오버한 경우
            $(this).addClass("on");
        },
        function() {
            // 마우스 벗어난 경우
            $(this).removeClass("on");
        }
    );
   
    $('#my-menu .fox').mouseout(
      function() {  
        $('.box a').removeClass('active');  
        //console.log($(this).find('.left .box a'));
       // $('.left .box a').removeClass("active");
        let tab =  $(this).find('a.first').data("tab");   
       // $(this).find("a.first .left .box a.first[data-tab='"+tab+"']").removeClass("active");
          $('.s_first').hide();
          // $('.right').hide();    
          // firstLink.addClass("active");       
          // firstLink2.addClass("active");       
          // firstLink3.addClass("active");       
      }   
  );
  });
  
  




  $(document).ready(function () {
    $('#aside #m_menu').tendina({
        animate: true, 
        
   });

   AOS.init({
    easing: 'linear',
    once: true,
  });
});



