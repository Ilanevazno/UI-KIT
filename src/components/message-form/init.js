import MessageForm from './MessageForm';

$('.js-message-form').each((index, html) => {
  const messageForm = new MessageForm(html);
  messageForm.init();
});
