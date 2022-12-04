//design
$(document).ready(function(){
    $("#design").click(function(){
        $(".designdef").show();
        $("#design").hide();
      });

      $(".designdef").click(function(){
        $(".designdef").hide();
        $("#design").show();
      });


//development
$("#development").click(function(){
  $(".developmentdef").show();
  $("#development").hide();
});
$(".developmentdef").click(function(){
  $(".developmentdef").hide();
  $("#development").show();
});

//management
$("#product").click(function(){
  $(".productdef").show();
  $("#product").hide();
});
$(".productdef").click(function(){
  $(".productdef").hide();
  $("#product").show();
});

//first image
$(".text1").hide();
$(".image1").animate({
  opacity: 1
});
$(".image1").hover(function(){
    $(this).stop().animate({opacity:.4},200);
    $('.text1').fadeIn();
  
  }, function() {
    $(this).stop().animate({opacity:1},500)
    $('.text1').fadeOut();
  });
  //The second image
  $(".text2").hide();
  $(".image2").animate({
    opacity: 1
  });
  $(".image2").hover(function(){
    $(this).stop().animate({opacity:.4},200);
    $('.text2').fadeIn();

}, function() {
    $(this).stop().animate({opacity:1},500)
    $('.text2').fadeOut();
});
$(".text3").hide();
$(".image3").animate({
  opacity: 1
});
$(".image3").hover(function(){
  $(this).stop().animate({opacity:.4},200);
  $('.text3').fadeIn();

}, function() {
  $(this).stop().animate({opacity:1},500)
  $('.text3').fadeOut();
});

$(".text4").hide();
$(".image4").animate({
  opacity: 1
});
$(".image4").hover(function(){
  $(this).stop().animate({opacity:.4},200);
  $('.text4').fadeIn();

}, function() {
  $(this).stop().animate({opacity:1},500)
  $('.text4').fadeOut();
});


});