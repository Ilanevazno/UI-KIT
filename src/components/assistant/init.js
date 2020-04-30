import Assistant from './Assistant';

$('.js-assistant').each((index, html) => {
  const assistant = new Assistant(html);
  assistant.init();
});
