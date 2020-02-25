import './checkbox.scss';

class TickBox {
    constructor (selector) {
      this.$tickBoxHtml = $(selector);
    }
  
    bindActions () {
        this.$tickBoxHtml.on('click', this.toggleBox);
    }

    toggleBox () {
        if($(this).hasClass('tick__checkbox-icon--active')) {
            return $(this).removeClass('tick__checkbox-icon--active');
        } else {
            return $(this).addClass('tick__checkbox-icon--active');
        }
    }
  
    bootstrap () {
      this.bindActions();
    }
  }
  
  const tickBox = new TickBox('.js-checkbox-icon');
  tickBox.bootstrap();
