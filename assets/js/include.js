'use strict';

function loadHeader() {
    $.ajax({
        url: '/include/header.html',
        dataType: 'html',
        cache: false,
        success: function(html) {
            var currentPath = '';
            $(html).prependTo('body');

            setHeaderClass(); // ヘッダーの共通メニューにクラスの付与
        }
    });
}

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

function loadFooter() {
    $.ajax({
        url: '/include/footer.html',
        dataType: 'html',
        cache: false,
        success: function(html) {
            $(html).appendTo('body');
        }
    });
}
