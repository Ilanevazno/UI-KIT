import Percentages from './Percentages';

$('.js-percentages-chart').each((idx, itm) => {
  const tickBox = new Percentages($(itm));
  tickBox.bootstrap();
});
