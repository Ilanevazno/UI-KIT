import Assistant from './Assistant';

$('.js-assistant-widget').each((idx, itm) => {
  const assistant = new Assistant($(itm));
  assistant.bootstrap();
});
