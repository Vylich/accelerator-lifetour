const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

const initMenu = () => {
  navMain.classList.remove('main-nav--nojs');
  navMain.classList.add('main-nav--js');
  navMain.classList.add('main-nav--closed');


  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });
};

export {initMenu};