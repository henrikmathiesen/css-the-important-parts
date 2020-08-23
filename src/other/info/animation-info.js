/*

    https://www.npmjs.com/package/animate.css
    https://greensock.com/

    https://css-tricks.com/using-css-transitions-auto-dimensions/

    https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions
        Can listen for transition end, run, start from JavaScript

    https://developer.mozilla.org/en-US/docs/Web/CSS/animation

    Angular, see angular-x-routing
    Keyframes, see mobilescrolling
    translateY, see mobilescrolling

    If moving elements, prefer Keyframes or translate, since more performant
    https://css-tricks.com/myth-busting-css-animations-vs-javascript/



    // _____________________________________________________________________________________
    // can set a really high max-height, since controlling animation with cubic
    // see css-tricks link above for trouble animation auto height
    // height: auto is default

    .app-collapse-expanded-false,
    .app-collapse-expanded-true {
        overflow: hidden;
    }

    .app-collapse-expanded-false {
        max-height: 0;
        transition: max-height 0.2s cubic-bezier(0,1,0,1);
    }

    .app-collapse-expanded-true {
        max-height: 9999px;
        transition: max-height 0.2s cubic-bezier(1,0,1,0);
    }
    // _____________________________________________________________________________________

*/
