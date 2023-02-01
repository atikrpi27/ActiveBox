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
            $('#cancelBtn').hide();
            $('#iconBtn').show();
        }
        else if ($('input[type="checkbox"]').prop("checked") == false) {
            $('input[type="checkbox"]').attr('checked', true);
            console.log("checked all")
            $('#iconBtn').hide();
            $('#cancelBtn').show();
        }
    });


})

