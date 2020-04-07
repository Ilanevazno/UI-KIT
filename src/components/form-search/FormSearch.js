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
      if (this.$htmlElement.is('.form-search_open') && (this.$htmlElement.find($catchedTarget).length === 0)) {
        return true;
      }
      return false;
    };

    console.log(!this.$htmlElement.is('.form-search_open'));
    const isCanClose = checkTarget();

    console.log(this.$htmlElement.find($catchedTarget).length === 0);

    if (isCanClose) {
      this.$htmlElement.removeClass('form-search_open');
    }
  }

  prepareLine() {
    this.$htmlElement.toggleClass('form-search_open');
    this.$htmlElement.removeClass('form-search_status_invalid');
    this.openMM = true;
  }

  startSearch(e) {
    const val = e.target.value.trim();
    const itemList = this.htmlItemList.$searchItems.find('li');

    this.$htmlElement.removeClass('form-search_open');

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

    this.$htmlElement.removeClass('form-search_status_valid form-search_status_invalid');

    if (findingElement) {
      this.$htmlElement.addClass('form-search_status_valid');
    } else {
      this.$htmlElement.addClass('form-search_status_invalid');
    }
  }

  selectFindedOption(e) {
    this.htmlItemList.$inputLabel.val($(e.target).text());
    this.$htmlElement.removeClass('form-search_open');
  }

  bootstrap() {
    this.bindActions();
  }
}

export default FormSearch;
