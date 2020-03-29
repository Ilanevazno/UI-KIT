import Calendar from './Calendar';

$('.js-calendar-widget').each((idx, itm) => {
  const calendar = new Calendar($(itm));
  calendar.bootstrap();
});
