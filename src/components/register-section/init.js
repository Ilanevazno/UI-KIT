import RegisterSection from './RegisterSection';

$('.register-section__form').each((idx, itm) => {
  const registerSection = new RegisterSection($(itm));
  registerSection.bootstrap();
});
