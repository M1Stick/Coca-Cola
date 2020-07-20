// $(document).ready(function() {
// 	$('#fullpage').fullpage({
//         autoScrolling: true,
//         anchors: ['section1', 'section2', 'section3', 'section4'],
//         scrollingSpeed: 500
// 	});
// });
$(document).ready(function() {
    $('.header__burger').click(function() {
        $('body').toggleClass('lock'),
        $('.header__burger').toggleClass('active'),
        $('.header__burger-list').toggleClass('active'),
        $('.header__burger-list').css({'clip-path':'circle(200rem at 160% -101%)','visibility':'inherit'})
    })
  });

$(document).ready(function() {
    $('.header__burger.active').click(function() {
        $('.header__burger-list .active').css({'clip-path':'circle(0rem at 160% -101%)','visibility':'hidden'}),
        $('body').removeClass('lock')
    })
});

$(document).ready(function(){
    $("#menu").on("click",'a',function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'), 
            top = $(id).offset().top
        $('body,html').animate({scrollTop: top}, 1000)
    });
});

$(document).ready(function() {
    const sockHead = 'Best sock ever'
    const sockText = 'Regular sock have no<br>present inside<br>Lorem Ipsum is simply<br>dumm y text of the<br>printing and types etting<br>industry. Lorem '
    const sockImg = '<img class="description__item-img" src="./img/new-year-sock 2.png" alt="description item sock">'
    $('.description__content-images-sock',).on('click', function() {
        $('.description__item-head').html(sockHead),
        $('.description__item-text').html(sockText)
    });
});

$(document).ready(function() {
    const capHead = 'Best cap ever'
    const capText = 'Regular cap have no<br>present inside<br>Lorem Ipsum is simply<br>dumm y text of the<br>printing and types etting<br>industry. Lorem '
    const capImg = '<img class="description__item-img" src="./img/caps.png" alt="description item cap">'
    $('.description__content-images-cap',).on('click', function() {
        $('.description__item-head').html(capHead),
        $('.description__item-text').html(capText)
    });
});
$(document).ready(function() {
    const bagHead = 'Best bag ever'
    const bagText = 'Regular bag have no<br>present inside<br>Lorem Ipsum is simply<br>dumm y text of the<br>printing and types etting<br>industry. Lorem '
    const bagImg = '<img class="description__item-img" src="./img/new-year-bag.png" alt="description item bag">'
    $('.description__content-images-bag',).on('click', function() {
        $('.description__item-head').html(bagHead),
        $('.description__item-text').html(bagText)
});
});

$(document).bind( 'mousewheel', function (e) { 
    let nt = $(document.body).scrollTop()-(e.deltaY*e.deltaFactor*100); 
    e.preventDefault(); 
    e.stopPropagation(); 
    $(document.body).stop().animate( { 
         scrollTop : nt 
     } , 500 , 'easeInOutCubic' );  
  });

@@include('_snow.js')