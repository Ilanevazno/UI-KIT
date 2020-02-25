class Stages {
  constructor(selector) {
    this.$htmlContainer = $(selector);
  }

  render() {
    this.$htmlContainer.find('li').eq(2).addClass('is-active');
  }

  bootstrap() {
    this.render();
  }
}

const stages = new Stages('.example-stages');
stages.bootstrap();
