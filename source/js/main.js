// eslint-disable-next-line no-new

// htmlonelove
import { iosVhFix } from './utils/ios-vh-fix';
import { Form } from './utils/form-validate/form';
import './utils/scroll-lock';

// solutions
import { initButtonMenu } from './modules/menuToggle';
import { initVideoPlayer } from './modules/videoPlayer';
import { initAudioPlayer } from './modules/audioPlayer';
import { initAllSliders } from './modules/initSwiperSlider';
// import { isSlider } from './modules/checkScreenRes';
import { addAdvantagesSlider } from './modules/advantagresSlider';
import { initMap } from './modules/map';
import { createScript } from './modules/pixelperfect/dev';
import './utils/scroll-lock';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();

    createScript();
    initButtonMenu();
    initVideoPlayer();
    initAudioPlayer();
    initAllSliders();
    addAdvantagesSlider();
    initMap();
  });
});
/*
// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
*/