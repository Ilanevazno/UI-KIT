class Percentages {
  constructor(selector) {
    this.$htmlContainer = $(selector);
  }

  getPerc(from, to, targetPerc) {
    const maxValue = from;
    const minValue = to;

    return (maxValue - minValue) * (targetPerc / 100);
  }

  render() {
    this.$htmlContainer.each((idx, itm) => {
      const $currentItem = $(itm);
      const targetPerc = Number(($currentItem.attr('data-percent')));
      const circlePath = 534;
      const circlePathFull = 157;
      $currentItem.css('strokeDashoffset', `${circlePath - this.getPerc(circlePath, circlePathFull, targetPerc)}px`);
    });
  }

  bootstrap() {
    this.render();
  }
}

export default Percentages;
