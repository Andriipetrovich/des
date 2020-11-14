$(function(){



//  $('.heroes__slider-img').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   prevArrow: '<button  class="slick-btn slick-prev"><img src="images/arrow-l.png" alt="prev"></button>',
//   nextArrow: '<button  class="slick-btn slick-next"><img src="images/arrow-r.png" alt="next"></button>',
//   asNavFor: '.heroes__slider-text'
// });

// $('.heroes__slider-text').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   asNavFor: '.heroes__slider-img',
//   fade: true,
//   arrows: false
// });



$('.desert__list').slick({
  infinite: true,
  prevArrow: '<button  class="slick-btn slick-prev"><img src="img/arrow-l.png" alt="prev"></button>',
  nextArrow: '<button  class="slick-btn slick-next"><img src="img/arrow-r.png" alt="next"></button>',
  slidesToShow: 2,
  slidesToScroll: 2,
  centerMode: true
  // variableWidth: true
});



// $('.desert__list').slick({
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 2,
//   adaptiveHeight: true
// });





});