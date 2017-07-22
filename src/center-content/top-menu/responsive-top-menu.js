$(function () {

    FastClick.attach(document.body);

    var $nav = $('.js-ip-nav');
    var $icon = $nav.find('.fa-times');
    var $menuItems = $nav.find('li[role="menuitem"]');

    var toggleMenu = function () { 
        $menuItems.toggleClass('ip-show-for-md-up');
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
