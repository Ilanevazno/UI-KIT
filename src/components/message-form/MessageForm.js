class MessageForm {
  constructor(selector) {
    this.$htmlContainer = $(selector);
    this.$formLabels = this.$htmlContainer.find('.js-message-form__field');
    this.$userNameLabel = this.$formLabels.eq(0);
    this.$userEmailLabel = this.$formLabels.eq(1);
  }

  init() {
    this._bindActions();
  }

  _bindActions() {
    this.$htmlContainer.on('submit.messageForm', this._handleMessageFormSubmit.bind(this));
  }

  _handleMessageFormSubmit(e) {
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
      if (this._testLabel(item.label, item.match)) {
        return {
          label: item.label,
          checked: true,
        };
      }
      return false;
    });

    const checkResult = (el) => el.checked;

    return checkedData.every(checkResult)
      ? this.userAlert('Форма успешно отправлена!')
      : this.userAlert('Ошибка при отправке формы, проверьте поля.');
  }

  _testLabel(label, regexp) {
    const $messageStatus = label.siblings('.js-message-form__field-status');
    $messageStatus.removeClass('message-form__field-status_state_success message-form__field-status_state_error');

    if (regexp.test(label.val())) {
      $messageStatus.addClass('message-form__field-status_state_success').text('Thanks!');
      return true;
    }
    $messageStatus.addClass('message-form__field-status_state_error').text('Error');
    return false;
  }
}

export default MessageForm;
