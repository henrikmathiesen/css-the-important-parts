$(function () {

    var $nav = $('.js-ip-nav');
    var $icon = $nav.find('.fa-times');
    var $lisLinks = $nav.find('li:not(li:first-child)');
    var isExpanded = false;

    $icon.click(function () { 
        $lisLinks.css('display', !isExpanded ? 'list-item' : 'none');
        isExpanded = !isExpanded;
    });

});
