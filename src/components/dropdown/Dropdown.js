class Dropdown {
  constructor(selector) {
    this.$htmlContainer = $(selector);
    this.$textArea = this.$htmlContainer.find('.js-dropdown__selected-option-area');
    this.$innerTextArea = this.$htmlContainer.find('.js-dropdown__selected-option-area-text');
    this.$optionsContainer = this.$htmlContainer.find('.js-dropdown__label');
    this.$optionsContainerItem = this.$htmlContainer.find('.js-dropdown__label-item');
    this.currentState = null;
  }

  bindActions() {
    this.$textArea.on('click.optionsArea', this.handleSelectedOptionAreaClick.bind(this));
    this.$optionsContainerItem.on('click.labelItem', this.handleLabelItemClick.bind(this));
    $(document).on('click.dropdown', this.handleDocumentClick.bind(this));
  }

  handleDocumentClick(e) {
    const $caughtTarget = $(e.target);
    const dropdownIsOpen = this.$optionsContainer.is('.dropdown__label_open');
    const containerHasTarget = this.$htmlContainer.find($caughtTarget).length === 0;

    if (dropdownIsOpen && containerHasTarget) {
      this.$optionsContainer.toggleClass('dropdown__label_open');
    }
  }

  handleSelectedOptionAreaClick() {
    this.$optionsContainer.toggleClass('dropdown__label_open');
  }

  handleLabelItemClick(event) {
    const targetText = $(event.target).html();
    this.$innerTextArea.text(targetText);
    this.currentState = targetText;
    this.$optionsContainer.toggleClass('dropdown__label_open');
  }

  getCurrentState() {
    return this.currentState;
  }

  init() {
    this.bindActions();
  }
}

export default Dropdown;
