import Swiper from '../vendor/swiper';

const heroContainer = document.querySelector('.slider');
const toursContainer = document.querySelector('.tours__slider');
const coachesContainer = document.querySelector('.learning__slider');
const reviewsContainer = document.querySelector('.reviews__slider');
const advantagesContainer = document.querySelector('.advantages__slider');
const galleryContainer = document.querySelector('.gallery__slider');

const checkHeroSlider = () => {
  const swiper = new Swiper(heroContainer, {
    simulateTouch: true,
    speed: 300,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
};

const checkToursSlider = () => {
  const swiper = new Swiper(toursContainer, {
    simulateTouch: true,
    speed: 300,

    navigation: {
      nextEl: '.swiper__btn-next',
      prevEl: '.swiper__btn-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 1,
      },
    },
    loop: true,
  });
};

const checkCoachesSlider = () => {
  const swiper = new Swiper(coachesContainer, {
    simulateTouch: true,
    speed: 300,

    navigation: {
      nextEl: '.swiper__btn-next',
      prevEl: '.swiper__btn-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 1,
      },
    },
    loop: false,
  });
};

const checkReviewsSlider = () => {
  const swiper = new Swiper(reviewsContainer, {
    simulateTouch: true,
    speed: 300,

    navigation: {
      nextEl: '.swiper__btn-next',
      prevEl: '.swiper__btn-prev',
    },
    spaceBetween: 30,
    slidesPerView: 'auto',
    loop: false,
  });
};

const checkAdvantagesSlider = () => {
  const swiper = new Swiper(advantagesContainer, {
    simulateTouch: true,
    speed: 300,

    navigation: {
      nextEl: '.advantages__btn-next',
      prevEl: '.advantages__btn-prev',
    },
    spaceBetween: 30,
    slidesPerView: 'auto',
    loop: true,
  });
};

const checkGallerySlider = () => {
  const swiper = new Swiper(galleryContainer, {
    simulateTouch: true,
    speed: 300,

    navigation: {
      nextEl: '.gallery__btn-next',
      prevEl: '.gallery__btn-prev',
    },
    breakpoints: {
      320: {
        spaceBetween: 3,
      },
      768: {
        spaceBetween: 5,
      },
    },
    spaceBetween: 5,
    slidesPerView: 'auto',
    freeMode: true,
    loop: true,
  });
};

export {
  checkHeroSlider,
  checkToursSlider,
  checkCoachesSlider,
  checkReviewsSlider,
  checkAdvantagesSlider,
  checkGallerySlider
};
