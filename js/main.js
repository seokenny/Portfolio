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