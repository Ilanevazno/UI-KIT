import Search from './Search';

$('.js-seach-form-widget').each((idx, itm) => {
  const searchLine = new Search(itm);
  searchLine.bootstrap();
});
