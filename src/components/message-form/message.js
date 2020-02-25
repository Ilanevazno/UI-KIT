class MessageForm {
  constructor (selector) {
    this.$htmlContainer = $('.form__user-form#message__form');
    this.$userNameLabel = this.$htmlContainer.find('.message__name'),
    this.$userEmailLabel = this.$htmlContainer.find('.message__email');
  }

  bindActions () {
    this.$htmlContainer.on('submit', this.submitForm.bind(this));
  }

  bootstrap () {
    this.bindActions();
  }

  submitForm (e) {
    e.preventDefault();
    
    const data = [
      {
        label: this.$userNameLabel,
        match: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
        correct: false
      },
      {
        label: this.$userEmailLabel,
        match: /^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i,
        correct: false
      }
    ]


    const checkedData = data.map(item => {
      if (this.testLabel(item.label, item.match)) {
        return {
          label: item.label,
          checked: true
        }
      } else {
        return false;
      }
    });

    const checkResult = (el, idx, arr) => {
      return el.checked;
    }
    
    checkedData.every(checkResult) ? alert('Форма успешно отправлена!') : '' // logs here 
  }

  testLabel (label,regexp) {
    label.siblings('.field-status').removeClass('text-success text-error')
    
    if (regexp.test(label.val())) {
        label.siblings('.field-status').addClass('text-success').text('Thanks!');
        return true;
      } else {
        label.siblings('.field-status').addClass('text-error').text('Error');
        return false;
      }
  }
}

const messageForm = new MessageForm ('.form__user-form#message__form');
messageForm.bootstrap();