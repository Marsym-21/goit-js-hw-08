import Player from '@vimeo/player';

let player = new Player('handstick', {
  id: 'vimeo - player',
  width: 640,
});

player.on('play', onPlay);

const onPlay = function (data) {
  console.log(data);
};
