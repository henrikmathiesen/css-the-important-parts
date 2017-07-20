$(function () {
    
    console.log('--- content-box ---');

    var $contentBox03 = $('.js-content-box-03');
    console.log('.ip-box-03, width(), calculated width', $contentBox03.width());
    console.log('.ip-box-03, innerWidth(), calculated width with padding but not border', $contentBox03.innerWidth());
    console.log('.ip-box-03, outerWidth(), calculated width with padding and border', $contentBox03.outerWidth());

    var $contentBox03Js = document.querySelector('.js-content-box-03');
    console.log('.ip-box-03, clientWidth, calculated width with padding but not border', $contentBox03Js.clientWidth);
    console.log('.ip-box-03, offsetWidth, calculated width with padding and border', $contentBox03Js.offsetWidth);

    console.log('--- /content-box ---');

    
    console.log('--- border-box ---');

    var $borderBox03 = $('.js-border-box-03');
    console.log('.ip-box-03, width(), calculated width', $borderBox03.width());
    console.log('.ip-box-03, innerWidth(), calculated width with padding but not border', $borderBox03.innerWidth());
    console.log('.ip-box-03, outerWidth(), calculated width with padding and border', $borderBox03.outerWidth());

    var $borderBox03Js = document.querySelector('.js-border-box-03');
    console.log('.ip-box-03, clientWidth, calculated width with padding but not border', $borderBox03Js.clientWidth);
    console.log('.ip-box-03, offsetWidth, calculated width with padding and border', $borderBox03Js.offsetWidth);

    console.log('--- /border-box ---');

});
