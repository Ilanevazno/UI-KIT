import Stages from '../../components/stages/stages';

/* eslint-disable class-methods-use-this */
class RegisterPage {
  constructor() {
    this.requiredLabels = null;
    // this.stages = new Stages('.register-stage', 0);
  }

  render() {
    this.getControls('.registration__form-control');
    this.work(0);
  }

  getControls($selector) {
    this.requiredLabels = $($selector);
  }

  work(numberOfLabel) {
    const $label = $(this.requiredLabels).eq(numberOfLabel);
    $label.addClass('registration__form-control_active');
    $label.find('button').on('click', this.nextStep.bind(this));
    this.setStages(numberOfLabel);
  }

  setStages(numberOfLabel) {
    const stages = new Stages($('.register-stage').eq(numberOfLabel), numberOfLabel);
    stages.bootstrap();
  }

  nextStep(event) {
    event.preventDefault();
    for (let i = 0; i < this.requiredLabels.length; i++) {
      if ($(this.requiredLabels[i]).hasClass('registration__form-control_active')) {
        $(this.requiredLabels[i]).removeClass('registration__form-control_active');
        this.work(i + 1);
        break;
      }
    }
  }

  bindActions() {

  }

  bootstrap() {
    this.render();
    this.bindActions();
  }
}

if (window.location.href.split('/')[window.location.href.split('/').length - 1] === 'register.html') {
  const registerPage = new RegisterPage();
  registerPage.bootstrap();
}
