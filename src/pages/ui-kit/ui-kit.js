/* eslint-disable class-methods-use-this */
import Button from '../../components/buttons/buttons';
import Percentages from '../../components/percentages-chart/percentages';
import '../../vendor/canvas2d/canvasjs.min';
import Search from '../../components/search/search';
import Location from '../../components/location/location';
import Calendar from '../../components/calendar/calendar';
import Dropdown from '../../components/dropdown/dropdown';
import MessageForm from '../../components/message-form/message';
import TickBox from '../../components/tick-boxes/checkbox';
import Toggle from '../../components/toggles/toggles';
import Video from '../../components/video/video';

class UiKitPage {
  render() {
    this.prepareButtons('.js-ripple-effect');
    this.preparePercentages('.js-percentages-chartx');
    const donutSettings = [{
      type: 'doughnut',
      innerRadius: 40,
      dataPoints: [
        { y: 25, color: '#E5E5E5' },
        { y: 10, color: '#747474' },
        { y: 25, color: '#E75735' },
        { y: 25, color: '#4EB7A8' },
      ],
    }];
    this.prepareDonutChart('js-ui-kit-donut', donutSettings);
    this.prepareSearchForm('.js-seach-form-widget');
    this.prepareMessageForm('.js-message-form-widget');
    this.prepareToggle('.js-toggles-icon');
    this.prepareTickBoxes('.js-checkbox-icon');
    this.prepareDropDown('.js-dropdown-widget');
    this.prepareLocation('js-widget-location');
    this.prepareCalendar('.js-calendar-widget');

    const videoObj = {
      src: 'src/assets/video/new-zeland.mp4',
      selector: '.js-ui-kit-video',
    };

    this.prepareVideo(videoObj);
  }

  bootstrap() {
    this.render();
  }

  prepareButtons(selector) {
    $(selector).each((idx, itm) => {
      const button = new Button($(itm));
      button.bootstrap();
    });
  }

  preparePercentages(selector) {
    $(selector).each((idx, itm) => {
      const percentage = new Percentages(itm);
      percentage.bootstrap();
    });
  }

  prepareDonutChart(selector, settings) {
    const chart = new CanvasJS.Chart(selector, {
      animationEnabled: true,
      data: settings,
    });
    chart.render();
  }

  prepareMessageForm(selector) {
    $(selector).each((idx, itm) => {
      const messageForm = new MessageForm($(itm));
      messageForm.bootstrap();
    });
  }

  prepareToggle(selector) {
    $(selector).each((idx, itm) => {
      const toggler = new Toggle($(itm));
      toggler.bootstrap();
    });
  }

  prepareTickBoxes(selector) {
    $(selector).each((idx, itm) => {
      const tickBox = new TickBox($(itm));
      tickBox.bootstrap();
    });
  }

  prepareSearchForm(selector) {
    $(selector).each((idx, itm) => {
      const searchLine = new Search($(itm));
      searchLine.bootstrap();
    });
  }

  prepareDropDown(selector) {
    $(selector).each((idx, itm) => {
      const dropdown = new Dropdown($(itm));
      dropdown.bootstrap();
    });
  }

  prepareCalendar(selector) {
    $(selector).each((idx, itm) => {
      const calendar = new Calendar($(itm));
      calendar.bootstrap();
    });
  }

  prepareLocation(selector) {
    const location = new Location(selector, [59.890138, 30.378240]);
    location.bootstrap();
  }

  prepareVideo(videoData) {
    const video = new Video(videoData.src, videoData.selector);
    video.bootstrap();
  }
}

if (window.location.pathname === '/ui-kit.html') {
  const uiKitPage = new UiKitPage();
  uiKitPage.bootstrap();
}
