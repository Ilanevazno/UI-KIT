/* eslint-disable class-methods-use-this */
import 'air-datepicker';
import Percentages from '../../components/percentages-chart/percentages';
import Calendar from '../../components/calendar/calendar';
import Slider from '../../components/sliders/slider';
import Dropdown from '../../components/dropdown/dropdown';
import Toggle from '../../components/toggles/toggles';
import TickBox from '../../components/tick-boxes/checkbox';

const state = require('./order.json');

class OrderPage {
  constructor() {
    this.percentageCharts = null;
    this.$fullyState = $('.order__fully-state').find('.pie-chart');
    this.fullyState = 1;
    this.currentState = state.orderState.START;
    this.roomList = [...$('.order__room-picture-item')];
  }

  render() {
    this.prepareDropDown('.js-dropdown-widget');
    this.getPercChart('.js-percentages-chart');
    this.prepareToggle('.js-toggles-icon');
    this.prepareTickBoxes('.js-checkbox-icon');
    this.prepareObserver();
    this.prepareSlider('.js-budget-slider', 'theme-mint');
    this.prepareRoomPictures();
    this.getCalendar('.js-calendar-widget');
  }

  prepareDropDown(selector) {
    $(selector).each((idx, itm) => {
      const dropdown = new Dropdown($(itm));
      dropdown.bootstrap();
    });
  }

  prepareSlider(selector, sliderTheme) {
    const orangeSlider = new Slider(selector, {
      from: 0,
      to: 100,
      theme: sliderTheme,
      step: 1,
      scale: [],
      format: '%s',
      width: 290,
      onstatechange: () => {
        $('.js-budget-count').text(`${Number(orangeSlider.$htmlContainer[0].value * 1000)} Руб.`);
      },
    });
    orangeSlider.bootstrap();
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

  prepareRoomPictures() {
    $(this.roomList[0]).addClass('order__room-picture-item_active');
  }

  nextRoom(event) {
    event.preventDefault();
    const checkPicturesRange = (idx) => {
      return idx >= 0 && idx < this.roomList.length - 1 ? true : false;
    };

    for (let i = 0; i < this.roomList.length; i++) {
      if ($(this.roomList[i]).is('.order__room-picture-item_active') && checkPicturesRange(i)) {
        $(this.roomList[i]).removeClass('order__room-picture-item_active');
        $(this.roomList[i + 1]).addClass('order__room-picture-item_active');
        break;
      }
    }
  }

  prevRoom(event) {
    event.preventDefault();
    const checkPicturesRange = (idx) => {
      return idx > 0 && idx <= this.roomList.length - 1 ? true : false;
    };

    for (let i = 0; i < this.roomList.length; i++) {
      if ($(this.roomList[i]).is('.order__room-picture-item_active') && checkPicturesRange(i)) {
        $(this.roomList[i]).removeClass('order__room-picture-item_active');
        $(this.roomList[i - 1]).addClass('order__room-picture-item_active');
        break;
      }
    }
  }

  prepareObserver() {
    const config = {
      attributes: true,
      childList: true,
      subtree: true,
    };

    const peopleCountObserver = $('.js-people-count')[0];
    const budgetObserver = $('.js-budget-count')[0];

    [peopleCountObserver, budgetObserver].map((target) => {
      const observer = new MutationObserver(this.selectMutation.bind(this));
      observer.observe(target, config);
    });
  }

  getPercChart(selector) {
    const percentageCharts = new Percentages(selector);
    percentageCharts.bootstrap();
    this.percentageCharts = percentageCharts;
  }

  getCalendar(selector) {
    const calendar = new Calendar(selector);
    calendar.bootstrap();
  }

  bindActions() {
    $('.js-next-room').on('click', this.nextRoom.bind(this));
    $('.js-prev-room').on('click', this.prevRoom.bind(this));
    $('.js-order-picture-continue').on('click', this.moveToOrder.bind(this));
  }

  moveToOrder(event) {
    event.preventDefault();
    if (this.checkTargetState('selectRoom')) {
      $('.order__checkout').addClass('order__checkout_open');
      this.fullyState += 70;
      this.changeState('getPersonData');
    }
  }

  checkMutationTarget(label, targetClass) {
    return $(label).is(targetClass);
  }

  checkTargetState(current) {
    return this.currentState === current || false;
  }

  selectMutation(mutationsList) {
    mutationsList.map((mutation) => {
      if (this.checkMutationTarget(mutation.target, '.js-people-count') && this.checkTargetState('personCount')) {
        this.fullyState += 10;
        this.changeState('budget');
      }

      if (this.checkMutationTarget(mutation.target, '.js-budget-count') && this.checkTargetState('budget')) {
        this.fullyState += 5;
        this.changeState('selectRoom');
      }
    });
  }

  changeState(nextState) {
    this.currentState = nextState;
    this.changeFully(this.fullyState);
  }

  changeFully(state) {
    if (this.fullyState > 100) {
      this.fullyState = 100;
    }

    this.$fullyState.attr('data-percent', state);
    this.$fullyState.find('figcaption').html(state);
    this.percentageCharts.render();
  }

  bootstrap() {
    this.render();
    this.bindActions();
  }
}

if (window.location.pathname === '/order.html') {
  const orderPage = new OrderPage();
  orderPage.bootstrap();
}
