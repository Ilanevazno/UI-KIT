class FormSearch {
  constructor(element) {
    this.$htmlElement = $(document).find(element);
    this.htmlItemList = {
      $searchItems: this.$htmlElement.find('.js-form-search__items'),
      $searchBtn: this.$htmlElement.find('.js-form-search__search-btn'),
      $inputLabel: this.$htmlElement.find('.js-form-search__str'),
      $errorNotify: this.$htmlElement.find('.js-form-search__status'),
    };
    this.openMM = false;
  }

  bindActions() {
    this.htmlItemList.$inputLabel.on('click.searchLabel', this.prepareLine.bind(this));
    this.htmlItemList.$searchItems.find('li').on('click.searchItem', this.selectFindedOption.bind(this));
    this.htmlItemList.$inputLabel.on('input.searchForm', this.startSearch.bind(this));
    this.htmlItemList.$searchBtn.on('click.searchButton', this.pressSearchButton.bind(this));
    this.htmlItemList.$errorNotify.on('click.errorNotify', this.prepareLine.bind(this));
    $(document).on('click.closeSearch', this.closeMenu.bind(this));
  }

  closeMenu(e) {
    const $catchedTarget = $(e.target);

    const checkTarget = () => {
      if (this.htmlItemList.$searchItems.is('.form-search__items_showed') && (this.$htmlElement.find($catchedTarget).length === 0)) {
        return true;
      }
      return false;
    };

    const isCanClose = checkTarget();

    if (isCanClose) {
      this.htmlItemList.$searchItems.removeClass('form-search__items_showed');
    }
  }

  prepareLine() {
    this.htmlItemList.$searchItems.toggleClass('form-search__items_showed');
    this.htmlItemList.$searchBtn.removeClass('form-search__search-btn_status_invalid');
    this.htmlItemList.$errorNotify.hide();
    this.openMM = true;
  }

  startSearch(e) {
    const val = e.target.value.trim();
    const itemList = this.htmlItemList.$searchItems.find('li');
    this.htmlItemList.$searchItems.removeClass('form-search__items_showed');

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

    this.htmlItemList.$searchBtn.removeClass('form-search__search-btn_status_valid form-search__search-btn_status_invalid');

    if (findingElement) {
      this.htmlItemList.$searchBtn.addClass('form-search__search-btn_status_valid');
    } else {
      this.htmlItemList.$searchBtn.addClass('form-search__search-btn_status_invalid');
      this.htmlItemList.$errorNotify.show();
    }
  }

  selectFindedOption(e) {
    this.htmlItemList.$inputLabel.val($(e.target).text());
    this.htmlItemList.$searchItems.removeClass('form-search__items_showed');
  }

  bootstrap() {
    this.bindActions();
  }
}

export default FormSearch;
