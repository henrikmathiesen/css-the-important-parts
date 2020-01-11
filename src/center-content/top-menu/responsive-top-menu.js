$(function () {

    FastClick.attach(document.body);

    var $nav = $('.js-ip-nav');
    var $icon = $nav.find('.ip-menu-container');
    var $menuItems = $nav.find('.js-ip-nav-item');

    var toggleMenu = function () { 
        $menuItems.toggleClass('ip-show-for-md-up');
        $icon.find('.ip-menu-icon').toggleClass('ip-menu-open');
    };

    $icon.click(toggleMenu);

    $(window).on('keypress', function (event) {
        if (event.keyCode !== 13) { return; }

        var $focusedElement = $(':focus');

        if (!$focusedElement.is($icon)) {
            return;
        }

        toggleMenu();
    });

});
