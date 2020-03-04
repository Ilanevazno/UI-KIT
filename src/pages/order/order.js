/* eslint-disable class-methods-use-this */
import 'air-datepicker';
import Percentages from '../../components/percentages-chart/percentages';
import Calendar from '../../components/calendar/calendar';

class OrderPage {
  constructor() {
    this.percentageCharts = null;
    this.$fullyState = $('.order__fully-state').find('.pie-chart');
    this.fullyState = 1;
    this.currentState = 'personCount';
    this.roomList = [...$('.order__room-picture-item')];
  }

  render() {
    this.getPercChart();
    this.prepareObserver();
    this.prepareRoomPictures();
    this.getCalendar();
  }

  prepareRoomPictures() {
    $(this.roomList[0]).addClass('order__room-picture-item_active');
  }

  nextRoom(event) {
    event.preventDefault();
    const checkPicturesRange = (idx) => {
      return idx >= 0 && idx < this.roomList.length - 1 ? true : false;
    }

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
    }

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
    const childrensCountObserver = $('.js-childrens-count')[0];

    [peopleCountObserver, childrensCountObserver].map((target) => {
      const observer = new MutationObserver(this.selectMutation.bind(this));
      observer.observe(target, config);
    });
  }

  getPercChart() {
    const percentageCharts = new Percentages('.pie-chart');
    percentageCharts.init();
    this.percentageCharts = percentageCharts;
  }

  getCalendar() {
    const calendar = new Calendar('.order__meet-date');
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
        this.changeState('childsCount');
      }

      if (this.checkMutationTarget(mutation.target, '.js-childrens-count') && this.checkTargetState('childsCount')) {
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

if (window.location.href.split('/')[window.location.href.split('/').length - 1] === 'order.html') {
  const orderPage = new OrderPage();
  orderPage.bootstrap();
}
