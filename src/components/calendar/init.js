import Calendar from './Calendar';

$('.js-calendar').each((index, html) => {
  const calendar = new Calendar(html);
  calendar.init();
});
