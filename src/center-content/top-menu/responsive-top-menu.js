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

    //
    // Testing transition callback (X button shown on mobile)
    // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions

    $('.ip-menu-icon').on('transitionend', () => {
        console.log('transitionend jquery');
    });

    document.querySelector('.ip-menu-icon').addEventListener('transitionend', () => { 
        console.log('transitionend vanilla js');
    });
});
