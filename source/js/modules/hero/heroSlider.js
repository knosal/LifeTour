import Swiper from '../../vendor/swiper';

const initSwiperHero = () => {
  // eslint-disable-next-line no-new
  new Swiper('.swiper-hero', {
    loop: true,
    allowTouchMove: true,
    pagination: {
      el: '.hero__pagination',
      type: 'bullets',
      clickable: true,
    },
  });
};

export { initSwiperHero };
