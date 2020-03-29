import Button from './Button';

$('.js-ripple-effect').each((idx, itm) => {
  const button = new Button($(itm));
  button.bootstrap();
});
