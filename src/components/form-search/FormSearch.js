class FormSearch {
  constructor(element) {
    this.$htmlElement = $(document).find(element);
    this.htmlItemList = {
      $searchItemList: this.$htmlElement.find('.js-form-search__item-list'),
      $searchListOptions: this.$htmlElement.find('.js-form-search__item-list-option'),
      $searchBtn: this.$htmlElement.find('.js-form-search__search-btn'),
      $inputLabel: this.$htmlElement.find('.js-form-search__input-text-area'),
      $errorNotify: this.$htmlElement.find('.js-form-search__status'),
    };
    this.openMM = false;
    this.$everyListItem = this.htmlItemList.$searchItemList.find('li');
  }

  bindActions() {
    this.htmlItemList.$inputLabel.on('click.searchLabel', this.handleInputTextAreaClick.bind(this));
    this.htmlItemList.$searchListOptions.on('click.items', this.handleItemListOptionClick.bind(this));
    this.htmlItemList.$inputLabel.on('input.searchInput', this.handleInputTextAreaInput.bind(this));
    this.htmlItemList.$searchBtn.on('click.searchButton', this.handleSearchBtnClick.bind(this));
    this.htmlItemList.$errorNotify.on('click.errorNotify', this.handleStatusClick.bind(this));
    $(document).on('click.document', this.handleDocumentClick.bind(this));
  }

  handleInputTextAreaClick() {
    this.prepareLine();
  }

  handleStatusClick() {
    this.prepareLine();
  }

  handleDocumentClick(e) {
    const $caughtTarget = $(e.target);

    const checkTarget = () => {
      if (this.htmlItemList.$searchItemList.is('.form-search__item-list_showed') && (this.$htmlElement.find($caughtTarget).length === 0)) {
        return true;
      }
      return false;
    };

    const shouldClose = checkTarget();

    if (shouldClose) {
      this.htmlItemList.$searchItemList.removeClass('form-search__item-list_showed');
    }
  }

  prepareLine() {
    this.htmlItemList.$searchItemList.toggleClass('form-search__item-list_showed');
    this.htmlItemList.$searchBtn.removeClass('form-search__search-btn_status_invalid');
    this.htmlItemList.$errorNotify.hide();
    this.openMM = true;
  }

  handleInputTextAreaInput(e) {
    const val = e.target.value.trim();
    this.htmlItemList.$searchItemList.removeClass('form-search__item-list_showed');

    if (val !== '') {
      this.$everyListItem.each((idx, elem) => {
        if (elem.innerText.search(val) === -1) {
          $(elem).hide();
        } else {
          $(elem).show();
        }
      });
    } else {
      this.$everyListItem.each((idx, elem) => {
        $(elem).show();
      });
    }
  }

  handleSearchBtnClick() {
    const findingElement = [...this.$everyListItem].some(
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

  handleItemListOptionClick(e) {
    this.htmlItemList.$inputLabel.val($(e.target).text());
    this.htmlItemList.$searchItemList.removeClass('form-search__item-list_showed');
  }

  init() {
    this.bindActions();
  }
}

export default FormSearch;
