class Toggle {
  constructor(selector) {
    this.$toggleHtml = $(selector);
  }

  bindActions() {
    this.$toggleHtml.on('click', this.toggleState);
  }

  // eslint-disable-next-line class-methods-use-this
  toggleState(event) {
    if ($(event.currentTarget).hasClass('toggles__icon_active')) {
      return $(event.currentTarget).removeClass('toggles__icon_active');
    }
    return $(event.currentTarget).addClass('toggles__icon_active');
  }

  bootstrap() {
    this.bindActions();
  }
}

const toggler = new Toggle('.js-toggles-icon');
toggler.bootstrap();
