/* eslint-disable no-underscore-dangle */
import '../../vendor/jRange/jRange-min';
import '../../vendor/jRange/jRange.css';

class Slider {
  constructor(selector) {
    this.$htmlContainer = $(selector);
    this.settings = {
      from: this.$htmlContainer.data('min'),
      to: this.$htmlContainer.data('max'),
      theme: this.$htmlContainer.data('theme'),
      step: this.$htmlContainer.data('step'),
      scale: this.$htmlContainer.data('scale'),
      format: this.$htmlContainer.data('format'),
      width: this.$htmlContainer.data('width'),
      snap: true,
    };
    this.maxWidth = 360;
    this.minWidth = 260;
  }

  init() {
    this._render();
    this._bindActions();
  }

  _render() {
    this.$htmlContainer.jRange(this.settings);
    this._setTooltipPosition();
  }

  _bindActions() {
    $(window).on('resize.window', this._handleWindowResize.bind(this));
  }

  _handleWindowResize() {
    const innerContainer = this.$htmlContainer.next('.slider-container');
    if (window.innerWidth < this.maxWidth + 50) {
      this.$htmlContainer.css('width', `${this.minWidth}px`);
      innerContainer.css('width', `${this.minWidth}px`);
    } else {
      this.$htmlContainer.css('width', `${this.maxWidth}px`);
      innerContainer.css('width', `${this.maxWidth}px`);
    }
  }

  _moveTooltip(target) {
    const $targetElement = $(target);
    const $elementTooltip = $targetElement.next();

    $(document).on('mousemove.slider', () => {
      const position = $targetElement.position().left;
      const offset = $targetElement.width() / 2;
      $elementTooltip.css('left', `${position - offset}px`);
    });
  }

  _setTooltipPosition() {
    this.$htmlContainer.next().each((idx, html) => {
      $(html).find('.pointer').each((index, item) => {
        this._moveTooltip(item);

        $(item).on('mousedown.item', () => {
          this._moveTooltip(item);
        });
      });
    });
  }
}

export default Slider;
