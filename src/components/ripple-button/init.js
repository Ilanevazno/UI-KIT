import RippleButton from './RippleButton';

$('.js-ripple-button').each((index, html) => {
  const button = new RippleButton(html);
  button.init();
});
