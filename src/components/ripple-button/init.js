import Button from './RippleButton';

$('.js-ripple-button').each((index, html) => {
  const button = new Button(html);
  button.init();
});
