import Dropdown from './Dropdown';

$('.js-dropdown').each((idx, itm) => {
  const dropDown = new Dropdown($(itm));
  dropDown.init();
});
