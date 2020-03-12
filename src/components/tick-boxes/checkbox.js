class TickBox {
  constructor(selector) {
    this.$tickBoxHtml = $(selector);
  }

  bindActions() {
    this.$tickBoxHtml.on('click.toggleCheckBox', this.toggleBox);
  }

  // eslint-disable-next-line class-methods-use-this
  toggleBox(event) {
    if ($(event.currentTarget).hasClass('tick__checkbox-icon--active')) {
      return $(event.currentTarget).removeClass('tick__checkbox-icon--active');
    }
    return $(event.currentTarget).addClass('tick__checkbox-icon--active');
  }

  bootstrap() {
    this.bindActions();
  }
}

$('.js-checkbox-icon').each((idx, itm) => {
  const tickBox = new TickBox($(itm));
  tickBox.bootstrap();
});

export default TickBox;
