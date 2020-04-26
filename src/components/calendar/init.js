import Calendar from './Calendar';

$('.js-calendar').each((idx, itm) => {
  const calendar = new Calendar(itm);
  calendar.init();
});
