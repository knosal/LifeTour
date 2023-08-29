const root = document.querySelector('.hero__audio');
const cover = root.querySelector('picture');
const button = root.querySelector('.audio__play');

const createAudio = () => {
  const audio = document.createElement('iframe');

  audio.setAttribute('src', 'https://music.yandex.ru/iframe/#track/112912322/25474374');
  audio.setAttribute('title', 'Yandex audioplayer');
  audio.setAttribute('frameborder', '0');
  audio.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
  audio.setAttribute('allowfullscreen', '');
  audio.classList.add('.hero__audioplayer');
  root.append(audio);
};

const initAudioPlayer = () => {
  if (root && cover && button) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      cover.style.display = 'none';
      button.style.display = 'none';
      createAudio();
    });
  }
};

export { initAudioPlayer };
