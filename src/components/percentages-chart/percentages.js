import './percentages.scss'
import $ from 'jquery'

class Percentages {
  constructor (selector) {
    this.$htmlContainer = $(selector);
  }

  getPerc (from, to, targetPerc) {
    const maxValue = from
    const minValue = to;
  
    return (maxValue - minValue) * (targetPerc / 100)
  }

  render () {
    this.$htmlContainer.each((idx, itm) => {
      const totalLength = $(itm).find('svg > circle')[0].getTotalLength();
      const targetPerc = Number(($(itm).attr('data-percent')));
      const circlePath = 534;
      const circlePathFull = 157;
      $(itm).css('strokeDashoffset', `${circlePath - this.getPerc(circlePath, circlePathFull, targetPerc)}px`)
    })
  }

  init () {
    this.render();
  }
}

const percentageCharts = new Percentages('.pie-chart');
percentageCharts.init();
  