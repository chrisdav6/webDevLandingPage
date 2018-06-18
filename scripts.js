$(function() {

  $("body").animate({
    opacity: 1
  }, 3000);

  $(".btn").hover(
    function() {
    $(".image-bg").css("background-size", "120% 120%");
    $(".overlay").stop().animate({
      backgroundColor: "rgba(0, 0, 0, .9)"
    },1000);
    $(".fas").css({"left":"-5px", "width":"30px", "opacity": "1"});
  }, function() {
    $(".image-bg").css("background-size", "100% 100%");
    $(".overlay").stop().animate({
      backgroundColor: "rgba(0, 0, 0, .6)"
    }, 1000);
    $(".fas").css({ "left": "-40px", "width": "0px", "opacity": "0"});
  });

});