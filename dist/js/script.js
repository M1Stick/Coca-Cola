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
        $('.header__burger-list').css({'clip-path':'circle(2500px at 160% -101%)','visibility':'inherit'})
    })
  });

$(document).ready(function() {
    $('.header__burger .active').click(function() {
        $('.header__burger-list .active').css({'clip-path':'circle(1000px at 160% -101%)','visibility':'hidden'}),
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

var snowmax=35;
var snowcolor=new Array("#AAAACC","#DDDDFF","#CCCCDD","#F3F3F3","#F0FFFF","#FFFFFF","#EFF5FF")
var snowtype=new Array("Arial Black","Arial Narrow","Times","Comic Sans MS");
var snowletter=".";
var sinkspeed=0.6; 
var snowmaxsize=40;
var snowminsize=8;
var snowingzone=1;
  
  
var snow=new Array();
var marginbottom;
var marginright;
var timer;
var i_snow=0;
var x_mv=new Array();
var crds=new Array();
var lftrght=new Array();
var browserinfos=navigator.userAgent;
var ie5=document.all&&document.getElementById&&!browserinfos.match(/Opera/);
var ns6=document.getElementById&&!document.all;
var opera=browserinfos.match(/Opera/);
var browserok=ie5||ns6||opera;
function randommaker(range) {
    rand=Math.floor(range*Math.random());
    return rand;
}
function initsnow() {
    if (ie5 || opera) {
        marginbottom=document.body.clientHeight;
        marginright=document.body.clientWidth;
    }
    else if (ns6) {
        marginbottom=window.innerHeight;
        marginright=window.innerWidth;
    }
    var snowsizerange=snowmaxsize-snowminsize;
    for (i=0;i<=snowmax;i++) {
        crds[i]=0;
        lftrght[i]=Math.random()*15;
        x_mv[i]=0.03+Math.random()/10;
        snow[i]=document.getElementById("s"+i);
        snow[i].style.fontFamily=snowtype[randommaker(snowtype/length)];
        snow[i].size=randommaker(snowsizerange)+snowminsize;
        snow[i].style.fontSize=snow[i].size+"px";
        snow[i].style.color=snowcolor[randommaker(snowcolor.length)];
        snow[i].sink=sinkspeed*snow[i].size/5;
        if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
        if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
        if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
        if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
        snow[i].posy=randommaker(2*marginbottom-marginbottom-2*snow[i].size);
        snow[i].style.left=snow[i].posx+"px";
        snow[i].style.top=snow[i].posy+"px";
    }
    movesnow();
}
function movesnow() {
    for(i=0;i<=snowmax;i++) {
        crds[i]+=x_mv[i];
        snow[i].posy+=snow[i].sink;
        snow[i].style.left=snow[i].posx+lftrght[i]*Math.sin(crds[i])+"px";
        snow[i].style.top=snow[i].posy+"px";
        if (snow[i].posy>=marginbottom-2*snow[i].size || parseInt(snow[i].style.left)>(marginright-3*lftrght[i])) {
            if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
            if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
            if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
            if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
            snow[i].posy=0;
        }
    }
    var timer=setTimeout("movesnow()",50);
}
for (i=0;i<=snowmax;i++) {
    document.write("<span id='s"+i+"' style='position:absolute;top:-"+snowmaxsize+"px;'>"+snowletter+"</span>");
}
if (browserok) {
    window.onload=initsnow;
}
var starmax=25;
var starcolor=new Array("#AAAACC","#DDDDFF","#CCCCDD","#F3F3F3","#F0FFFF","#FFFFFF","#EFF5FF")
var startype=new Array("Arial Black","Arial Narrow","Times","Comic Sans MS");
var starletter="★";
var sinkspeed=1; 
var starmaxsize=30;
var starminsize=4;
var staringzone=1;
  
  
var star=new Array();
var marginbottom;
var marginright;
var timer;
var i_star=0;
var x_mv=new Array();
var crds=new Array();
var lftrght=new Array();
var browserinfos=navigator.userAgent;
var ie5=document.all&&document.getElementById&&!browserinfos.match(/Opera/);
var ns6=document.getElementById&&!document.all;
var opera=browserinfos.match(/Opera/);
var browserok=ie5||ns6||opera;
function randommaker(range) {
    rand=Math.floor(range*Math.random());
    return rand;
}
function initstar() {
    if (ie5 || opera) {
        marginbottom=document.body.clientHeight;
        marginright=document.body.clientWidth;
    }
    else if (ns6) {
        marginbottom=window.innerHeight;
        marginright=window.innerWidth;
    }
    var starsizerange=starmaxsize-starminsize;
    for (i=0;i<=starmax;i++) {
        crds[i]=0;
        lftrght[i]=Math.random()*20;
        x_mv[i]=0.03+Math.random()/10;
        star[i]=document.getElementById("s"+i);
        star[i].style.fontFamily=startype[randommaker(startype/length)];
        star[i].size=randommaker(starsizerange)+starminsize;
        star[i].style.fontSize=star[i].size+"px";
        star[i].style.color=starcolor[randommaker(starcolor.length)];
        star[i].sink=sinkspeed*star[i].size/2;
        if (staringzone==1) {star[i].posx=randommaker(marginright-star[i].size)}
        if (staringzone==2) {star[i].posx=randommaker(marginright/2-star[i].size)}
        if (staringzone==3) {star[i].posx=randommaker(marginright/2-star[i].size)+marginright/4}
        if (staringzone==4) {star[i].posx=randommaker(marginright/2-star[i].size)+marginright/2}
        star[i].posy=randommaker(2*marginbottom-marginbottom-2*star[i].size);
        star[i].style.left=star[i].posx+"px";
        star[i].style.top=star[i].posy+"px";
    }
    movestar();
}
function movestar() {
    for(i=0;i<=starmax;i++) {
        crds[i]+=x_mv[i];
        star[i].posy+=star[i].sink;
        star[i].style.left=star[i].posx+lftrght[i]*Math.sin(crds[i])+"px";
        star[i].style.top=star[i].posy+"px";
        if (star[i].posy>=marginbottom-2*star[i].size || parseInt(star[i].style.left)>(marginright-3*lftrght[i])) {
            if (staringzone==1) {star[i].posx=randommaker(marginright-star[i].size)}
            if (staringzone==2) {star[i].posx=randommaker(marginright/2-star[i].size)}
            if (staringzone==3) {star[i].posx=randommaker(marginright/2-star[i].size)+marginright/4}
            if (staringzone==4) {star[i].posx=randommaker(marginright/2-star[i].size)+marginright/2}
            star[i].posy=0;
        }
    }
    var timer=setTimeout("movestar()",50);
}
for (i=0;i<=starmax;i++) {
    document.write("<span id='s"+i+"' style='position:absolute;top:-"+starmaxsize+"px;'>"+starletter+"</span>");
}
if (browserok) {
    window.onload=initstar;
}