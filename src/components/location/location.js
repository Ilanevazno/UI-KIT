import './location.scss';

var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [37.787509, -122.444838], 
        zoom: 15,
        controls: ['geolocationControl']
    }, {
        searchControlProvider: 'yandex#search'
        
    });

    //Управление контрольной панелью

    const ControlPlayout = ymaps.templateLayoutFactory.createClass([
        '<div class="control__panel"><p class="control__panel-title">Meet us!</p><p class="control__panel-address">1259  CALIFORNIA ST San Francisco, CA</p></div>',
    ].join(''));

    const ControlPanel = new ymaps.control.Button({
        options: {
            layout: ControlPlayout,
            maxWidth: [170, 190, 220]
        }
    });

    myMap.controls.add(ControlPanel, {
    });

    //Кнопки на контрольной панели

    const ButtonLayout = ymaps.templateLayoutFactory.createClass([
        '<img class="control__panel-btn" src="{{ data.image }}">',
    ].join(''));
    

    const buttonFullScreen = new ymaps.control.Button({
        data: {
            image: 'src/assets/images/location.png'
        },
        options: {
            layout: ButtonLayout,
            maxWidth: [170, 190, 220]
        }
    });

    myMap.controls.add(buttonFullScreen, {
        position: {
            bottom: '42px',
            right: '82px'
        },
        right: 5,
        top: 5
    });

    const BtnGeoLayout = ymaps.templateLayoutFactory.createClass([
        '<img class="control__panel-btn" src="{{ data.image }}">',
    ].join(''));

    const buttonGeo = new ymaps.control.Button({
        data: {
            image: 'src/assets/images/pin.png'
        },
        options: {
            layout: BtnGeoLayout,
            maxWidth: [170, 190, 220]
        }
    })

    myMap.controls.add(buttonGeo, {
        position: {
            bottom: '42px',
            right: '42px'
        },
        right: 50,
        top: 5
    })
    
    // Данный класс нужен для отметки на карте
    const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    //Управление отметкой на карте
    PlaceMark = new ymaps.Placemark([37.787509, -122.444838], {
        baloonContent: 'Местоположение',
        iconContent: '<div class="mark-circle"></div>'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'src/assets/images/mark.png',
        iconImageSize: [30,42],
        iconImageOffset: [-5, -38],
        iconContentOffset: [8, 10],
        iconContentLayout: MyIconContentLayout
    });

    myMap.geoObjects
    .add(PlaceMark)

}

