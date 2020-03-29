class Assistant {
  constructor(selector) {
    this.$htmlContainer = $(selector);
    this.$startIcon = this.$htmlContainer.find('.assistant__start');
    this.$modalBody = this.$htmlContainer.find('.assistant__messenger');
  }

  openMessenger() {
    this.$startIcon.hide();
    this.$modalBody.addClass('assistant__messenger_opened');
  }

  hideMessenger(event) {
    if (!this.$htmlContainer.find($(event.target)).length) {
      this.$startIcon.fadeIn();
      this.$modalBody.removeClass('assistant__messenger_opened');
    }
  }

  bindActions() {
    this.$htmlContainer.on('click.openMessenger', this.openMessenger.bind(this));
    $(document).on('click.hideMessenger', this.hideMessenger.bind(this));
  }

  bootstrap() {
    this.bindActions();
  }
}

export default Assistant;
