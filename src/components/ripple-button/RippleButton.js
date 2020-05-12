class RippleButton {
  constructor(selector) {
    this.$rippleHtmlButton = $(selector);
    autoBind(this);
  }

  init() {
    this._bindActions();
  }

  _handleRippleEffectClick(e) {
    const rippleOffset = this.$rippleHtmlButton.offset();
    const $rippleCircle = this.$rippleHtmlButton.find('.js-ripple-button__ripple-circle');

    const axisX = e.pageX - rippleOffset.left;
    const axisY = e.pageY - rippleOffset.top;

    $rippleCircle.css({
      top: `${axisY}px`,
      left: `${axisX}px`,
    });

    this.$rippleHtmlButton.addClass('ripple-button__ripple-circle_active');
  }

  _handleRippleEffectAnimationEnd() {
    this.$rippleHtmlButton.removeClass('ripple-button__ripple-circle_active');
  }

  _bindActions() {
    this.$rippleHtmlButton.on('click.rippleEffect', this._handleRippleEffectClick);
    this.$rippleHtmlButton.on('animationEnd webkitAnimationEnd OAnimationEnd MSAnimationEnd', this._handleRippleEffectAnimationEnd);
  }
}

export default RippleButton;
