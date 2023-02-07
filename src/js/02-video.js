import Player from '@vimeo/player';

const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = data => {
  const time = data.seconds;
  getCurrentTimeAddLocalStorage(time);
};

/* function getCurrentTimeAddLocalStorage(second) {
  localStorage.setItem('videoplayer-current-time', `${second}`);
  needSecond = localStorage.getItem('videoplayer-current-time');
  console.log(needSecond);
} */

player.on('timeupdate', onPlay);

player
  .setCurrentTime(0.0)
  .then(
    (getCurrentTimeAddLocalStorage = second => {
      localStorage.setItem('videoplayer-current-time', `${second}`);

      return (second = localStorage.getItem('videoplayer-current-time'));
    })
  )
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
