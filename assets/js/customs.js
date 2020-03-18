$(document).ready(function() {
    'use strict';

    setHeaderClass();

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
        flankingItems: 3,
        autoPlay: 5000,
        startingItem: 1,
        separation: 195,
        sizeMultiplier: 0.8,
        opacityMultiplier: 0.7
    });

    var carouselsp = $('#eventCarouselsp');
    carouselsp.waterwheelCarousel({
        flankingItems: 3,
        autoPlay: 5000,
        sizeMultiplier: 0.8
    });

    $('.prev-event').bind('click', function() {
        carousel.prev();
        carouselsp.prev();
        return false;
    });
    $('.next-event').bind('click', function() {
        carousel.next();
        carouselsp.next();
        return false;
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

    $('ul.tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content .tab-item').removeClass('current');

        $(this).addClass('current');
        $('#' + tab_id).addClass('current');
    });

    $('ul.tabs-typecard li').click(function() {
        var tab_num = $(this).attr('data-tab');

        $('ul.tabs-typecard li').removeClass('current');
        $('.table__card-detail tr th, .table__card-detail tr td').removeClass('current');

        $(this).addClass('current');
        $('.table__card-detail tr th:nth-child(1), .table__card-detail tr td:nth-child(1)').addClass('current');
        $('.table__card-detail tr th:nth-child(' + (parseInt(tab_num) + 1) + '), .table__card-detail tr td:nth-child(' + (parseInt(tab_num) + 1) + ')').addClass('current');
    });

    // Target tab Game
    var idTab = window.top.location.hash;
    $(idTab).prop('checked', true);
});

function setHeaderClass() {
    var currentPath = '';

    currentPath = location.pathname.split('/')[1];
    console.log(currentPath);
    $('.nav-menu li').each(function() {
        var linkmenu = $(this)
            .find('a')
            .attr('href');
        if (linkmenu === currentPath) {
            $(this).addClass('current-menu-item');
            return false;
        }
        if (currentPath === '') {
            $('.nav-menu li:eq(0)').addClass('current-menu-item');
        }
    });
}
