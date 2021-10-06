$(document).ready(function(){
  $('.certificate-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1
      }
    }]
  });
});