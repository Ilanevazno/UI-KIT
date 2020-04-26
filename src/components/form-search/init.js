import FormSearch from './FormSearch';

$('.js-form-search').each((idx, itm) => {
  const searchLine = new FormSearch(itm);
  searchLine.init();
});
