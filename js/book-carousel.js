//@codekit-prepend "owl.carousel.js";

  $(document).ready(function() {

  $('.owl-carousel').owlCarousel({
    margin:10,
    nav:true,
    dots: true,
    loop: true,
    responsiveBaseElement: ".book-carousel",
    responsive:{
      0:{
        items:1
      },
      400:{
        items:2
      },
      600:{
        items:3
      },
      800:{
        items:4
      },
      1000:{
        items:5
      },
      1200:{
        items:6
      },
      1400:{
        items:7
      },
      1600:{
        items:8
      }
    }
  });

  $(".owl-nav > *").addClass("btn btn-default btn-xs");

});
