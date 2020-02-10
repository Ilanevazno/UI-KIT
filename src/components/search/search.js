import './search.scss';

$(document).on('DOMContentLoaded', () => {
    const connectSearch = (selector) => {
        const mainMenu = $(selector);
        const searchItems = mainMenu.find('.form-search__items');
        const searchBtn = mainMenu.find('.form-search__btn-find');
        const inputLabel = mainMenu.find('.form-search__str');
        const errorNotify = mainMenu.find('.form-search__str-status');
        let openMM = true;

        inputLabel.on('click', () => {
            searchItems.toggleClass('hidden');
            errorNotify.css('opacity', '0');
            openMM = true;
        })

        searchItems.find('li').on('click', (e) => {
            mainMenu.find('#form-search__str').val($(e.target).text())
            searchItems.toggleClass('hidden');
        })

        mainMenu.find('#form-search__str').on('input', (e) => {
            let val = e.target.value.trim();
            const itemList = searchItems.find('li');

            searchItems.removeClass('hidden');

            if (val != ''){
                itemList.each((idx, elem) => {
                    if(elem.innerText.search(val) == -1){
                        $(elem).hide();
                    } else {
                        $(elem).show();
                    }
                })
            }
            else {
                itemList.each((idx, elem) => {
                    $(elem).show();
                })
            }
        })

        searchBtn.on('click', () => {
            let validLabel = false;
            const itemList = searchItems.find('li');

            for (let i = 0; i < itemList.length; i++) {
                if (inputLabel.val() === itemList[i].innerText) {
                    validLabel = true;
                    break
                } else {
                    validLabel = false;
                }
            }

            searchBtn.removeClass('form-search__btn-find--valid form-search__btn-find--invalid');

            if (validLabel) {
                searchBtn.addClass('form-search__btn-find--valid');
                errorNotify.css('opacity', '0');
            } else {
                searchBtn.addClass('form-search__btn-find--invalid');
                errorNotify.css('opacity', '1');
            }
        })
    }

    connectSearch('.example-search');
})

