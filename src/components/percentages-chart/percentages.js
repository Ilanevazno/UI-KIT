import './percentages.scss'
import $ from 'jquery'

$(document).on('DOMContentLoaded', () => {
  $('.pie-chart').each((idx, itm) => {
    const totalLength = $(itm).find('svg > circle')[0].getTotalLength();
    const targetPerc = Number(($(itm).attr('data-percent')));
    const circlePath = 534;
    const circlePathFull = 157;
    $(itm).css('strokeDashoffset', `${circlePath - getPerc(circlePath, circlePathFull, targetPerc)}px`)
  })
})

const getPerc = (from, to, targetPerc) => {
  const maxValue = from
  const minValue = to;

  return (maxValue - minValue) * (targetPerc / 100)
}
  