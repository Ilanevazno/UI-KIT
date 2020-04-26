import Location from './Location';

$('.js-location').each((idx, itm) => {
  const location = new Location(itm);
  location.init();
});
