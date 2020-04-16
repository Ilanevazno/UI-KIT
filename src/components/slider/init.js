import Slider from './Slider';

$('.js-slider').each((idx, element) => {
  const slider = new Slider($(element));
  slider.bootstrap();
});
