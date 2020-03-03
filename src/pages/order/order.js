/* eslint-disable class-methods-use-this */
import Percentages from '../../components/percentages-chart/percentages';

class OrderPage {
  constructor() {
    this.percentageCharts = null;
    this.$fullyState = $('.order__fully-state').find('.pie-chart');
    this.fullyState = 1;
    this.currentState = 'personCount';
  }

  render() {
    this.getPercChart();
    this.prepareObserver();
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

  bindActions() {

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
        this.fullyState += 10;
        this.changeState('nextStep');
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
