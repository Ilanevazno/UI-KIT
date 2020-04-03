import Button from './RippleBtn';

$('.js-ripple-effect').each((idx, itm) => {
  const button = new Button($(itm));
  button.bootstrap();
});
