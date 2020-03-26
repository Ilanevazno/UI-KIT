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
    const moveLabels = (target) => {
      $(document).on('mousemove.slider', () => {
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

export default Slider;
