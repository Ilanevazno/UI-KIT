import Assistant from './Assistant';

$('.js-assistant').each((idx, itm) => {
  const assistant = new Assistant(itm);
  assistant.init();
});
