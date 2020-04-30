import VideoPlayer from './VideoPlayer';

$('.js-video-player').each((index, html) => {
  const video = new VideoPlayer(html);
  video.init();
  video.setCurrentTime(10);
});
