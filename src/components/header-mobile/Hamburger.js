class Hamburger {
  constructor(selector) {
    this.$hamburgerMenu = $(selector).find('.js-header-mobile__menu');
    this.$hamburgerBtn = this.$hamburgerMenu.prev('.js-header-mobile__button');
  }

  bindActions() {
    $(document).on('click.hamburgerMenu', this.handleDocumentClick.bind(this));
    this.$hamburgerBtn.on('click.hamburgerBtn', this.handleButtonClick.bind(this));
  }

  handleButtonClick() {
    setTimeout(() => {
      this.$hamburgerMenu.toggleClass('header-mobile__menu_opened');
    }, 0);
  }

  handleDocumentClick(event) {
    if (event.target.className !== 'header__links-list') {
      this.$hamburgerMenu.removeClass('header-mobile__menu_opened');
    }
  }

  bootstrap() {
    this.bindActions();
  }
}

export default Hamburger;
