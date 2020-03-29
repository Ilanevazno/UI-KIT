import MessageForm from './MessageForm';

$('.js-message-form').each((idx, itm) => {
  const messageForm = new MessageForm($(itm));
  messageForm.bootstrap();
});
