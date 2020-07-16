// $(document).ready(function() {
//   $('.header__burger').click(function() {
//     $('.header__menu').css('width','22%');
//     $('body').toggleClass('lock');
//   })
// });
// $(document).ready(function() {
//   $('#close').click(function() {
//     $('.header__menu').css('width','0');
//     $('body').removeClass('lock');
//   })
// });
// $(document).ready(function() {
//   $('.header__popup-close').click(function() {
//     $('body').removeClass('lock');
//   })
// });
// $(document).bind( 'mousewheel', function (e) { 
//   let nt = $(document.body).scrollTop()-(e.deltaY*e.deltaFactor*100); 
//   e.preventDefault(); 
//   e.stopPropagation(); 
//   $(document.body).stop().animate( { 
//        scrollTop : nt 
//    } , 500 , 'easeInOutCubic' );  
// });

// // $(document).ready(function(){
//     $('.slider').slick({
// 		arrows: true,
// 		infinite: true,
// 		centerMode: true,
// 		centerPadding: '20px',
//         slidesToShow: 1,
//         slidesToScroll: 1,
// 		variableWidth: true,
// 		prevArrow: "<img src='./img/first_screen/arrow-prev.svg' class='prev' alt='arrow prev'>",
// 		nextArrow: "<img src='./img/first_screen/arrow-next.svg' class='next' alt='arrow next'>",
//         responsive: [
// 	    {
// 	      breakpoint: 769,
// 	      settings: {
// 			slidesToShow: 2,
// 			arrow: false
// 	      }
// 	    },
// 	    {
// 	      breakpoint: 480,
// 	      settings: {
// 	        slidesToShow: 1,
// 	      }
// 	    }
//     ]
// 	  });

// 	$(".slider").on('afterChange', function (event, slick, currentSlide) {
// 	$(".slider__number").text(currentSlide<3  ?`0${currentSlide+1}`:currentSlide+1);
// 	})
	
//   });