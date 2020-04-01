import Video from './Video';

$('.video-player__container').each((idx, itm) => {
  const video = new Video($(itm));
  video.bootstrap();
  video.setCurrentTime(10);
});
