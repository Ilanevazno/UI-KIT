import Button from './RippleBtn';

$('.js-ripple-btn__ripple-effect').each((idx, itm) => {
  const button = new Button($(itm));
  button.init();
});
