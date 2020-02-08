import './percentages.scss'
import $ from 'jquery'

$(document).on('DOMContentLoaded', () => {
  $('.pie-chart').each((idx, itm) => {
    const totalLength = $(itm).find('svg > circle')[0].getTotalLength();
    const targetPerc = ($(itm).attr('data-percent'));
    $(itm).css('strokeDashoffset', `${totalLength - getPerc(targetPerc)}px`)
  })
})

const getPerc = (targetPerc) => {
  const maxValue = 534
  const minValue = 0

  return maxValue * (targetPerc / 100)
}
  