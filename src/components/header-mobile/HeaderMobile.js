class HeaderMobile {
  constructor(selector) {
    this.$mobileMenu = $(selector).find('.js-header-mobile__hamburger-menu');
    this.$mobileMenuButton = this.$mobileMenu.prev('.js-header-mobile__hamburger-button');
  }

  init() {
    this._bindActions();
  }

  _bindActions() {
    $(document).on('click.mobileMenu', this._handleDocumentClick.bind(this));
    this.$mobileMenuButton.on('click.mobileMenuButton', this._handleHamburgerButtonClick.bind(this));
  }

  _handleHamburgerButtonClick() {
    setTimeout(() => {
      this.$mobileMenu.toggleClass('header-mobile__hamburger-menu_opened');
    }, 0);
  }

  _handleDocumentClick(event) {
    if (event.target.className !== 'header__links-list') {
      this.$mobileMenu.removeClass('header-mobile__hamburger-menu_opened');
    }
  }
}

export default HeaderMobile;
