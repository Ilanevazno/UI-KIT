import Button from './RippleBtn';

$('.js-ripple-btn__ripple-effect').each((index, html) => {
  const button = new Button(html);
  button.init();
});
