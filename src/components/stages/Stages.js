class Stages {
  constructor(selector, activeStage) {
    this.$htmlContainer = $(selector);
    this.$stagesItems = this.$htmlContainer.find('.widget-stages').find('ul').find('li');
    this.activeStage = activeStage || 1;
  }

  clearStages() {
    this.$stagesItems.each((index, html) => {
      $(html).removeClass('is-active');
    });
  }

  setStage(current) {
    $(this.$stagesItems).eq(current).addClass('is-active');
  }
}

export default Stages;
