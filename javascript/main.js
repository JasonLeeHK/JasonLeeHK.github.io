
$(document).ready(function(){
  $('.autoplay').slick({
  	slidesToShow: 3,
  	slidesToScroll: 1,
  	autoplay: true,
  	autoplaySpeed: 800, 
	});

  
$('.fade').slick({
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 1000,
  fade: true,
  cssEase: 'linear'
});

		
});
