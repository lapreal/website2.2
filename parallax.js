$(window).scroll(function(){
    var scrollDistance = $(window).scrollTop();
    console.log(scrollDistance);
    $(".hero-image").css("top", 0.5 * scrollDistance);
    $(".fastscroll").css("top", -2 * scrollDistance);
});