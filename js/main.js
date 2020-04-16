$(".wcc__all").on("click",function(){
    $(".wcc__work").removeClass("worklist__active");
    $(".wcc__project").removeClass("worklist__active");
    $(".wcc__all").addClass("worklist__active");
    $(".wt__project").removeClass("inactive");
    $(".wt__work").removeClass("inactive");
    $(".worklist__work").removeClass("inactive");
    $(".worklist__project").removeClass("inactive");
    for(var i = 0; i < 7; i++){
        if(document.querySelector(".worklist__" + i) != document.querySelector(".worklist__1")){
            $(".worklist__" + i).removeClass("active");
        }
    }
    $(".worklist__1").addClass("active");
    window.scrollTo(0, 0);
});

$(".wcc__work").on("click",function(){
    $(".wcc__all").removeClass("worklist__active");
    $(".wcc__project").removeClass("worklist__active");
    $(".wcc__work").addClass("worklist__active");
    $(".wt__work").removeClass("inactive");
    $(".wt__project").addClass("inactive");
    $(".worklist__project").addClass("inactive");
    $(".worklist__work").removeClass("inactive");
    for(var i = 0; i < 7; i++){
        if(document.querySelector(".worklist__" + i) != document.querySelector(".worklist__1")){
            $(".worklist__" + i).removeClass("active");
        }
    }
    $(".worklist__1").addClass("active");
    window.scrollTo(0, 0);
});

$(".wcc__project").on("click",function(){
    $(".wcc__all").removeClass("worklist__active");
    $(".wcc__work").removeClass("worklist__active");
    $(".wcc__project").addClass("worklist__active");
    $(".wt__work").addClass("inactive");
    $(".wt__project").removeClass("inactive");
    $(".worklist__project").removeClass("inactive");
    $(".worklist__work").addClass("inactive");
    for(var i = 0; i < 7; i++){
        if(document.querySelector(".worklist__" + i) != document.querySelector(".worklist__3")){
            $(".worklist__" + i).removeClass("active");
        }
    }
    $(".worklist__3").addClass("active");
    window.scrollTo(0, 0);
});

// WorkList
$(".worklist__1").on("click",function(){
    worklistActive1();
    worklistScroll1();
});

$(".worklist__2").on("click",function(){
    worklistActive2();
    worklistScroll2();
});

$(".worklist__3").on("click",function(){
    worklistActive3();
    worklistScroll3();
});

$(".worklist__4").on("click",function(){
    worklistActive4();
    worklistScroll4();
});

$(".worklist__5").on("click",function(){
    worklistActive5();
    worklistScroll5();
});

$(".worklist__6").on("click",function(){
    worklistActive6();
    worklistScroll6();
});

$(".worklist__7").on("click",function(){
    worklistActive7();
    worklistScroll7();
});

$(document).on('scroll', function() {
    if($(this).scrollTop()+100>=$('.wt__oldportfolio .work__tile-title').position().top){
        worklistActive7();
    }
    else if($(this).scrollTop()+100>=$('.wt__konditori .work__tile-title').position().top){
        worklistActive6();
    }
    else if($(this).scrollTop()+100>=$('.wt__fuyuramen .work__tile-title').position().top){
        worklistActive5();
    }
    else if($(this).scrollTop()+100>=$('.wt__weatherds .work__tile-title').position().top){
        worklistActive4();
    }
    else if($(this).scrollTop()+100>=$('.wt__mixhour .work__tile-title').position().top){
        worklistActive3();
    }
    else if($(this).scrollTop()+100>=$('.wt__rugsusa .work__tile-title').position().top){
        worklistActive2();
    }
    else if($(this).scrollTop()+100>=$('.wt__healco .work__tile-title').position().top){
        worklistActive1();
    }
});

/**Functions**/

function worklistActive1() {
    $(".worklist__1").addClass("active");
    for(var i = 0; i < 8; i++){
        if(document.querySelector(".worklist__" + i) != document.querySelector(".worklist__1")){
            $(".worklist__" + i).removeClass("active");
        }
    }
}

function worklistScroll1() {
    var goTo = $(".wt__healco .work__tile-title");
        var top = goTo.offset().top;
        top-=75;
        $('html,body').animate({scrollTop: top}, 'slow');
        return false;
}

function worklistActive2() {
    $(".worklist__2").addClass("active");
    for(var i = 0; i < 8; i++){
        if(document.querySelector(".worklist__" + i) != document.querySelector(".worklist__2")){
            $(".worklist__" + i).removeClass("active");
        }
    }
}

function worklistScroll2() {
    var goTo = $(".wt__rugsusa .work__tile-title");
        var top = goTo.offset().top;
        top-=75;
        $('html,body').animate({scrollTop: top}, 'slow');
        return false;
}

function worklistActive3() {
    $(".worklist__3").addClass("active");
    for(var i = 0; i < 8; i++){
        if(document.querySelector(".worklist__" + i) != document.querySelector(".worklist__3")){
            $(".worklist__" + i).removeClass("active");
        }
    }
}

function worklistScroll3() {
    var goTo = $(".wt__mixhour .work__tile-title");
        var top = goTo.offset().top;
        top-=75;
        $('html,body').animate({scrollTop: top}, 'slow');
        return false;
}

function worklistActive4() {
    $(".worklist__4").addClass("active");
    for(var i = 0; i < 8; i++){
        if(document.querySelector(".worklist__" + i) != document.querySelector(".worklist__4")){
            $(".worklist__" + i).removeClass("active");
        }
    }
}

function worklistScroll4() {
    var goTo = $(".wt__weatherds .work__tile-title");
        var top = goTo.offset().top;
        top-=75;
        $('html,body').animate({scrollTop: top}, 'slow');
        return false;
}

function worklistActive5() {
    $(".worklist__5").addClass("active");
    for(var i = 0; i < 8; i++){
        if(document.querySelector(".worklist__" + i) != document.querySelector(".worklist__5")){
            $(".worklist__" + i).removeClass("active");
        }
    }
}

function worklistScroll5() {
    var goTo = $(".wt__fuyuramen .work__tile-title");
        var top = goTo.offset().top;
        top-=75;
        $('html,body').animate({scrollTop: top}, 'slow');
        return false;
}

function worklistActive6() {
    $(".worklist__6").addClass("active");
    for(var i = 0; i < 8; i++){
        if(document.querySelector(".worklist__" + i) != document.querySelector(".worklist__6")){
            $(".worklist__" + i).removeClass("active");
        }
    }
}

function worklistScroll6() {
    var goTo = $(".wt__konditori .work__tile-title");
        var top = goTo.offset().top;
        top-=75;
        $('html,body').animate({scrollTop: top}, 'slow');
        return false;
}

function worklistActive7() {
    $(".worklist__7").addClass("active");
    for(var i = 0; i < 8; i++){
        if(document.querySelector(".worklist__" + i) != document.querySelector(".worklist__7")){
            $(".worklist__" + i).removeClass("active");
        }
    }
}

$(".contact__button").on("click",function(){
    worklistScrollContact();
});

function worklistScroll7() {
    var goTo = $(".wt__oldportfolio .work__tile-title");
        var top = goTo.offset().top;
        top-=75;
        $('html,body').animate({scrollTop: top}, 'slow');
        return false;
}

function worklistScrollContact() {
    var goTo = $(".contact");
        var top = goTo.offset().top;
        top-=75;
        $('html,body').animate({scrollTop: top}, 'slow');
        return false;
}

$(window).on("load",function(){
    $(".loader").fadeOut("slow");
});