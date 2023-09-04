import Swiper from '../vendor/swiper';
import { isMobile } from '../utils/is-mobile';

const initSwiper = (selector, options) => {
  const element = document.querySelector(selector);
  if (element) {
    return new Swiper(selector, {
      allowTouchMove: isMobile(),
      ...options,
    });
  }
  return null;
};

const sliderConfigs = [
  {
    selector: '.hero__slider',
    options: {
      loop: true,
      allowTouchMove: true,
      pagination: {
        el: '.hero__pagination',
        type: 'bullets',
        clickable: true,
      },
    },
  },
  {
    selector: '.gallery__slider',
    options: {
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.gallery__next',
        prevEl: '.gallery__prev',
      },
    },
  },
  {
    selector: '.tours__slider',
    options: {
      breakpoints: {
        0: {
          centeredSlides: true,
          slidesPerView: 'auto',
          spaceBetween: 100,
        },
        768: {
          centeredSlides: false,
          slidesPerView: 2,
          spaceBetween: 18,
        },
        1200: {
          centeredSlides: false,
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      navigation: {
        nextEl: '.tours__next',
        prevEl: '.tours__prev',
      },
    },
  },
  {
    selector: '.reviews__slider',
    options: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      navigation: {
        nextEl: '.reviews__next',
        prevEl: '.reviews__prev',
      },
    },
  },
  {
    selector: '.instructors__slider',
    options: {
      spaceBetween: 30,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
      navigation: {
        nextEl: '.instructors__next',
        prevEl: '.instructors__prev',
      },
    },
  },
];

const initAllSliders = () => {
  sliderConfigs.forEach((config) => {
    initSwiper(config.selector, config.options);
  });
};

export { initAllSliders };
