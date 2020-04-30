import Location from './Location';

$('.js-location').each((index, html) => {
  const location = new Location(html);
  location.init();
});
