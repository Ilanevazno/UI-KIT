export default class Search {
  constructor(selector) {
    this.$htmlElement = $(selector);
    this.htmlItemList = {
      $searchItems: this.$htmlElement.find('.form-search__items'),
      $searchBtn: this.$htmlElement.find('.form-search__btn-find'),
      $inputLabel: this.$htmlElement.find('.form-search__str'),
      $errorNotify: this.$htmlElement.find('.form-search__str-status'),
    };
    this.openMM = false;
  }

  bindActions() {
    this.htmlItemList.$inputLabel.on('click', this.prepareLine.bind(this));
    this.htmlItemList.$searchItems.find('li').on('click', this.selectFindedOption.bind(this));
    this.$htmlElement.find('#form-search__str').on('input', this.startSearch.bind(this));
    this.htmlItemList.$searchBtn.on('click', this.pressSearchButton.bind(this));
  }

  prepareLine() {
    this.htmlItemList.$searchItems.toggleClass('hidden');
    this.htmlItemList.$errorNotify.css('opacity', '0');
    this.openMM = true;
  }

  startSearch(e) {
    const val = e.target.value.trim();
    const itemList = this.htmlItemList.$searchItems.find('li');

    this.htmlItemList.$searchItems.removeClass('hidden');

    if (val !== '') {
      itemList.each((idx, elem) => {
        if (elem.innerText.search(val) === -1) {
          $(elem).hide();
        } else {
          $(elem).show();
        }
      });
    } else {
      itemList.each((idx, elem) => {
        $(elem).show();
      });
    }
  }

  pressSearchButton() {
    const itemList = this.htmlItemList.$searchItems.find('li');

    const findingElement = [...itemList].some(
      (element) => element.innerText === this.htmlItemList.$inputLabel.val(),
    );

    this.htmlItemList.$searchBtn.removeClass('form-search__btn-find--valid form-search__btn-find--invalid');

    if (findingElement) {
      this.htmlItemList.$searchBtn.addClass('form-search__btn-find--valid');
      this.htmlItemList.$errorNotify.css('opacity', '0');
    } else {
      this.htmlItemList.$searchBtn.addClass('form-search__btn-find--invalid');
      this.htmlItemList.$errorNotify.css('opacity', '1');
    }
  }

  selectFindedOption(e) {
    this.$htmlElement.find('#form-search__str').val($(e.target).text());
    this.htmlItemList.$searchItems.toggleClass('hidden');
  }

  bootstrap() {
    this.bindActions();
  }
}

$('.js-seach-form-widget').each((idx, itm) => {
  const searchLine = new Search($(itm));
  searchLine.bootstrap();
});
