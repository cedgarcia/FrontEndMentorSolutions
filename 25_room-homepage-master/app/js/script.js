const btn = document.querySelector('.burger-menu');
const navList = document.querySelector('.nav__list');
const nav = document.querySelector('.nav');

btn.addEventListener('click', () => {
  navList.classList.toggle('show');
  btn.classList.toggle('burger-menu--active');
});
