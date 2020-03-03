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

if (window.location.href.split('/')[window.location.href.split('/').length - 1] === 'index.html') {
  const indexPage = new PageIndex();
  indexPage.bootstrap();
}
