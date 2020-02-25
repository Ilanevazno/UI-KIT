
import './toggles.scss'

class Toggle {
    constructor (selector) {
      this.$toggleHtml = $(selector);
    }
  
    bindActions () {
        this.$toggleHtml.on('click', this.toggleState);
    }

    toggleState () {
        if($(this).hasClass('toggles__icon_active')) {
            return $(this).removeClass('toggles__icon_active');
        } else {
            return $(this).addClass('toggles__icon_active');
        }
    }
  
    bootstrap () {
      this.bindActions();
    }
  }
  
  const toggler = new Toggle('.js-toggles-icon');
  toggler.bootstrap();
