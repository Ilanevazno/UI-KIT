class Hamburger {
  constructor(selector) {
    this.$mobileMenu = $(selector).find('.js-header-mobile__hamburger-menu');
    this.$mobileMenuButton = this.$mobileMenu.prev('.js-header-mobile__hamburger-button');
  }

  bindActions() {
    $(document).on('click.mobileMenu', this.handleDocumentClick.bind(this));
    this.$mobileMenuButton.on('click.mobileMenuButton', this.handleHamburgerButtonClick.bind(this));
  }

  handleHamburgerButtonClick() {
    setTimeout(() => {
      this.$mobileMenu.toggleClass('header-mobile__menu_opened');
    }, 0);
  }

  handleDocumentClick(event) {
    if (event.target.className !== 'header__links-list') {
      this.$mobileMenu.removeClass('header-mobile__menu_opened');
    }
  }

  bootstrap() {
    this.bindActions();
  }
}

export default Hamburger;
