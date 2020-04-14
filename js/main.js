$(".wcc__all").on("click",function(){
    $(".wcc__work").removeClass("worklist__active");
    $(".wcc__project").removeClass("worklist__active");
    $(".wcc__all").addClass("worklist__active");
    $(".wt__project").removeClass("inactive");
    $(".wt__work").removeClass("inactive");
    window.scrollTo(0, 0);
});

$(".wcc__work").on("click",function(){
    $(".wcc__all").removeClass("worklist__active");
    $(".wcc__project").removeClass("worklist__active");
    $(".wcc__work").addClass("worklist__active");
    $(".wt__work").removeClass("inactive");
    $(".wt__project").addClass("inactive");
    window.scrollTo(0, 0);
});

$(".wcc__project").on("click",function(){
    $(".wcc__all").removeClass("worklist__active");
    $(".wcc__work").removeClass("worklist__active");
    $(".wcc__project").addClass("worklist__active");
    $(".wt__work").addClass("inactive");
    $(".wt__project").removeClass("inactive");
    window.scrollTo(0, 0);
});

// WorkList
$(".worklist__1").on("click",function(){
    $(".worklist__1").addClass("active");
    for(var i = 0; i < 7; i++){
        if(document.querySelector(".worklist__" + i) != document.querySelector(".worklist__1")){
            $(".worklist__" + i).removeClass("active");
        }
    }
});

$(".worklist__2").on("click",function(){
    $(".worklist__2").addClass("active");
    for(var i = 0; i < 7; i++){
        if(document.querySelector(".worklist__" + i) != document.querySelector(".worklist__2")){
            $(".worklist__" + i).removeClass("active");
        }
    }
});

$(".worklist__3").on("click",function(){
    $(".worklist__3").addClass("active");
    for(var i = 0; i < 7; i++){
        if(document.querySelector(".worklist__" + i) != document.querySelector(".worklist__3")){
            $(".worklist__" + i).removeClass("active");
        }
    }
});

$(".worklist__4").on("click",function(){
    $(".worklist__4").addClass("active");
    for(var i = 0; i < 7; i++){
        if(document.querySelector(".worklist__" + i) != document.querySelector(".worklist__4")){
            $(".worklist__" + i).removeClass("active");
        }
    }
});

$(".worklist__5").on("click",function(){
    $(".worklist__5").addClass("active");
    for(var i = 0; i < 7; i++){
        if(document.querySelector(".worklist__" + i) != document.querySelector(".worklist__5")){
            $(".worklist__" + i).removeClass("active");
        }
    }
});

$(".worklist__6").on("click",function(){
    $(".worklist__6").addClass("active");
    for(var i = 0; i < 7; i++){
        if(document.querySelector(".worklist__" + i) != document.querySelector(".worklist__6")){
            $(".worklist__" + i).removeClass("active");
        }
    }
});