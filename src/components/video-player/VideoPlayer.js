class VideoPlayer {
  constructor(selector) {
    this.$videoContainer = selector;
    this.$videoScreen = this.$videoContainer.find('.js-video-player__screen');
    this.$videoProgress = this.$videoContainer.find('.js-video-player__control-progress');
    this.controls = {
      $buttonPlay: this.$videoContainer.find('.js-video-player__control-play'),
      $buttonPause: this.$videoContainer.find('.js-video-player__control-pause'),
      $buttonFullScreen: this.$videoContainer.find('.js-video-player__control-fullscreen'),
    };
  }

  bindActions() {
    $.merge(this.controls.$buttonPlay, this.controls.$buttonPause).on('click.videoStateToggler', this.toggleVideoState.bind(this));
    this.$videoScreen.on('timeupdate.videoPlayer', () => { this.runningProgressBar(this.$videoScreen[0].currentTime, this.$videoScreen[0].duration); });
    this.controls.$buttonFullScreen.on('click.videoFullScreen', this.requestFullScreen.bind(this));
    this.$videoProgress.on('click.videoProgress', this.setVideoState.bind(this));
  }

  setCurrentTime(time) {
    this.$videoScreen[0].currentTime = time;
  }

  bootstrap() {
    this.bindActions();
    this.controls.$buttonPause.hide();
  }

  toggleVideoState() {
    if (this.$videoScreen[0].paused) {
      this.$videoScreen[0].play();
      this.controls.$buttonPlay.hide();
      this.controls.$buttonPause.show();
    } else {
      this.$videoScreen[0].pause();
      this.controls.$buttonPlay.show();
      this.controls.$buttonPause.hide();
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

export default VideoPlayer;
