const container = document.querySelector('.hero__video');
const cover = container.querySelector('picture');
const buttonPlay = container.querySelector('.video__button');

const FrameSettings = {
  src: 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1',
  title: 'YouTube video player',
  frameborder: 0,
  allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  allowfullscreen: '',
};

const hideContent = () => {
  if (container) {
    cover.style.display = 'none';
    buttonPlay.style.display = 'none';
  }
};

const createVideo = () => {
  const video = document.createElement('iframe');

  Object.entries(FrameSettings).forEach(([key, value]) => {
    video.setAttribute(key, value);
  });

  container.append(video);
};

const initVideoPlayer = () => {
  if (!container || !buttonPlay) {
    return;
  }

  buttonPlay.addEventListener('click', (event) => {
    event.preventDefault();
    hideContent();
    createVideo();
  });
};

export { initVideoPlayer };
