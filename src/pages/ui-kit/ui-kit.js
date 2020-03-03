/* eslint-disable class-methods-use-this */
import Search from '../../components/search/search';
import Location from '../../components/location/location';
import Calendar from '../../components/calendar/calendar';

class UiKitPage {
  render() {
    $('.form-search').each((idx, itm) => {
      const searchLine = new Search($(itm));
      searchLine.bootstrap();
    });

    const location = new Location('map', [59.890138, 30.378240]);
    location.bootstrap();

    $('#datepicker').each((idx, itm) => {
      const calendar = new Calendar(itm);
      calendar.bootstrap();
    });
  }

  bindActions() {

  }

  bootstrap() {
    this.render();
    this.bindActions();
  }
}

if (window.location.href.split('/')[window.location.href.split('/').length - 1] === 'ui-kit.html') {
  const uiKitPage = new UiKitPage();
  uiKitPage.bootstrap();
}
