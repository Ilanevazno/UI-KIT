class Stages {
  constructor(selector, activeStage) {
    this.$htmlContainer = $(selector);
    this.activeStage = activeStage;
  }

  render() {
    this.$htmlContainer.find('li').eq(this.activeStage).addClass('is-active');
  }

  setStage(stage) {
    this.$htmlContainer.find('li').each((idx, itm) => {
      $(itm).removeClass('is-active');
    });

    this.$htmlContainer.find('li').eq(stage - 1).addClass('is-active');
  }

  bootstrap() {
    this.render();
  }
}

export default Stages;
