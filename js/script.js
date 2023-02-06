$(document).ready(function(){
  
    $(".owl_content").owlCarousel({
      
      addClassActive: true, //important
        items : 5,        
            nav: true,
              loop: true,
        autoPlay:2500,
       slideSpeed : 2000,
      goToFirst:true,
        touchDrag: true,
        mouseDrag: true,
      afterAction: function add_mid_class(el){
        $('.owl-item')                     
          .removeClass('middle')
          .removeClass('middle_besideleft')
          .removeClass('middle_besideright')
          .removeClass('next_to_mid')
          .removeClass('prev_to_mid');
        var middle_item = Math.floor($('.active').length / 2);
        middle_item --;
        $('.active').eq(middle_item - 1).addClass('middle_besideleft');
        $('.active').eq(middle_item).addClass('middle');
        $('.active').eq(middle_item + 1).addClass('middle_besideright');
        $('.active').eq(middle_item + 1).nextAll().addClass('next_to_mid');
        $('.active').eq(middle_item - 1).prevAll().addClass('prev_to_mid');
      }
    });
  
    var owl = $(".owl_content").data('owlCarousel');
    $('.owl_wrapper .next').click(function(){owl.next();});
    $('.owl_wrapper .prev').click(function(){owl.prev();});
    });
   

  // Hover Effect For The Images In Exp-Tech Section

  $(document).ready(function(){
    $('.img-hvr-1').hover(function(){
    $(this).attr('src','./images/rest_images/after_1.webp');
    },function(){
    $(this).attr('src','./images/rest_images/before_1.webp');
    });
    });

    $(document).ready(function(){
      $('.img-hvr-2').hover(function(){
      $(this).attr('src','./images/rest_images/after_2.webp');
      },function(){
      $(this).attr('src','./images/rest_images/before_2.webp');
      });
      });

    