$(document).ready(function() {
    'use strict';

    $('.fv-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode: true,
        // centerPadding: '80px',
        prevArrow: "<div class='arrow-slider'><span class='slick-prev'></span></div>",
        nextArrow: "<div class='arrow-slider'><span class='slick-next'></span></div>",
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    // prevArrow: '',
                    // nextArrow: ''
                }
            }
        ]
    });

    const $menu = $('.search-toggle');

    $('#header').on('click', '.search-toggle', function(e) {
        var selector = $(this).data('selector');

        $(selector)
            .toggleClass('show')
            .find('.search-input')
            .focus();
        $(this).toggleClass('active');

        e.preventDefault();
    });

    $(document).mouseup(function(e) {
        if (
            !$menu.is(e.target) && // if the target of the click isn't the container...
            $menu.has(e.target).length === 0
        ) {
            $menu.removeClass('active');
            $('#header').removeClass('show');
        }
    });

    var carousel = $('#eventCarousel');
    carousel.waterwheelCarousel({
        flankingItems: 3
    });

    var carouselsp = $('#eventCarouselsp');
    carouselsp.waterwheelCarousel({
        flankingItems: 3
    });

    $(window).resize(function() {
        // location.reload(true);
    });

    // click show menu
    $('#navLine').click(function() {
        $(this).toggleClass('active');
        $('.bottom-header').toggleClass('nav-active');
        $('body').toggleClass('show-menu');
    });

    if ($('.grid')[0]) {
        var $grid = $('.grid').imagesLoaded(function() {
            $grid.masonry({
                gutter: 15,
                itemSelector: '.grid-item',
                percentPosition: true,
                columnWidth: '.grid-sizer'
            });
        });
    }
});
