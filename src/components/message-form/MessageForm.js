class MessageForm {
  constructor(selector) {
    this.$htmlContainer = $(selector);
    this.$userNameLabel = this.$htmlContainer.find('.message-form__name');
    this.$userEmailLabel = this.$htmlContainer.find('.message-form__email');
    this.logOn = false;
  }

  bindActions() {
    this.$htmlContainer.on('submit.submitFormWidget', this.submitForm.bind(this));
  }

  bootstrap() {
    this.bindActions();
  }

  submitForm(e) {
    e.preventDefault();

    const data = [
      {
        label: this.$userNameLabel,
        match: new RegExp(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u),
        correct: false,
      },
      {
        label: this.$userEmailLabel,
        match: new RegExp('[^@]+@[^@]+\\.[^@]+'),
        correct: false,
      },
    ];


    const checkedData = data.map((item) => {
      if (this.testLabel(item.label, item.match)) {
        return {
          label: item.label,
          checked: true,
        };
      }
      return false;
    });

    const checkResult = (el) => el.checked;

    return checkedData.every(checkResult) ? this.userAlert('Форма успешно отправлена!') : this.userAlert('Ошибка при отправке формы, проверьте поля.');
  }

  // eslint-disable-next-line class-methods-use-this
  userAlert() {
    // alert for users
  }

  // eslint-disable-next-line class-methods-use-this
  testLabel(label, regexp) {
    label.siblings('.message-form__field-status').removeClass('text-success text-error');

    if (regexp.test(label.val())) {
      label.siblings('.message-form__field-status').addClass('text-success').text('Thanks!');
      return true;
    }
    label.siblings('.message-form__field-status').addClass('text-error').text('Error');
    return false;
  }
}

$('.js-message-form').each((idx, itm) => {
  const messageForm = new MessageForm($(itm));
  messageForm.bootstrap();
});

export default MessageForm;
