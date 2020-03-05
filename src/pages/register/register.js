import Stages from '../../components/stages/stages';

/* eslint-disable class-methods-use-this */
class RegisterPage {
  constructor() {
    this.requiredLabels = null;
  }

  render() {
    this.getControls('.registration__form-control');
    this.prepareLabel(0);
  }

  getControls($selector) {
    this.requiredLabels = $($selector);
  }

  prepareLabel(numberOfLabel) {
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
        this.prepareLabel(i + 1);
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

if (window.location.pathname === '/register.html') {
  const registerPage = new RegisterPage();
  registerPage.bootstrap();
}
