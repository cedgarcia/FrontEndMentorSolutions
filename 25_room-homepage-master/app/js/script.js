const btn = document.querySelector('.burger-menu');
const navList = document.querySelector('.nav__list');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
  body.classList.toggle('disable-scroll');
  navList.classList.toggle('show');
  btn.classList.toggle('burger-menu--active');
});

const SLIDETIME = 550; //ms
const pageNumber = document.querySelector('#page');
const prevBtn = document.querySelector('.slide__btn--prev'); //Button var
const nextBtn = document.querySelector('.slide__btn--next'); //Button var
const slides = [...document.querySelectorAll('.slide')]; //Slider var
const slideText = [...document.querySelectorAll('.slide__text')];

let clickable = true;
let active = null;
let newActive = null;

nextBtn.addEventListener('click', () => {
  changeSlide(true);
});
prevBtn.addEventListener('click', () => {
  changeSlide(false);
});
function initSlider() {
  slides.forEach((slide) =>
    slide.setAttribute(
      'style',
      `transition: transform ${SLIDETIME}ms;
                                    animation-duration: ${SLIDETIME}ms`
    )
  );
}
initSlider();

function changeSlide(forward) {
  if (clickable) {
    clickable = false;
    active = document.querySelector('.slide.active');
    const activeSlideIndex = slides.indexOf(active);
    // nextbuttontrigger
    if (forward) {
      newActive = slides[(activeSlideIndex + 1) % slides.length];
      active.classList.add('slideOutLeft');
      newActive.classList.add('slideInRight', 'active');

      // previousbutton trigger
    } else {
      newActive =
        slides[(activeSlideIndex - 1 + slides.length) % slides.length];
      active.classList.add('slideOutRight');
      newActive.classList.add('slideInLeft', 'active');
    }
  }
  // SLIDE LOOP
  slides.forEach((slide) => {
    slide.addEventListener('transitionend', (e) => {
      if (slide === active && !clickable) {
        clickable = true;
        active.className = 'slide';
      }
    });
  });
}
