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
    this.controls.$buttonPlay.on('click.controlPlay', this.handleControlPlayClick.bind(this));
    this.controls.$buttonPause.on('click.controlPause', this.handleControlPauseClick.bind(this));
    this.$videoScreen.on('timeupdate.screen', this.handleScreenClick.bind(this));
    this.controls.$buttonFullScreen.on('click.controlFullscreen', this.handleControlFullscreenClick.bind(this));
    this.$videoProgress.on('click.controlProgress', this.handleControlProgressClick.bind(this));
  }

  handleControlPlayClick() {
    this.toggleVideoState();
  }

  handleControlPauseClick() {
    this.toggleVideoState();
  }

  handleControlProgressClick(e) {
    this.setVideoState(e);
  }

  handleControlFullscreenClick() {
    this.$videoScreen[0].requestFullscreen();
  }

  handleScreenClick() {
    this.runningProgressBar(this.$videoScreen[0].currentTime, this.$videoScreen[0].duration);
  }

  setCurrentTime(time) {
    this.$videoScreen[0].currentTime = time;
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

  bootstrap() {
    this.bindActions();
    this.controls.$buttonPause.hide();
  }
}

export default VideoPlayer;
