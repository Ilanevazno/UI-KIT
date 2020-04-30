import '../../vendor/jRange/jRange-min';
import '../../vendor/jRange/jRange.css';

class Slider {
  constructor(selector) {
    this.$htmlContainer = $(selector);
    this.settings = {
      from: JSON.parse(this.$htmlContainer.attr('data-min')),
      to: JSON.parse(this.$htmlContainer.attr('data-max')),
      theme: this.$htmlContainer.attr('data-theme'),
      step: JSON.parse(this.$htmlContainer.attr('data-step')),
      scale: JSON.parse(this.$htmlContainer.attr('data-scale')),
      format: this.$htmlContainer.attr('data-format'),
      width: JSON.parse(this.$htmlContainer.attr('data-width')),
      snap: true,
    };
    this.maxWidth = 360;
    this.minWidth = 260;
  }

  render() {
    this.$htmlContainer.jRange(this.settings);
    this.fixRangeOffset();
  }

  bindActions() {
    $(window).on('resize.window', this.handleWindowResize.bind(this));
  }

  handleWindowResize() {
    const innerContainer = this.$htmlContainer.next('.slider-container');
    if (window.innerWidth < this.maxWidth + 50) {
      this.$htmlContainer.css('width', `${this.minWidth}px`);
      innerContainer.css('width', `${this.minWidth}px`);
    } else {
      this.$htmlContainer.css('width', `${this.maxWidth}px`);
      innerContainer.css('width', `${this.maxWidth}px`);
    }
  }

  fixRangeOffset() {
    const moveLabels = (target) => {
      $(document).on('mousemove.slider', () => {
        const position = $(target).position().left;
        const offset = $(target).width() / 2;
        $(target).next().css('left', `${position - offset}px`);
      });
    };

    this.$htmlContainer.next().each((idx, html) => {
      $(html).find('.pointer').each((index, item) => {
        moveLabels(item);

        $(item).on('mousedown', () => {
          moveLabels(item);
        });
      });
    });
  }

  init() {
    this.render();
    this.bindActions();
  }
}

export default Slider;
