class Video {
  constructor(videoSrc, selector) {
    this.$videoContainer = $(selector);
    this.$videoScreen = this.$videoContainer.find('.video-player__screen');
    this.$videoProgress = this.$videoContainer.find('.video-player__progress');
    this.controls = {
      $buttonPlay: this.$videoContainer.find('.video-player__play'),
      $buttonPause: this.$videoContainer.find('.video-player__pause'),
      $buttonFullScreen: this.$videoContainer.find('.video-player__fullscreen'),
    };
  }

  bootstrap() {
    $.merge(this.controls.$buttonPlay, this.controls.$buttonPause).on('click', this.toggleVideoState.bind(this));
    this.$videoScreen.on('timeupdate', () => { this.runningProgressBar(this.$videoScreen[0].currentTime, this.$videoScreen[0].duration); });
    this.controls.$buttonFullScreen.on('click', this.requestFullScreen.bind(this));
    this.$videoProgress.on('click', this.setVideoState.bind(this));
  }

  init() {
    this.bootstrap();
  }

  toggleVideoState() {
    this.controls.$buttonPlay.toggleClass('video-player__hidden-item');

    if (this.$videoScreen[0].paused) {
      this.$videoScreen[0].play();
    } else {
      this.$videoScreen[0].pause();
    }
  }

  runningProgressBar(currentTime, duration) {
    this.$videoProgress[0].value = 100 * (currentTime / duration);
  }

  setVideoState(event) {
    const w = this.$videoProgress.width();
    const o = event.offsetX;
    const d = this.$videoScreen[0].duration;

    this.$videoProgress[0].value = 100 * (o / w);
    this.$videoScreen[0].pause();
    this.$videoScreen[0].currentTime = d * (o / w);
    this.$videoScreen[0].play();
  }

  requestFullScreen() {
    this.$videoScreen[0].requestFullscreen();
  }
}

const videoObj = {
  src: 'src/assets/video/new-zeland.mp4',
  selector: '.video-player__container',
};

const video = new Video(videoObj.src, videoObj.selector);
video.init();
