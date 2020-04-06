import FormSearch from './FormSearch';

$('.js-search-form-widget').each((idx, itm) => {
  const searchLine = new FormSearch(itm);
  searchLine.bootstrap();
});
