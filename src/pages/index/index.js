/* eslint-disable class-methods-use-this */
import Search from '../../components/search/search';
import Assistant from '../../components/assistant/assistant';
import Button from '../../components/buttons/buttons';

class PageIndex {
  render() {
    this.prepareSearchLine('.js-seach-form-widget');
    this.getAssistant('.js-assistant-widget');
    this.prepareButtons('.js-ripple-effect');
  }

  prepareSearchLine(selector) {
    const searchLine = new Search(selector);
    searchLine.bootstrap();
  }

  getAssistant(selector) {
    const assistant = new Assistant(selector);
    assistant.bootstrap();
  }

  prepareButtons(selector) {
    $(selector).each((idx, itm) => {
      const button = new Button($(itm));
      button.bootstrap();
    });
  }

  bootstrap() {
    this.render();
  }
}

if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
  const indexPage = new PageIndex();
  indexPage.bootstrap();
}
