import Stages from '../stages/Stages';

class RegisterSection {
  constructor($htmlContainer) {
    this.$htmlContainer = $htmlContainer;
    this.$inputLabel = $htmlContainer.find('.input-label__item');
    this.stages = new Stages($htmlContainer, 0);
  }

  bindActions() {
    this.$inputLabel.on('blur', this.changeStage.bind(this));
  }

  bootstrap() {
    this.bindActions();
  }

  changeStage(e) {
    if ($(e.target).val() !== '') {
      this.$inputLabel.each((idx, itm) => {
        if (e.target === itm) {
          this.stages.clearStages();
          this.stages.setStage(idx);
        }
      });
    }
  }
}

export default RegisterSection;
