class Dropdown {
  constructor(selector) {
    this.$htmlContainer = $(selector);
    this.$htmlTextArea = this.$htmlContainer.find('.js-dropdown__area');
    this.$htmlInnerTextArea = this.$htmlContainer.find('.js-dropdown__area-text');
    this.$menu = this.$htmlContainer.find('.js-dropdown__label');
    this.currentState = null;
  }

  bindActions() {
    this.$htmlContainer.find('.js-dropdown__area').on('click.dropdown-textarea keypress', this.toggleMenuState.bind(this));
    this.$htmlContainer.find('.js-dropdown__label-item').on('click.dropdown-label', this.chooseMenuItem.bind(this));
    $(document).on('click.closeDropdown', this.closeMenu.bind(this));
  }

  closeMenu(e) {
    const $catchedTarget = $(e.target);

    const checkTarget = () => {
      if (this.$menu.is('.dropdown__label_open') && (this.$htmlContainer.find($catchedTarget).length === 0)) {
        return true;
      }
      return false;
    };

    const canClose = checkTarget();

    if (canClose) {
      this.$menu.toggleClass('dropdown__label_open');
    }
  }

  toggleMenuState() {
    this.$menu.toggleClass('dropdown__label_open');
  }

  chooseMenuItem(event) {
    const targetText = $(event.target).html();
    this.$htmlInnerTextArea.text(targetText);
    this.currentState = targetText;
    this.toggleMenuState();
  }

  getCurrentState() {
    return this.currentState;
  }

  bootstrap() {
    this.bindActions();
  }
}

export default Dropdown;
