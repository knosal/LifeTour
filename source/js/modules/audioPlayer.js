const container = document.querySelector('.audio');
const buttonPlay = container.querySelector('[data-name="audio-play"]');

const FrameSettings = {
  src: 'https://music.yandex.ru/iframe/#track/112912322/25474374',
  title: 'YouTube audio player',
  frameborder: 0,
  allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  width: 340,
  height: 220,
  style: 'border:none;width:340px;height:220px;',
  allowfullscreen: '',
};

const hideContent = () => {
  const content = container.querySelector('.audio__wrapper');
  if (content) {
    content.style.display = 'none';
  }
};

const createAudio = () => {
  const audio = document.createElement('iframe');
  Object.entries(FrameSettings).forEach(([key, value]) => {
    audio.setAttribute(key, value);
  });
  container.classList.add('is-active');
  container.append(audio);
};

const initAudioPlayer = () => {
  if (!container || !buttonPlay) {
    return;
  }

  buttonPlay.addEventListener('click', (event) => {
    event.preventDefault();
    hideContent();
    createAudio();
  });
};

export {initAudioPlayer};
