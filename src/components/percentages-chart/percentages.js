export default class Percentages {
  constructor(selector) {
    this.$htmlContainer = $(selector);
  }

  // eslint-disable-next-line class-methods-use-this
  getPerc(from, to, targetPerc) {
    const maxValue = from;
    const minValue = to;

    return (maxValue - minValue) * (targetPerc / 100);
  }

  render() {
    this.$htmlContainer.each((idx, itm) => {
      const targetPerc = Number(($(itm).attr('data-percent')));
      const circlePath = 534;
      const circlePathFull = 157;
      $(itm).css('strokeDashoffset', `${circlePath - this.getPerc(circlePath, circlePathFull, targetPerc)}px`);
    });
  }

  bootstrap() {
    this.render();
  }
}
