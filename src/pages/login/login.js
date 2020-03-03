/* eslint-disable class-methods-use-this */
class LoginPage {
  constructor() {
    this.requiredLabels = null;
  }

  render() {

  }

  bindActions() {

  }

  bootstrap() {
    this.render();
    this.bindActions();
  }
}

if (window.location.href.split('/')[window.location.href.split('/').length - 1] === 'login.html') {
  const loginPage = new LoginPage();
  loginPage.bootstrap();
}
