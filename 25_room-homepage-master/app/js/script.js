const btn = document.querySelector('.burger-menu');
const navList = document.querySelector('.nav__list');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
  body.classList.toggle('disable-scroll');
  navList.classList.toggle('show');
  btn.classList.toggle('burger-menu--active');
});
