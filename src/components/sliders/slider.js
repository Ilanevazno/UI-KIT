import '../../vendor/jRange/jquery.range-min';
import '../../vendor/jRange/jquery.range.css';

class Slider {
  constructor(selector, settings) {
    this.$htmlContainer = $(selector);
    this.settings = settings;
  }

  render() {
    this.$htmlContainer.jRange(this.settings);
    this.fixRangeOffset();
  }

  fixRangeOffset() {
    // fix pointer label offset bug
    const moveLabels = (target) => {
      $(document).on('mousemove', () => {
        const position = $(target).position().left;
        const offset = $(target).width() / 2;
        $(target).next().css('left', `${position - offset}px`);
      });
    };

    this.$htmlContainer.next().each((idx, itm) => {
      $(itm).find('.pointer').each((index, item) => {
        moveLabels(item);

        $(item).on('mousedown', () => {
          moveLabels(item);
        });
      });
    });
  }

  bootstrap() {
    this.render();
  }
}

const sliderWidth = window.innerWidth > 400 ? 360 : 230;


const orangeSlider = new Slider('.first-slider', {
  from: 0,
  to: 100,
  theme: 'theme-orange',
  step: 1,
  scale: [],
  format: '%s',
  width: sliderWidth,
});
orangeSlider.bootstrap();

const mintSlider = new Slider('.second-slider', {
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
