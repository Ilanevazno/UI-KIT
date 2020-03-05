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

if (window.location.pathname === '/login.html') {
  const loginPage = new LoginPage();
  loginPage.bootstrap();
}
