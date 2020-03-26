class Search {
  constructor(element) {
    this.$htmlElement = $(document).find(element);
    this.htmlItemList = {
      $searchItems: this.$htmlElement.find('.form-search__items'),
      $searchBtn: this.$htmlElement.find('.form-search__btn-find'),
      $inputLabel: this.$htmlElement.find('.form-search__str'),
      $errorNotify: this.$htmlElement.find('.form-search__str-status'),
    };
    this.openMM = false;
  }

  bindActions() {
    $(document).find(this.htmlItemList.$inputLabel).on('click.searchLabel', this.prepareLine.bind(this));
    $(document).find(this.htmlItemList.$searchItems).find('li').on('click.searchItem', this.selectFindedOption.bind(this));
    $(document).find(this.$htmlElement).find('.form-search__str').on('input.searchForm', this.startSearch.bind(this));
    $(document).find(this.htmlItemList.$searchBtn).on('click.searchButton', this.pressSearchButton.bind(this));
    $(document).find(this.htmlItemList.$errorNotify).on('click.errorNotify', this.prepareLine.bind(this));
  }

  prepareLine() {
    this.htmlItemList.$searchItems.toggleClass('form-search__hidden-item');
    this.htmlItemList.$errorNotify.css('display', 'none');
    this.openMM = true;
  }

  startSearch(e) {
    const val = e.target.value.trim();
    const itemList = this.htmlItemList.$searchItems.find('li');

    this.htmlItemList.$searchItems.removeClass('form-search__hidden-item');

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
      this.htmlItemList.$errorNotify.css('display', 'none');
    } else {
      this.htmlItemList.$searchBtn.addClass('form-search__btn-find--invalid');
      this.htmlItemList.$errorNotify.css('display', 'inline-flex');
    }
  }

  selectFindedOption(e) {
    this.$htmlElement.find('.form-search__str').val($(e.target).text());
    this.htmlItemList.$searchItems.toggleClass('form-search__hidden-item');
  }

  bootstrap() {
    this.bindActions();
  }
}

$('.js-seach-form-widget').each((idx, itm) => {
  const searchLine = new Search(itm);
  searchLine.bootstrap();
});

export default Search;
