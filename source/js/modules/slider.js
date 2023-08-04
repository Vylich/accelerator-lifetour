import Swiper from '../vendor/swiper';

const heroContainer = document.querySelector('.slider');
const toursContainer = document.querySelector('.tours__slider');


const checkHeroSlider = () => {
  const swiper = new Swiper (heroContainer, {
    simulateTouch: true,
    speed: 300,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
};

const checkToursSlider = () => {
  const swiper = new Swiper (toursContainer, {
    simulateTouch: true,
    speed: 300,

    navigation: {
      nextEl: '.tours__btn-next',
      prevEl: '.tours__btn-prev',
    },
    spaceBetween: 30,
    slidesPerView: 3,
    loop: true,
  });
};

export {checkHeroSlider, checkToursSlider};
