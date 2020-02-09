import './message.scss';

$(document).on("DOMContentLoaded", () => {
  $('.form__user-form#message__form').on('submit', (e) => {
    e.preventDefault();
  })
})