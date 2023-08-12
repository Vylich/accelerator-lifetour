const playButton = document.querySelector('.player__play-button');
const audioPlayer = document.querySelector('.player');

const attachAudioPlayer = () => {
  if (playButton && audioPlayer) {
    playButton.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.src = 'https://music.yandex.ru/iframe/#track/112912322/25474374';
      iframe.style.position = 'absolute';
      iframe.style.top = '0';
      iframe.style.left = '0';
      iframe.style.zIndex = '4';
      iframe.style.border = '0';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      audioPlayer.appendChild(iframe);
    });

  }
};

export {attachAudioPlayer};
