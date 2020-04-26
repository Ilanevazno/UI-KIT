import VideoPlayer from './VideoPlayer';

$('.js-video-player').each((idx, itm) => {
  const video = new VideoPlayer($(itm));
  video.init();
  video.setCurrentTime(10);
});
