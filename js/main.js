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
});