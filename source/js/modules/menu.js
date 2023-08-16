const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const bodyNode = document.querySelector('body');


const initMenu = () => {
  navMain.classList.remove('main-nav--nojs');
  navMain.classList.add('main-nav--js');
  navMain.classList.add('main-nav--closed');
  bodyNode.classList.remove('is-open-menu');

  navToggle.addEventListener('click', () => {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.insertAdjacentHTML('beforeEnd', '<div class="overlay"></div>');
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      bodyNode.classList.add('is-open-menu');
    } else {
      closeMenu();
    }
  });

  document.addEventListener('mouseup', (e) => {
    if (e.target.className === 'overlay' || e.target.tagName === 'A') {
      setTimeout(closeMenu, 100);
    }
  });
};

const closeMenu = () => {
  navMain.classList.add('main-nav--closed');
  navMain.classList.remove('main-nav--opened');
  bodyNode.classList.remove('is-open-menu');
  const overlay = navMain.querySelector('.overlay');
  overlay.parentNode.removeChild(overlay);
};

export {initMenu};
