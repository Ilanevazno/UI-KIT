let mainMenu = document.querySelector('#search__str');
let searchItems = document.getElementById('search__items');
let openMM = true;
let searchForm = document.querySelector('.form__search');
let searchBtn = document.querySelector('#search__btn');


mainMenu.addEventListener('click', function() { 
    if(searchItems.classList.contains('hidden')){
        openMM = true;
        searchItems.classList.remove('hidden');
    }
});


$('body').on('click', function() {
    let target = event.target;
    if(target.tagName !== 'INPUT'){
        searchItems.classList.add('hidden');
    }
});

searchItems.onclick = function() {
    let target = event.target;

    if (target.tagName == 'LI') {
     mainMenu.value = target.innerHTML;
        this.remove.target;
         searchItems.classList.add('hidden');
    return
    }
};

document.querySelector('#search__str').oninput = function(){
    let val = this.value.trim();
    let searchItems = document.querySelectorAll('.search__items li');
    if (val != ''){
        searchItems.forEach(function (elem) {
            if(elem.innerText.search(val) == -1){
                elem.classList.add('hide');
            } else {
                elem.classList.remove('hide');
            }
        });
    }
    else {
        searchItems.forEach(function (elem) {
            elem.classList.remove('hide');
        });
    }
}

let optns = Array.from(document.querySelectorAll('.search__items li'))

searchBtn.focusin = function(){
    let validMM = false;

    for(var i = 0; i < optns.length; i++){
     if (mainMenu.value == optns[i].textContent){
         validMM = true;
     } else {
         valudMM = false;
     }
    }

    let searchPlace = document.querySelector('.form__search__str__find')

    if(validMM) {
        searchBtn.classList.remove('invalid');
        searchBtn.classList.add('valid');
        searchBtn.style.backgroundColor = '#4eb7a8';
        searchBtn.style.backgroundImage = "url('src/images/find-btn-sucsc.png')";
        searchBtn.style.backgroundPosition = '50%';
     } else {
        searchBtn.classList.remove('invalid');
        searchBtn.classList.remove('valid');
        searchBtn.classList.add('invalid');

        let formError = document.createElement('div');

            formError.className = 'form__search-error';
            formError.innerHTML = 'I’ve not found what I’m looking for...';

            if (!document.querySelectorAll('.form__search-error').length) {
                searchPlace.appendChild(formError);
                }

            searchBtn.style.backgroundColor = '#e75735';
            searchBtn.style.backgroundImage = "url('src/images/find-btn.png')";

              formError.onclick = function() {
                 searchBtn.classList.add('invalid');
                searchPlace.removeChild(formError);
        }
     }
};



