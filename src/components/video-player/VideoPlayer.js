class VideoPlayer {
  constructor(selector) {
    this.$videoContainer = $(selector);
    [this.videoScreen] = this.$videoContainer.find('.js-video-player__screen');
    this.$videoProgress = this.$videoContainer.find('.js-video-player__control-progress-icon');
    this.controls = {
      $play: this.$videoContainer.find('.js-video-player__control_type_play'),
      $pause: this.$videoContainer.find('.js-video-player__control_type_pause'),
      $fullScreen: this.$videoContainer.find('.js-video-player__control_type_fullscreen'),
    };
    this.videoStartingTime = Number(this.videoScreen.getAttribute('data-startTime'));
    autoBind(this);
  }

  init() {
    this._bindActions();
    this.controls.$pause.hide();
    this._setCurrentTime(this.videoStartingTime);
  }

  _bindActions() {
    this.controls.$play.on('click.controlPlay', this._handlePlayControlClick);
    this.controls.$pause.on('click.controlPause', this._handlePauseControlClick);
    this.controls.$fullScreen.on('click.controlFullscreen', this._handleFullscreenControlClick);
    this.$videoProgress.on('click.controlProgress', this._handleControlProgressIconClick);
    this.videoScreen.addEventListener('timeupdate', this._handleScreenTimeUpdate);
  }

  _setCurrentTime(time) {
    this.videoScreen.currentTime = time;
  }

  _handlePlayControlClick() {
    this._toggleVideoState();
  }

  _handlePauseControlClick() {
    this._toggleVideoState();
  }

  _handleControlProgressIconClick(e) {
    this._setVideoState(e);
  }

  _handleFullscreenControlClick() {
    this.videoScreen.requestFullscreen();
  }

  _handleScreenTimeUpdate() {
    this._runningProgressBar(this.videoScreen.currentTime, this.videoScreen.duration);
  }

  _toggleVideoState() {
    if (this.videoScreen.paused) {
      this.videoScreen.play();
      this.controls.$play.hide();
      this.controls.$pause.show();
    } else {
      this.videoScreen.pause();
      this.controls.$play.show();
      this.controls.$pause.hide();
    }
  }

  _runningProgressBar(currentTime, duration) {
    this.$videoProgress.val(100 * (currentTime / duration));
  }

  _setVideoState(event) {
    this.controls.$play.hide();
    this.controls.$pause.show();

    const progressIconWidth = this.$videoProgress.width();
    const eventOffset = event.offsetX;
    const videoDuration = this.videoScreen.duration;
    this.$videoProgress.val(100 * (eventOffset / progressIconWidth));

    this.videoScreen.pause();
    this.videoScreen.currentTime = videoDuration * (eventOffset / progressIconWidth);
    this.videoScreen.play();
  }
}

export default VideoPlayer;
