import Location from './Location';

$('.js-widget-location').each((idx, itm) => {
  const location = new Location(itm);
  location.bootstrap();
});
