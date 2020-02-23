import './location.scss';
import 'leaflet';
import 'leaflet-css';

class Location {
    constructor (coords) {
        this.mymap = L.map('map').setView(coords, 13);
        this.coords = coords;
    }

    bootstrap () {
        const $mapContainer = $(this.mymap._container);
        const $showCurrentPosition = $mapContainer.find('.js-overlay-btn-set-address');
        const $findMarker = $mapContainer.find('.js-overlay-btn-find-marker');
        $showCurrentPosition.on('click', this.setNewAddress.bind(this));
        $findMarker.on('click', this.showCurrentPosition.bind(this));

    }

    showCurrentPosition () {
        this.mymap.panTo(this.coords);
    }

    setNewAddress () {
        const requestLatitude = prompt('Введите долготу');
        const requestLongitude = prompt('Введите ширину');
        if (requestLatitude && requestLongitude) {
            this.mymap.setView([requestLatitude, requestLongitude],13);
            const placeMark = L.icon({
                iconUrl: 'src/assets/images/marker-icon.png',
                iconSize: [40, 56],
                iconAnchor: [22, 94],
                popupAnchor: [-3, -76],
                shadowUrl: '',
                shadowSize: [68, 95],
                shadowAnchor: [22, 94]
            });
            L.marker([requestLatitude, requestLongitude], {icon: placeMark}).addTo(this.mymap);
        } else {
            alert('Некорректные значения');
            return
        }
    }

    render () {
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoiaWxhbmV2YXpubzExIiwiYSI6ImNrNndsbGR6ZjBkMWUzaG1vZHp0dWZmNGoifQ.hdk2ziw77v-cKLyCc4ghoA'
        }).addTo(this.mymap);
        
        
        var placeMark = L.icon({
            iconUrl: 'src/assets/images/marker-icon.png',
            iconSize: [40, 56],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76],
            shadowUrl: '',
            shadowSize: [68, 95],
            shadowAnchor: [22, 94]
        });
        L.marker([37.791362, -122.414720], {icon: placeMark}).addTo(this.mymap);
    }

    init () {
        this.render();
        this.bootstrap();
    }
}

const widgetLocation = new Location([37.787509, -122.444838]);
widgetLocation.init();