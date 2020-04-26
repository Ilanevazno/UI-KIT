class RippleBtn {
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
    const $circle = $this.find('.js-ripple-btn__ripple-circle');

    const x = e.pageX - $offset.left;
    const y = e.pageY - $offset.top;

    $circle.css({
      top: `${y}px`,
      left: `${x}px`,
    });

    $this.addClass('ripple-btn__ripple-circle_active');
  }

  handleRippleEffectAnimationEnd() {
    $(this).removeClass('ripple-btn__ripple-circle_active');
  }
}

export default RippleBtn;
