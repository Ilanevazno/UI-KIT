import Dropdown from './Dropdown';

$('.js-dropdown').each((index, html) => {
  const dropDown = new Dropdown(html);
  dropDown.init();
});
