//design
$(document).ready(function () {
    $("#design").click(function () {
        $(".designdef").show();
        $("#design").hide();
    });

    $(".designdef").click(function () {
        $(".designdef").hide();
        $("#design").show();
    });


    //development
    $("#development").click(function () {
        $(".developmentdef").show();
        $("#development").hide();
    });
    $(".developmentdef").click(function () {
        $(".developmentdef").hide();
        $("#development").show();
    });

    //management
    $("#product").click(function () {
        $(".productdef").show();
        $("#product").hide();
    });
    $(".productdef").click(function () {
        $(".productdef").hide();
        $("#product").show();
    });

    //first image
    $(".text1").hide();
    $(".image1").animate({
        opacity: 1
    });
    $(".image1").hover(function () {
        $(this).stop().animate({ opacity: .4 }, 200);
        $('.text1').fadeIn();

    }, function () {
        $(this).stop().animate({ opacity: 1 }, 500)
        $('.text1').fadeOut();
    });
    //The second image
    $(".text2").hide();
    $(".image2").animate({
        opacity: 1
    });
    $(".image2").hover(function () {
        $(this).stop().animate({ opacity: .4 }, 200);
        $('.text2').fadeIn();

    }, function () {
        $(this).stop().animate({ opacity: 1 }, 500)
        $('.text2').fadeOut();
    });
    $(".text3").hide();
    $(".image3").animate({
        opacity: 1
    });
    //third image
    $(".image3").hover(function () {
        $(this).stop().animate({ opacity: .4 }, 200);
        $('.text3').fadeIn();

    }, function () {
        $(this).stop().animate({ opacity: 1 }, 500)
        $('.text3').fadeOut();
    });
    //the fourth
    $(".text4").hide();
    $(".image4").animate({
        opacity: 1
    });
    $(".image4").hover(function () {
        $(this).stop().animate({ opacity: .4 }, 200);
        $('.text4').fadeIn();

    }, function () {
        $(this).stop().animate({ opacity: 1 }, 500)
        $('.text4').fadeOut();
    });
    //the fifth
    $(".text5").hide();
    $(".image5").animate({
        opacity: 1
    });
    $(".image5").hover(function () {
        $(this).stop().animate({ opacity: .4 }, 200);
        $('.text5').fadeIn();

    }, function () {
        $(this).stop().animate({ opacity: 1 }, 500)
        $('.text5').fadeOut();
    });
    //the sixth
    $(".text6").hide();
    $(".image6").animate({
        opacity: 1
    });
    $(".image6").hover(function () {
        $(this).stop().animate({ opacity: .4 }, 200);
        $('.text6').fadeIn();

    }, function () {
        $(this).stop().animate({ opacity: 1 }, 500)
        $('.text6').fadeOut();
    });
    //the seventh
    $(".text7").hide();
    $(".image7").animate({
        opacity: 1
    });
    $(".image7").hover(function () {
        $(this).stop().animate({ opacity: .4 }, 200);
        $('.text7').fadeIn();

    }, function () {
        $(this).stop().animate({ opacity: 1 }, 500)
        $('.text7').fadeOut();
    });
    //the eighth
    $(".text8").hide();
    $(".image8").animate({
        opacity: 1
    });
    $(".image8").hover(function () {
        $(this).stop().animate({ opacity: .4 }, 200);
        $('.text8').fadeIn();

    }, function () {
        $(this).stop().animate({ opacity: 1 }, 500)
        $('.text8').fadeOut();
    });

    $("#form1").submit(function (e) {

        var name = document.getElementById("name").value;
        var email = document.getElementById("name").value;
        if (name == " " || email == " ") {
            alert("Please enter a name and your email address to continue.");
            return false;
        } else {
            alert("Hello " + name + " \n we have received your message. Thank you for reaching out")

        }

    });
});