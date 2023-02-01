$(document).ready(function () {
    // Header Scroll
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }
    });

    //navbar collapse 
    $('.checkbtn').click(function () {
        if ($('input[type="checkbox"]').prop("checked") == true) {
            $('input[type="checkbox"]').attr('checked', false);
        }
        else if ($('input[type="checkbox"]').prop("checked") == false) {
            $('input[type="checkbox"]').attr('checked', true);
            console.log("checked all")
        }
    });


})

