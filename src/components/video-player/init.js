import VideoPlayer from './VideoPlayer';

$('.video-player__container').each((idx, itm) => {
  const video = new VideoPlayer($(itm));
  video.bootstrap();
  video.setCurrentTime(10);
});