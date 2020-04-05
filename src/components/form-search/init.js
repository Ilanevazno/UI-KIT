import FormSearch from './FormSearch';

$('.js-seach-form-widget').each((idx, itm) => {
  const searchLine = new FormSearch(itm);
  searchLine.bootstrap();
});