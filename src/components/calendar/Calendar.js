import 'air-datepicker';

class Calendar {
  constructor(selector) {
    this.selector = selector;
    this.svgIcons = {
      leftAngle: '<?xml version="1.0" encoding="UTF-8"?><svg enable-background="new 0 0 792.082 792.082" version="1.1" viewBox="0 0 792.08 792.08" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m317.9 396.02 304.75-276.47c27.36-27.36 27.36-71.677 0-99.037s-71.677-27.36-99.036 0l-354.5 321.64c-14.783 14.783-21.302 34.538-20.084 53.897-1.218 19.359 5.301 39.114 20.084 53.897l354.53 321.61c27.36 27.36 71.677 27.36 99.037 0s27.36-71.677 0-99.036l-304.78-276.5z"/></svg>',
      rightAngle: '<?xml version="1.0" encoding="UTF-8"?><svg enable-background="new 0 0 492.004 492.004" version="1.1" viewBox="0 0 492 492" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m382.68 226.8-218.95-218.94c-5.064-5.068-11.824-7.86-19.032-7.86s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064l183.86 183.86-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86l219.15-219.14c5.076-5.084 7.864-11.872 7.848-19.088 0.016-7.244-2.772-14.028-7.848-19.108z"/></svg>',
    };
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
      prevHtml: this.svgIcons.leftAngle,
      selectOtherMonths: false,
      nextHtml: this.svgIcons.rightAngle,
      todayButton: new Date(),
      selectOtherYears: false,
      navTitles: {
        days: 'MM',
      },
    });
  }

  bindActions() {
    $(document).on('DOMContentLoaded.document', this.handleDocumentDomContentLoaded.bind(this));
  }

  init() {
    this.render();
    this.bindActions();
  }

  handleDocumentDomContentLoaded() {
    // get current day
    const $selectedDay = this.$htmlContainer.find(('.datepicker--cell-day.-current-'));

    // create current day - month label
    $('<div/>', {
      class: 'datepicker__current-day',
      text: $selectedDay.text(),
    }).prependTo($('.datepicker'));
  }
}

export default Calendar;
