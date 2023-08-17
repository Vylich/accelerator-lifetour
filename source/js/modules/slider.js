import Swiper from '../vendor/swiper'

const heroContainer = document.querySelector('.slider');
const toursContainer = document.querySelector('.tours__slider');
const coachesContainer = document.querySelector('.learning__slider');
const reviewsContainer = document.querySelector('.reviews__slider');
const advantagesContainer = document.querySelector('.advantages__slider');
const galleryContainer = document.querySelector('.gallery__slider');

const checkHeroSlider = () => {
  let swiperTouchStartX;

  new Swiper(heroContainer, {
    slidesPerView: 1,
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
    on: {
      touchStart(swiper, e) {
        if (e.type === 'touchstart') {
          swiperTouchStartX = e.touches[0].clientX;
        } else {
          swiperTouchStartX = e.clientX;
        }
      },
      touchEnd(swiper, e) {
        const tolerance = 150;
        const totalSlidesLen = swiper.slides.length;
        const diff = (() => {
          if (e.type === 'touchend') {
            return e.changedTouches[0].clientX - swiperTouchStartX;
          } else {
            return e.clientX - swiperTouchStartX;
          }
        })();
        if (swiper.isBeginning && diff >= tolerance) {
          swiper.slideTo(totalSlidesLen - 1);
        } else if (swiper.isEnd && diff <= -tolerance) {
          setTimeout(() => {
            swiper.slideTo(0);
          }, 1);
        }
      },
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
    loop: false,
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
  let breakpoint = window.matchMedia('(max-width: 1200px)');
  let swiper;

  const breakpointChecker = function() {
    if ( breakpoint.matches === true ) {
      if ( swiper !== undefined ) swiper.destroy( true, true );
        return;
      } else if ( breakpoint.matches === false ) {
        return enableSlider();
      }
  };
  const enableSlider = () => {
    swiper = new Swiper(advantagesContainer, {
      speed: 300,
      navigation: {
        nextEl: '.advantages__btn-next',
        prevEl: '.advantages__btn-prev',
      },
      spaceBetween: 30,
      slidesPerView: 3,
      loop: true,
    });
  }
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
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
