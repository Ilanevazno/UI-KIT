import Slider from './Slider';

const sliderWidth = window.innerWidth > 400 ? 360 : 230;

const orangeSlider = new Slider('.js-first-slider', {
  from: 0,
  to: 100,
  theme: 'theme-orange',
  step: 1,
  scale: [],
  format: '%s',
  width: sliderWidth,
});
orangeSlider.bootstrap();

const mintSlider = new Slider('.js-second-slider', {
  theme: 'theme-mint',
  from: 0,
  to: 100,
  step: 25,
  scale: [0, 25, 50, 75, 100],
  format: '%s',
  showLabels: true,
  snap: true,
  width: sliderWidth,
});
mintSlider.bootstrap();
