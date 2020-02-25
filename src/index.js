function importAll(resolve) {
  resolve.keys().forEach(resolve);
}

importAll(require.context('./', true, /\.js$|\.scss$/));


$(document).on('DOMContentLoaded', () => {
  setTimeout(() => {
    $('.js-page-preloader').css('opacity', '0');
    $('.js-page-preloader').css('display', 'none');
  }, 500);
});
