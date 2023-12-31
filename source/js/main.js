import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './utils/form-validate/form';
import './utils/scroll-lock';
import {initButtonMenu} from './modules/menuToggle';
import {initVideoPlayer, stopVideoOnTabChange} from './modules/videoPlayer';
import {initAudioPlayer, stopAudioOnTabChange} from './modules/audioPlayer';
import {initAllSliders} from './modules/initSwiperSlider';
import {addAdvantagesSlider} from './modules/advantagresSlider';
import {initMap} from './modules/map';
import {createScript} from './modules/pixelperfect/dev';
// ---------------------------------
window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------
  iosVhFix();
  initButtonMenu();
  initVideoPlayer();
  stopVideoOnTabChange();
  initAllSliders();
  // Modules
  // ---------------------------------
  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
    //createScript();
    initAudioPlayer();
    stopAudioOnTabChange();
    addAdvantagesSlider();
    initMap();
  });
});
