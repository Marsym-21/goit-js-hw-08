import Player from '@vimeo/player';

const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = data => {
  const time = data.seconds;
  console.log(getCurrentTimeAddLocalStorage(time));
};

const getCurrentTimeAddLocalStorage = second => {
  localStorage.setItem('videoplayer-current-time', `${second}`);
  return localStorage.getItem('videoplayer-current-time');
};
player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
