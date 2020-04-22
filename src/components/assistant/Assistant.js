class Assistant {
  constructor(selector) {
    this.$htmlContainer = $(selector);
    this.$startIcon = this.$htmlContainer.find('.js-assistant__open-popup-button');
    this.$modalBody = this.$htmlContainer.find('.js-assistant__messenger');
  }

  bindActions() {
    this.$htmlContainer.on('click.assistant', this.handleAssistantClick.bind(this));
    $(document).on('click.document', this.handleDocumentClick.bind(this));
  }

  handleAssistantClick() {
    this.$startIcon.hide();
    this.$modalBody.addClass('assistant__messenger_opened');
  }

  handleDocumentClick(event) {
    if (!this.$htmlContainer.find($(event.target)).length) {
      this.$startIcon.fadeIn();
      this.$modalBody.removeClass('assistant__messenger_opened');
    }
  }

  bootstrap() {
    this.bindActions();
  }
}

export default Assistant;
