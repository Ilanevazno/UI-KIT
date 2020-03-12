/* eslint-disable class-methods-use-this */
class Dropdown {
  constructor(selector) {
    this.$htmlContainer = $(selector);
    this.$htmlTextArea = this.$htmlContainer.find('.js-dropdown-textarea');
    this.$htmlInnerTextArea = this.$htmlContainer.find('.js-dropdown-text-inner');
    this.currentState = null;
  }

  bindActions() {
    this.$htmlContainer.find('.js-dropdown-textarea').on('click.dopdown-textarea', this.toggleMenuState.bind(this));
    this.$htmlContainer.find('.js-dropdown-label-item').on('click.dropdown-label', this.chooseMenuItem.bind(this));
  }

  toggleMenuState() {
    const $menu = this.$htmlContainer.find('.js-dropdown-menu');
    $menu.toggleClass('widget-select__label_open');
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

$('.js-dropdown-widget').each((idx, itm) => {
  const dropDown = new Dropdown($(itm));
  dropDown.bootstrap();
});

export default Dropdown;
