import Player from '@vimeo/player';

const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = data => {
  const time = data.seconds;
  getVideoplayerCurrentTime(time);
};

function getVideoplayerCurrentTime(second) {
  localStorage.setItem('videoplayer-current-time', `${second}`);

  console.log(localStorage.getItem('videoplayer-current-time'));
}

player.on('timeupdate', onPlay);

player.setCurrentTime(0.0);
