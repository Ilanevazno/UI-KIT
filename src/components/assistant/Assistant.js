class Assistant {
  constructor(selector) {
    this.$htmlContainer = $(selector);
    this.$startIcon = this.$htmlContainer.find('.js-assistant__open-popup-button');
    this.$modalBody = this.$htmlContainer.find('.js-assistant__messenger');
    autoBind(this);
  }

  init() {
    this._bindActions();
  }

  _bindActions() {
    this.$htmlContainer.on('click.assistant', this._handleAssistantClick);
    $(document).on('click.document', this._handleDocumentClick);
  }

  _handleAssistantClick() {
    this.$startIcon.hide();
    this.$modalBody.addClass('assistant__messenger_opened');
  }

  _handleDocumentClick(event) {
    if (!this.$htmlContainer.find($(event.target)).length) {
      this.$startIcon.fadeIn();
      this.$modalBody.removeClass('assistant__messenger_opened');
    }
  }
}

export default Assistant;
