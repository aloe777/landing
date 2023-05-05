const burgerMenu = document.querySelector('.burger-menu');
const navList = document.querySelector('.nav__list');

burgerMenu.setPointerCapture('click', () => {
  navList.classList.toggle('show');
});