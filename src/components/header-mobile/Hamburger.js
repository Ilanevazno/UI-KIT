class Hamburger {
  constructor(selector) {
    this.$hamburgerMenu = $(selector).find('.js-hamburger-menu');
    this.$hamburgerBtn = this.$hamburgerMenu.prev('.js-hamburger-button');
  }

  bindActions() {
    $(document).on('click.closeHamburger', this.closeMenu.bind(this));
    this.$hamburgerBtn.on('click.toggleHamburger', this.toggleState.bind(this));
  }

  toggleState() {
    setTimeout(() => {
      this.$hamburgerMenu.toggleClass('header-mobile__menu_opened');
    }, 0);
  }

  closeMenu(event) {
    if (event.target.className !== 'header__links-list') {
      this.$hamburgerMenu.removeClass('header-mobile__menu_opened');
    }
  }

  bootstrap() {
    this.bindActions();
  }
}

export default Hamburger;
