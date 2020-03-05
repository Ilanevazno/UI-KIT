export default class Button {
  constructor(selector) {
    this.$rippleHtmlButton = $(selector);
  }

  bindActions() {
    this.$rippleHtmlButton.on('click.ui.ripple', this.startRipple);
    this.$rippleHtmlButton.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', this.finishRipple);
  }

  bootstrap() {
    this.bindActions();
  }

  startRipple(e) {
    const $this = $(this);
    const $offset = $this.parent().offset();
    const $circle = $this.find('.js-ripple-circle');

    const x = e.pageX - $offset.left;
    const y = e.pageY - $offset.top;

    $circle.css({
      top: `${y}px`,
      left: `${x}px`,
    });

    $this.addClass('is-active');
  }

  finishRipple() {
    $(this).removeClass('is-active');
  }
}

$('.js-ripple-effect').each((idx, itm) => {
  const button = new Button($(itm));
  button.bootstrap();
});
