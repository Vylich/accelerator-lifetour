const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');


const initMenu = () => {
  navMain.classList.remove('main-nav--nojs');
  navMain.classList.add('main-nav--js');
  navMain.classList.add('main-nav--closed');

  navToggle.addEventListener('click', () => {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.insertAdjacentHTML('beforeEnd', '<div class="overlay"></div>');
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
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
  const overlay = navMain.querySelector('.overlay');
  overlay.parentNode.removeChild(overlay);
};

export {initMenu};
