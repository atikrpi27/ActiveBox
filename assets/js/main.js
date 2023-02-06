/*++++++++++++++++++++++++++++++++++++ 
            Product filter 
++++++++++++++++++++++++++++++++++++*/

let button = document.querySelectorAll('.button');
let storeItems = document.querySelectorAll('.store-item');

button.forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        let filter = e.target.dataset.filter;       // put data-filter value
        // console.log(filter)

        storeItems.forEach(item => {
            if (filter === "all") {                   // filter items
                item.style.display = 'block';
            }
            else {
                if (item.classList.contains(filter)) {
                    item.style.display = 'block';
                }
                else {
                    item.style.display = 'none';
                }
            }
        })
    })
})



$(document).ready(function () {
    /*+++++++++++++++++++++++++++++++ 
            Header Scroll
    +++++++++++++++++++++++++++++++*/

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }
    });

    /*+++++++++++++++++++++++++++++++++ 
            navbar collapse 
    +++++++++++++++++++++++++++++++++*/

    $('.checkbtn').click(function () {
        if ($('input[type="checkbox"]').prop("checked") == true) {
            $('input[type="checkbox"]').attr('checked', false);
            $('#cancelBtn').hide();
            $('#iconBtn').show();
        }
        else if ($('input[type="checkbox"]').prop("checked") == false) {
            $('input[type="checkbox"]').attr('checked', true);
            // console.log("checked all")
            $('#iconBtn').hide();
            $('#cancelBtn').show();

        }

        // after click any li then close the nav
        $('.nav-list li').click(function () {
            $('input[type="checkbox"]').attr('checked', false);
            $('#cancelBtn').hide();
            $('#iconBtn').show();
        })
    });

    /*+++++++++++++++++++++++++++++++++++ 
            testimonials slider 
    +++++++++++++++++++++++++++++++++++*/

    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        // autoplayHoverPause: true,
        autoplayTimeout: 4000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        margin: 30,
        loop: true,
        dots: true,
    });
})