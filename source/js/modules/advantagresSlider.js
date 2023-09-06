import Swiper from '../vendor/swiper';
import {isMobile} from '../utils/is-mobile';

let swiper = null;

const createSlider = () => {
  if (document.querySelector('.advantages__slider')) {
    return new Swiper('.advantages__slider', {
      allowTouchMove: isMobile(),
      loop: true,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.advantages__next',
        prevEl: '.advantages__prev',
      },
    });
  }
  return null;
};

const addAdvantagesSlider = () => {
  const isDesktop = () => window.matchMedia('(min-width: 1200px)').matches;

  const initSlider = () => {
    if (isDesktop() && swiper === null) {
      swiper = createSlider();
    } else if (!isDesktop() && swiper !== null) {
      swiper.destroy();
      swiper = null;
    }
  };

  // Вызов функции для инициализации слайдера при загрузке страницы
  initSlider();

  // Добавление обработчика на событие изменения размера окна
  window.addEventListener('resize', initSlider);
};

export {addAdvantagesSlider};
