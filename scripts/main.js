$(function () {
    $('.reviews-slider').slick({
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    speed: 800,
                    slidesToShow: 1,
                    dots: false,
                    arrows: true

                }
            },
            {
                breakpoint: 600,
                settings: {
                    infinite: true,
                    speed: 800,
                    slidesToShow: 1,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    speed: 800,
                    slidesToShow: 1,
                    dots: false,
                    arrows: true
                }
            }

        ]
    })
});
$(document).ready(function () {
    $('.header-burger').click(function (event) {
        $('.header-burger, .header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});



/*
window.addEventListener("resize", function() {
    if (window.innerWidth < 640) {
        $('.capabilities-items').slick('unslick');
        sliderIsLive = false;
    }
    else {
        if (sliderIsLive) {
            $('.capabilities-items').slick();
            sliderIsLive = true;
        }
    }
});

 */