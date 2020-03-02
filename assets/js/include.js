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
    $('#' + currentPath)
        .parents('li')
        .addClass('current');
    $('#' + currentPath).addClass('current');
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
