import 'air-datepicker';

class Calendar {
  constructor(selector) {
    this.selector = selector;
    this.htmlObjects = {
      angleLeft: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="792.082px" height="792.082px" viewBox="0 0 792.082 792.082" style="enable-background:new 0 0 792.082 792.082;" xml:space="preserve"><g><g id="_x37__34_"><g><path d="M317.896,396.024l304.749-276.467c27.36-27.36,27.36-71.677,0-99.037s-71.677-27.36-99.036,0L169.11,342.161c-14.783,14.783-21.302,34.538-20.084,53.897c-1.218,19.359,5.301,39.114,20.084,53.897l354.531,321.606c27.36,27.36,71.677,27.36,99.037,0s27.36-71.677,0-99.036L317.896,396.024z"/></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
      angleRight: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve"><g><g><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
    };
    this.$htmlContainer = undefined;
  }

  render() {
    this.$htmlContainer = $(this.selector).datepicker({
      inline: true,
      language: {
        days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        daysShort: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        daysMin: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthsShort: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        today: 'Today',
        dateFormat: 'dd.mm.yyyy',
        timeFormat: 'hh:ii',
        firstDay: 0,
      },
      prevHtml: this.htmlObjects.angleLeft,
      selectOtherMonths: false,
      nextHtml: this.htmlObjects.angleRight,
      todayButton: new Date(),
      selectOtherYears: false,
      navTitles: {
        days: 'MM',
      },
    });
  }

  bindActions() {
    $(document).on('DOMContentLoaded', this.prepareCalendar.bind(this));
  }

  bootstrap() {
    this.render();
    this.bindActions();
  }

  prepareCalendar() {
    // get current day
    const $selectedDay = this.$htmlContainer.find(('.datepicker--cell-day.-current-'));

    // create current day - month label
    $('<div/>', {
      class: 'datepicker__current-day',
    })
      .prependTo($('.datepicker'))
      .text($selectedDay.text());
  }
}

export default Calendar;
