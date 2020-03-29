import Dropdown from './Dropdown';

$('.js-dropdown-widget').each((idx, itm) => {
  const dropDown = new Dropdown($(itm));
  dropDown.bootstrap();
});
