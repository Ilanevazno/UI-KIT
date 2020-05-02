class RippleButton {
  constructor(selector) {
    this.$rippleHtmlButton = $(selector);
  }

  bindActions() {
    this.$rippleHtmlButton.on('click.rippleEffect', this.handleRippleEffectClick);
    this.$rippleHtmlButton.on('animationEnd webkitAnimationEnd OAnimationEnd MSAnimationEnd', this.handleRippleEffectAnimationEnd);
  }

  init() {
    this.bindActions();
  }

  handleRippleEffectClick(e) {
    const $this = $(this);
    const $offset = $this.parent().offset();
    const $circle = $this.find('.js-ripple-button__ripple-circle');

    const x = e.pageX - $offset.left;
    const y = e.pageY - $offset.top;

    $circle.css({
      top: `${y}px`,
      left: `${x}px`,
    });

    $this.addClass('ripple-button__ripple-circle_active');
  }

  handleRippleEffectAnimationEnd() {
    $(this).removeClass('ripple-button__ripple-circle_active');
  }
}

export default RippleButton;
