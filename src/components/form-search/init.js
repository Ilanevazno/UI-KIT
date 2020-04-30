import FormSearch from './FormSearch';

$('.js-form-search').each((index, html) => {
  const searchLine = new FormSearch(html);
  searchLine.init();
});
