import Swiper from '../vendor/swiper';

const heroContainer = document.querySelector('.slider');
const toursContainer = document.querySelector('.tours__slider');
const coachesContainer = document.querySelector('.learning__slider');
const reviewsContainer = document.querySelector('.reviews__slider');
const advantagesContainer = document.querySelector('.advantages__slider');
const galleryContainer = document.querySelector('.gallery__slider');

const checkHeroSlider = () => {
  const swiper = new Swiper(heroContainer, {
    loop: true,
    speed: 300,
    breakpoints: {
      320: {
        allowTouchMove: true,
      },
      768: {
        allowTouchMove: true,
      },
      1200: {
        allowTouchMove: false,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
};

const checkToursSlider = () => {
  const swiper = new Swiper(toursContainer, {
    speed: 300,

    navigation: {
      nextEl: '.swiper__btn-next',
      prevEl: '.swiper__btn-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
        allowTouchMove: true,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        allowTouchMove: false,
      },
    },
    loop: true,
  });
};

const checkCoachesSlider = () => {
  const swiper = new Swiper(coachesContainer, {
    speed: 300,

    navigation: {
      nextEl: '.swiper__btn-next',
      prevEl: '.swiper__btn-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: true,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 1,
        allowTouchMove: false,
      },
    },
    loop: false,
  });
};

const checkReviewsSlider = () => {
  const swiper = new Swiper(reviewsContainer, {
    speed: 300,
    breakpoints: {
      320: {
        allowTouchMove: true,
      },
      768: {
        allowTouchMove: true,
      },
      1200: {
        allowTouchMove: false,
      },
    },
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
    speed: 300,
    breakpoints: {
      320: {
        allowTouchMove: true,
      },
      768: {
        allowTouchMove: true,
      },
      1200: {
        allowTouchMove: false,
      },
    },
    navigation: {
      nextEl: '.advantages__btn-next',
      prevEl: '.advantages__btn-prev',
    },
    spaceBetween: 30,
    slidesPerView: 3,
    loop: true,
  });
};

const checkGallerySlider = () => {
  const swiper = new Swiper(galleryContainer, {
    speed: 300,
    navigation: {
      nextEl: '.gallery__btn-next',
      prevEl: '.gallery__btn-prev',
    },
    breakpoints: {
      320: {
        spaceBetween: 3,
        allowTouchMove: true,
      },
      768: {
        spaceBetween: 5,
        allowTouchMove: true,
      },
      1200: {
        spaceBetween: 5,
        allowTouchMove: false,
      },
    },
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
