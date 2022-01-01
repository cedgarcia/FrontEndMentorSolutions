const burger = document.querySelector('.burger'),
  navLinks = document.querySelector('.nav__links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav__links-active');
  burger.classList.toggle('burger-active');
});

//Make sure the nav is restyled
window.addEventListener('resize', () => {
  if (window.innerWidth >= 800) {
    navLinks.classList.remove('nav__links-active');
    burger.classList.remove('burger-active');
  }
});
