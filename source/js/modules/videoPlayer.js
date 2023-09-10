const video = document.querySelector('.video__content');
const button = document.querySelector('.video__button');
const slides = document.querySelectorAll('.hero__item');
const pagination = document.querySelector('.hero__pagination');

const videoButtonHandler = () => {
  if (video.paused) {
    video.play();
    button.style.display = 'none';
  } else {
    video.pause();
  }
};

const videoOnclick = () => {
  video.pause();
  button.style.display = 'block';
};

const initVideoPlayer = () => {
  if (video) {
    video.addEventListener('click', videoOnclick);
    button.addEventListener('click', videoButtonHandler);
  }
};

const stopVideoOnTabChange = () => {
  pagination.addEventListener('click', () => {
    slides.forEach((slide) => {
      const isSlideActive = slide.classList.contains('swiper-slide-active');
      const slideVideo = slide.querySelector('.video__content');

      if (slideVideo && isSlideActive) {
      } else {
        videoOnclick();
      }
    });
  });
};

export {initVideoPlayer, stopVideoOnTabChange};
