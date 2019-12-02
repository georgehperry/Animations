
const dur = 2200;
const distance = 270;

const xDistance = 30;
const yDistance = 30;

let transitioningStaggeredPeople = false;
let staggerGridFinished = false;


//Hero animation
function heroAnimation() {
  anime({
    targets: '.line-1',
    translateX: 60,
    translateY: 10,
    duration: 500,
    easing: 'easeInOutSine',
    opacity: 1
  });
}

function portfolioVisibleTransitionDown() {
  anime({
      targets: '.portfolio-visible-transition-down',
      duration: 800,
      translateY: 50,
      opacity: 1,
      easing: 'linear'
  });
}

function portfolioVisibleTransitionStaggered() {
  anime({
    targets: '.portfolio-visible-transition-staggered',
    duration: 800,
    translateY: 50,
    opacity: 1,
    easing: 'linear',
    delay: anime.stagger(100)
  });
}

//Stagger Grid
function staggerGrid() {
  anime({
    targets: '.stagger-grid',
    opacity: 1,
    scale: [
      {value: .95, easing: 'easeOutSine', duration: 500},
      {value: 1, easing: 'easeInOutQuad', duration: 1200}
    ],
    delay: anime.stagger(200, {grid: [3, 3], from: 'center'})
  });
}

window.onload = function() {
  heroAnimation();
//Hero
// anime({
//   targets: '.line-1',
//   translateX: 60,
//   translateY: 10,
//   duration: 500,
//   easing: 'easeInOutSine',
//   opacity: 1
// });
anime({
  targets: '.line-2',
  translateX: 60,
  translateY: 10,
  duration: 550,
  easing: 'easeInOutQuad',
  delay: 50,
  opacity: 1
});
anime({
  targets: '.line-3',
  translateX: 60,
  translateY: 10,
  duration: 600,
  easing: 'easeInOutSine',
  delay: 75,
  opacity: 1
});
anime({
  targets: '.line-4',
  translateX: 60,
  translateY: 10,
  duration: 650,
  easing: 'easeInOutSine',
  delay: 100,
  opacity: 1
});

// Delayed translateX - 3 squares
anime({
  targets: '.delayed-x',
  translateX: distance,
  duration: dur,
  delay: function(el, i, l) {
    return i * 100;
  },
  endDelay: function(el, i, l) {
    return (l - i) * 100;
  }
});

// TranslateX & Tranform into circle
anime({
  targets: '.transCircle',
  delay: 1500,
  translateX: distance,
  backgroundColor: '#F00',
  borderRadius: ['0%', '50%'],
  duration: dur * 1.25,
  direction: 'alternate',
  easing: 'steps(4)'
});

// Staggered increase to 100% width
anime({

  targets: '.staggeredWidth',
  delay: 6500,
  keyframes: [
    {width: '20%'},
    {width: '0%'},
    {width: '40%'},
    {width: '20%'},
    {width: '60%'},
    {width: '40%'},
    {width: '75%'}
  ],
  duration: 5000,
  easing: 'easeInOutQuad'
});

// Big squirt
anime({
  targets: '.squirt .letter',
  translateX: function(el) {
    return el.getAttribute('data-x');
  },
  translateY: function(el, i) {
    return 50 + (-50 * i);
  },
  scale: function(el, i, l) {
    return (l - i) + .25;
  },
  rotate: function() { return anime.random(-360, 360); },
  borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
  duration: function() { return anime.random(1200, 1800); },
  delay: function() { return anime.random(0, 500); },
  direction: 'alternate',
  loop: true
});

// NDP svg path
anime({
  targets: '.ndp-svg path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1200,
  delay: function(el, i) { return i * 100 },
  direction: 'alternate',
  loop: true
});


anime({
  targets: '.keyframes-property',
  keyframes: [
    {translateX: 250},
    {translateY: 40},
    {translateX: 0},
    {translateY: 0}
  ],
  duration: 4000,
  easing: 'easeOutElastic(1, .8)',
  loop: true
});

//Function based valuesanime({
let functionValues = document.querySelector('.function-values');
anime({
  targets: '.function-values',
  translateX: function(functionValues) {
    return functionValues.getAttribute('data-x');
  },
  translateY: function(functionValues, i) {
    return 50 + (-80 * i);
  },
  scale: function(functionValues, i, l) {
    return (l - i) * 0.5;
  },
  rotate: function() { return anime.random(-360, 360) * 0.3; },
  borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
  duration: function() { return anime.random(1200, 1800); },
  delay: function() { return anime.random(0, 400); },
  direction: 'alternate',
  loop: true
});
}

window.onscroll = function() {

  let topRow = document.querySelector('.portfolio-item-1 .portfolio-item-2');
  let bottomRow = document.querySelector('.portfolio-item-3 .portfolio-item-4 .portfolio-item-5');
  let rightColumn = document.querySelector('.portfolio-item-2 .portfolio-item-5');

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    //Item 1
    anime({
      targets: '.portfolio-item-1',
      duration: 3000,
      translateY: yDistance,
      translateX: xDistance
    });
    //Item 2
    anime({
      targets: '.portfolio-item-2',
      duration: 3000,
      translateY: yDistance,
      translateX: -xDistance
    });
  }


  if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {

    //Item 3
    anime({
      targets: '.portfolio-item-3',
      duration: 3000,
      translateY: -yDistance,
      translateX: xDistance
    });
    //Item 4
    anime({
      targets: '.portfolio-item-4',
      duration: 3000,
      translateY: -yDistance
    });
    //Item 5
    anime({
      targets: '.portfolio-item-5',
      duration: 3000,
      translateY: -yDistance,
      translateX: -xDistance
    });
  }
 };

function isElementInViewport(el) {
  // console.log("x: " + transitioningStaggeredPeople);
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

// Check for People animation - all in one
function checkAnimationAllPeople() {
    var $elem = $('.person-0, .person-1, .person-2, .person-3, .person-4, .person-5 ');

    // If the animation has already been started
    if ($elem.hasClass('portfolio-visible-transition-down')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('portfolio-visible-transition-down');
        portfolioVisibleTransitionDown();
    }
}
// Check for People animation - all in one
function checkAnimationOnePerson() {
    // if (transitioningStaggeredPeople) {
    //   return;
    // }
    var $elem = $('.person-a, .person-b, .person-c, .person-d, .person-e, .person-f ');

    // If the animation has already been started
    if ($elem.hasClass('portfolio-visible-transition-staggered')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('portfolio-visible-transition-staggered');
        portfolioVisibleTransitionStaggered();
    }
}

function checkAnimationStaggerGrid() {
    var $elem = $('.person-a-stagger, .person-b-stagger, .person-c-stagger, .person-d-stagger, .person-e-stagger, .person-f-stagger, .person-g-stagger, .person-h-stagger, .person-i-stagger ');

    // If the animation has already been started
    if ($elem.hasClass('stagger-grid')) $elem.removeClass('stagger-grid');

    if (isElementInViewport($elem) && !staggerGridFinished) {
        // Start the animation
        $elem.addClass('stagger-grid');
        staggerGrid();
        staggerGridFinished = true;
    }
}

// function checkAnimationKeyframesProperty() {
//     var $elem = $('.robot-a, .robot-b, .robot-c ');
//
//     // If the animation has already been started
//     if ($elem.hasClass('keyframes-property')) return;
//
//     if (isElementInViewport($elem)) {
//         // Start the animation
//         $elem.addClass('keyframes-property');
//     }
// }

// function checkFunctionValues() {
//     var $elem = $('.robot-1, .robot-2, .robot-3 ');
//
//     // If the animation has already been started
//     if ($elem.hasClass('function-values')) return;
//
//     if (isElementInViewport($elem)) {
//         // Start the animation
//         $elem.addClass('function-values');
//     }
// }

// Capture scroll events
$(window).scroll(function(){
  checkAnimationAllPeople();
  checkAnimationOnePerson();
  // checkAnimationKeyframesProperty();
  checkAnimationStaggerGrid();
  // checkFunctionValues();
});
