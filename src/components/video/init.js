import Video from './Video';

const connectVideo = (settings = {}) => {
  const {
    src = '',
    selector = '',
  } = settings;

  const video = new Video(src, selector);
  video.bootstrap();
};

connectVideo({
  src: 'src/assets/video/new-zeland.mp4',
  selector: '.js-ui-kit-video',
});

connectVideo({
  src: 'src/assets/video/new-zeland.mp4',
  selector: '.js-contacts-video',
});
