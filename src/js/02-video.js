import Player from '@vimeo/player';

let player = new Player('handstick', {
  id: 19231868,
  width: 640,
});

player.on('play', onPlay);

const onPlay = function (data) {
  console.log(data);
};
