import Slider from './Slider';

$('.js-slider').each((index, html) => {
  const slider = new Slider(html);
  slider.init();
});
