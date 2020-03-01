/* eslint-disable class-methods-use-this */
import Search from '../../components/search/search';

class PageIndex {
  render() {
    const searchLine = new Search('.form-search');
    searchLine.bootstrap();
  }

  bootstrap() {
    this.render();
  }
}

if (window.location.pathname === '/index.html') {
  const indexPage = new PageIndex();
  indexPage.bootstrap();
}
