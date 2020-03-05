/* eslint-disable class-methods-use-this */
export default class Assistant {
  constructor(selector) {
    this.$htmlContainer = $(selector);
  }

  openMessenger() {
    this.$htmlContainer.find('.assistant__start').hide();
    this.$htmlContainer.find('.assistant__dialog').addClass('assistant__dialog_open');
  }

  hideMessenger(event) {
    if (!this.$htmlContainer.find($(event.target)).length) {
      this.$htmlContainer.find('.assistant__start').fadeIn();
      this.$htmlContainer.find('.assistant__dialog').removeClass('assistant__dialog_open');
    }
  }

  bindActions() {
    this.$htmlContainer.on('click', this.openMessenger.bind(this));
    $(document).on('click', this.hideMessenger.bind(this));
  }

  bootstrap() {
    this.bindActions();
  }
}

$('.js-assistant-widget').each((idx, itm) => {
  const assistant = new Assistant($(itm));
  assistant.bootstrap();
});
