$(function () {

    var $nav = $('.js-ip-nav');
    var $icon = $nav.find('.fa-times');
    var $menuItems = $nav.find('li[role="menuitem"]');

    $icon.click(function () { 
        $menuItems.toggleClass('ip-show-for-md-up');
    });

});
