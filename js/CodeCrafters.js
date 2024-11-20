
$(document).ready(function () {

    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll', function () {
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if ($(window).scrollTop() > 35) {
            $('.header').css({ 'background': '#002e5f', 'box-shadow': '0 .2rem .5rem rgba(0,0,0,.4)' });
        }
        else {
            $('.header').css({ 'background': 'none', 'box-shadow': 'none' });
        }
    });

    const counters = document.querySelectorAll('.counter');
    const speed = 120;
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;
            if (count < target) {
                counter.innerText = count + inc;
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });

    (function ($) {
        "use strict";

        $(".clients-carousel").owlCarousel({
            autoplay: true,
            dots: true,
            loop: true,
            responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 } }
        });

        $(".testimonials-carousel").owlCarousel({
            autoplay: true,
            dots: true,
            loop: true,
            responsive: { 0: { items: 1 }, 576: { items: 2 }, 768: { items: 3 }, 992: { items: 4 } }
        });

    })(jQuery);

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    $('.accordion-header').click(function () {
        $('.accordion .accordion-body').slideUp(500);
        $(this).next('.accordion-body').slideDown(500);
        $('.accordion .accordion-header span').text('+');
        $(this).children('span').text('-');
    });

    $(".owl-carousel").owlCarousel({
        items: 3,              // Number of items to display at once
        loop: true,            // Loop the items
        margin: 10,            // Margin between items
        autoplay: true,        // Enable autoplay
        autoplayTimeout: 2000, // Autoplay delay (in ms)
        autoplayHoverPause: true, // Pause autoplay on hover
        responsive: {
            0: {
                items: 1       // Show 1 item on small screens
            },
            768: {
                items: 2       // Show 2 items on medium screens
            },
            992: {
                items: 3       // Show 3 items on large screens
            }
        }
    });

    $(".owl-carousel").owlCarousel({
        items: 5,              // Number of items in a row
        loop: true,            // Enable infinite loop
        margin: 10,            // Space between items
        autoplay: true,        // Enable autoplay
        autoplayTimeout: 2000, // Time in ms between slides
        autoplayHoverPause: true, // Pause autoplay on hover
        nav: false,            // Disable navigation arrows
        dots: false,           // Disable dots
        responsive: {
            0: {
                items: 2       // 2 items on small screens
            },
            600: {
                items: 3       // 3 items on medium screens
            },
            1000: {
                items: 5       // 5 items on large screens
            }
        }
    });

});

