/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable global-require */
import 'leaflet';
import 'leaflet-css';

class Location {
  constructor(mapContainer) {
    this.$htmlContainer = $(mapContainer);
    this.coords = JSON.parse(this.$htmlContainer.attr('data-coords'));
    this.mymap = L.map(mapContainer).setView(this.coords, 13);
    this.mapIcon = require('./img/marker-icon.png');
  }

  bindActions() {
    const $mapContainer = $(this.mymap._container);
    const $showCurrentPosition = $mapContainer.find('.js-overlay-btn-set-address');
    const $findMarker = $mapContainer.find('.js-overlay-btn-find-marker');
    $showCurrentPosition.on('click.setLocationPosition', this.setNewAddress.bind(this));
    $findMarker.on('click.findLocationMarker', this.showCurrentPosition.bind(this));
  }

  showCurrentPosition() {
    this.mymap.panTo(this.coords);
  }

  setNewAddress() {
    const requestLatitude = prompt('Введите долготу');
    const requestLongitude = prompt('Введите ширину');
    if (requestLatitude && requestLongitude) {
      this.mymap.setView([requestLatitude, requestLongitude], 13);
      const placeMark = L.icon({
        iconUrl: this.mapIcon,
        iconSize: [40, 56],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowUrl: '',
        shadowSize: [68, 95],
        shadowAnchor: [22, 94],
      });
      L.marker([requestLatitude, requestLongitude], { icon: placeMark }).addTo(this.mymap);
    }
  }

  render() {
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiaWxhbmV2YXpubzExIiwiYSI6ImNrNndsbGR6ZjBkMWUzaG1vZHp0dWZmNGoifQ.hdk2ziw77v-cKLyCc4ghoA',
    }).addTo(this.mymap);


    const placeMark = L.icon({
      iconUrl: this.mapIcon,
      iconSize: [40, 56],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
      shadowUrl: '',
      shadowSize: [68, 95],
      shadowAnchor: [22, 94],
    });
    L.marker(this.coords, { icon: placeMark }).addTo(this.mymap);
  }

  bootstrap() {
    this.render();
    this.bindActions();
  }
}

export default Location;
