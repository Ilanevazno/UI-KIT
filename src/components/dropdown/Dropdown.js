class Dropdown {
  constructor(selector) {
    this.$htmlContainer = $(selector);
    this.$textArea = this.$htmlContainer.find('.js-dropdown__selected-option-area');
    this.$innerTextArea = this.$htmlContainer.find('.js-dropdown__selected-option-area-text');
    this.$optionsContainer = this.$htmlContainer.find('.js-dropdown__label');
    this.$optionsContainerItem = this.$htmlContainer.find('.js-dropdown__label-item');
    autoBind(this);
  }

  init() {
    this._bindActions();
  }

  _bindActions() {
    this.$textArea.on('click.optionsArea', this._handleSelectedOptionAreaClick);
    this.$optionsContainerItem.on('click.labelItem', this._handleLabelItemClick);
    $(document).on('click.dropdown', this._handleDocumentClick);
  }

  _handleDocumentClick(e) {
    const $caughtTarget = $(e.target);
    const dropdownIsOpen = this.$optionsContainer.is('.dropdown__label_open');
    const containerHasTarget = this.$htmlContainer.find($caughtTarget).length === 0;

    if (dropdownIsOpen && containerHasTarget) {
      this.$optionsContainer.toggleClass('dropdown__label_open');
    }
  }

  _handleSelectedOptionAreaClick() {
    this.$optionsContainer.toggleClass('dropdown__label_open');
  }

  _handleLabelItemClick(event) {
    const targetText = $(event.target).html();
    this.$innerTextArea.text(targetText);
    this.$optionsContainer.toggleClass('dropdown__label_open');
  }
}

export default Dropdown;
