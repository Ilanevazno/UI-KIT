import HeaderMobile from './HeaderMobile';

$('.js-header-mobile').each((idx, itm) => {
  const hamburger = new HeaderMobile(itm);
  hamburger.init();
});
