class FormSearch {
  constructor(element) {
    this.$htmlElement = $(document).find(element);
    this.errorMessage = 'I’ve not found what I’m looking for...';
    this.htmlItemList = {
      $searchItemList: this.$htmlElement.find('.js-form-search__item-list'),
      $searchListOptions: this.$htmlElement.find('.js-form-search__item-list-option'),
      $searchBtn: this.$htmlElement.find('.js-form-search__search-btn'),
      $inputLabel: this.$htmlElement.find('.js-form-search__input-text-area'),
    };
    this.menuIsOpen = false;
    this.$everyListItem = this.htmlItemList.$searchItemList.find('li');
  }

  bindActions() {
    this.htmlItemList.$inputLabel.on('click.searchLabel', this.handleInputTextAreaClick.bind(this));
    this.htmlItemList.$searchListOptions.on('click.items', this.handleItemListOptionClick.bind(this));
    this.htmlItemList.$inputLabel.on('input.searchInput', this.handleInputTextAreaInput.bind(this));
    this.htmlItemList.$searchBtn.on('click.searchButton', this.handleSearchBtnClick.bind(this));
    $(document).on('click.document', this.handleDocumentClick.bind(this));
  }

  handleInputTextAreaClick() {
    this.prepareLine();
  }

  handleDocumentClick(e) {
    const $caughtTarget = $(e.target);

    const itemListIsShowed = this.htmlItemList.$searchItemList.is('.form-search__item-list_showed');
    const targetNotItemList = this.$htmlElement.find($caughtTarget).length === 0;

    const shouldClose = itemListIsShowed && targetNotItemList;

    if (shouldClose) {
      this.htmlItemList.$searchItemList.removeClass('form-search__item-list_showed');
    }
  }

  prepareLine() {
    this.htmlItemList.$searchItemList.toggleClass('form-search__item-list_showed');
    this.htmlItemList.$searchBtn.removeClass('form-search__search-btn_status_invalid');
    this.htmlItemList.$inputLabel.removeClass('form-search__input-text-area_status_invalid');
    this.htmlItemList.$inputLabel.attr('placeholder', 'Search');
    this.menuIsOpen = true;
  }

  handleInputTextAreaInput(e) {
    const val = e.target.value.trim();
    this.htmlItemList.$searchItemList.removeClass('form-search__item-list_showed');

    if (val !== '') {
      this.$everyListItem.each((index, element) => {
        if (element.innerText.search(val) === -1) {
          $(element).hide();
        } else {
          $(element).show();
        }
      });
    } else {
      this.$everyListItem.each((index, element) => {
        $(element).show();
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
      this.htmlItemList.$inputLabel.addClass('form-search__input-text-area_status_invalid');
      this.htmlItemList.$inputLabel.val('');
      this.htmlItemList.$inputLabel.attr('placeholder', this.errorMessage);
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
