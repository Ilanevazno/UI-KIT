import HeaderMobile from './HeaderMobile';

$('.js-header-mobile').each((index, html) => {
  const hamburger = new HeaderMobile(html);
  hamburger.init();
});
