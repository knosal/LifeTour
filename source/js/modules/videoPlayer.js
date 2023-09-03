const root = document.querySelector('.hero__video');
const cover = root.querySelector('picture');
const button = root.querySelector('.video__button');

const FrameSettings = {
  src: 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1',
  title: 'YouTube video player',
  frameborder: 0,
  allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  allowfullscreen: '',
};

const createVideo = () => {
  const video = document.createElement('iframe');

  video.setAttribute('src', FrameSettings.src);
  video.setAttribute('title', FrameSettings.title);
  video.setAttribute('frameborder', FrameSettings.frameborder);
  video.setAttribute('allow', FrameSettings.allow);
  video.setAttribute('allowfullscreen', FrameSettings.allowfullscreen);
  video.classList.add('.hero__videoplayer');
  root.append(video);
};

const initVideoPlayer = () => {
  if (root && cover && button) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      cover.style.display = 'none';
      button.style.display = 'none';
      createVideo();
    });
  }
};

export { initVideoPlayer };
