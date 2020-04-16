class VideoPlayer {
  constructor(selector) {
    this.$videoContainer = selector;
    this.$videoScreen = this.$videoContainer.find('.js-video-player__screen');
    this.$videoProgress = this.$videoContainer.find('.js-video-player__control-progress');
    this.controls = {
      $play: this.$videoContainer.find('.js-video-player__control-play'),
      $pause: this.$videoContainer.find('.js-video-player__control-pause'),
      $fullScreen: this.$videoContainer.find('.js-video-player__control-fullscreen'),
    };
  }

  bindActions() {
    this.controls.$play.on('click.controlPlay', this.handleControlPlayClick.bind(this));
    this.controls.$pause.on('click.controlPause', this.handleControlPauseClick.bind(this));
    this.controls.$fullScreen.on('click.controlFullscreen', this.handleControlFullscreenClick.bind(this));
    this.$videoScreen.on('timeupdate.screen', this.handleScreenClick.bind(this));
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
      this.controls.$play.hide();
      this.controls.$pause.show();
    } else {
      this.$videoScreen[0].pause();
      this.controls.$play.show();
      this.controls.$pause.hide();
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
    this.controls.$pause.hide();
  }
}

export default VideoPlayer;
