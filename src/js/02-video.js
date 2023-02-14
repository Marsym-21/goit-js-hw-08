import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
rebootPage();

const onPlay = data => {
  time = data.seconds;
  console.log(getCurrentTimeAddLocalStorage(time));
};

const getCurrentTimeAddLocalStorage = second => {
  localStorage.setItem('videoplayer-current-time', `${second}`);
  return localStorage.getItem('videoplayer-current-time');
};
player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

function rebootPage() {
  if (!localStorage.getItem('videoplayer-current-time'))
    localStorage.setItem('videoplayer-current-time', 0);
}
