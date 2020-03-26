/* eslint-disable class-methods-use-this */
import 'air-datepicker';
import Slider from '../slider/Slider';
import Percentages from '../percentages-chart/Percentages';

const state = require('./order-pool.json');

class OrderPage {
  constructor() {
    this.percentageCharts = null;
    this.$fullyState = $('.order__fully-state').find('.pie-chart');
    this.fullyState = 1;
    this.currentState = state.orderState.START;
    this.roomList = [...$('.order__room-picture-item')];
  }

  render() {
    this.prepareObserver();
    this.prepareSlider('.js-budget-slider', 'theme-mint');
    this.prepareRoomPictures();
    this.getPercChart('.js-percentages-chart');
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

  prepareRoomPictures() {
    $(this.roomList[0]).addClass('order__room-picture-item_active');
  }

  nextRoom(event) {
    event.preventDefault();
    const checkPicturesRange = (idx) => (idx >= 0 && idx < this.roomList.length - 1) || false;

    for (let i = 0; i < this.roomList.length; i += 1) {
      if ($(this.roomList[i]).is('.order__room-picture-item_active') && checkPicturesRange(i)) {
        $(this.roomList[i]).removeClass('order__room-picture-item_active');
        $(this.roomList[i + 1]).addClass('order__room-picture-item_active');
        break;
      }
    }
  }

  prevRoom(event) {
    event.preventDefault();
    const checkPicturesRange = (idx) => (idx > 0 && idx <= this.roomList.length - 1) || false;

    for (let i = 0; i < this.roomList.length; i += 1) {
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

    const targetArr = [];

    [peopleCountObserver, budgetObserver].map((item) => {
      if (typeof (item) !== 'undefined') {
        targetArr.push(item);
      }
      return item;
    });

    if (targetArr.length > 0) {
      [...targetArr].map((target) => {
        // eslint-disable-next-line no-undef
        const observer = new MutationObserver(this.selectMutation.bind(this));
        observer.observe(target, config);
        return target;
      });
    }
  }

  bindActions() {
    $('.js-next-room').on('click.nextOrderRoom', this.nextRoom.bind(this));
    $('.js-prev-room').on('click.prevOrderRoom', this.prevRoom.bind(this));
    $('.js-order-picture-continue').on('click.continueOrder', this.moveToOrder.bind(this));
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
      return mutation;
    });
  }

  changeState(nextState) {
    this.currentState = nextState;
    this.changeFully(this.fullyState);
  }

  // eslint-disable-next-line no-shadow
  changeFully(state) {
    if (this.fullyState > 100) {
      this.fullyState = 100;
    }

    this.$fullyState.attr('data-percent', state);
    this.$fullyState.find('figcaption').html(state);
    this.percentageCharts.render();
  }

  getPercChart(selector) {
    const percentageCharts = new Percentages(selector);
    percentageCharts.bootstrap();
    this.percentageCharts = percentageCharts;
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

const orderPage = new OrderPage();
orderPage.bootstrap();

export default OrderPage;
