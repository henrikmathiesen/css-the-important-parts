$(function () {
    
    var $contentBox03 = $('.ip-content-box-03');
    console.log('.ip-content-box-03, width(), css speced width', $contentBox03.width());
    console.log('.ip-content-box-03, innerWidth(), calculated width with padding but not border', $contentBox03.innerWidth());
    console.log('.ip-content-box-03, outerWidth(), calculated width with padding and border', $contentBox03.outerWidth());

    var $contentBox03Js = document.querySelector('.ip-content-box-03');
    console.log('.ip-content-box-03 clientWidth, calculated width with padding but not border', $contentBox03Js.clientWidth);
    console.log('.ip-content-box-03 offsetWidth, calculated width with padding and border', $contentBox03Js.offsetWidth);

});
