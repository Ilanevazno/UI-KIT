import './message.scss';

$(document).on("DOMContentLoaded", () => {
  $('.form__user-form#message__form').on('submit', (e) => {
    e.preventDefault();
    const form = e.target,
          userNameLabel = $(form).find('.message__name'),
          userEmailLabel = $(form).find('.message__email');
          
    const data = [
      {
        label: userNameLabel,
        match: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u
      },
      {
        label: userEmailLabel,
        match: /^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i
      }
    ]

    let correctForm = false;
    
    const testLabel = (label,regexp) => {
      label.siblings('.field-status').removeClass('text-success text-error')

      if (regexp.test(label.val())) {
        label.siblings('.field-status').addClass('text-success').text('Thanks!');
        correctForm = true;
      } else {
        label.siblings('.field-status').addClass('text-error').text('Error');
        correctForm = false;
      }
    }

    data.map(item => {
      testLabel(item.label, item.match);
    })

    correctForm ? alert('Форма успешно отправлена!') : false;
  })
})