/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable global-require */
import 'leaflet';
import 'leaflet-css';

class Location {
  constructor(mapContainer) {
    this.$htmlContainer = $(mapContainer);
    this.coords = JSON.parse(this.$htmlContainer.attr('data-coords'));
    this.mapEntity = L.map(mapContainer).setView(this.coords, 13);
    this.$mapContainer = $(this.mapEntity._container);
    this.$currentPositionBtn = this.$mapContainer.find('.js-location__overlay-btn-set-address');
    this.$findMarkerBtn = this.$mapContainer.find('.js-location__overlay-btn-find-marker');
    this.mapIcon = require('./img/marker-icon.png');
  }

  bindActions() {
    this.$currentPositionBtn.on('click.overlayBtnSetAddress', this.handleOverlayBtnSetAddressClick.bind(this));
    this.$findMarkerBtn.on('click.overlayBtnBindMarker', this.handleOverlayBtnBindMarkerClick.bind(this));
  }

  handleOverlayBtnBindMarkerClick() {
    this.mapEntity.panTo(this.coords);
  }

  handleOverlayBtnSetAddressClick() {
    const requestLatitude = prompt('Введите долготу');
    const requestLongitude = prompt('Введите ширину');
    if (requestLatitude && requestLongitude) {
      this.mapEntity.setView([requestLatitude, requestLongitude], 13);
      const placeMark = L.icon({
        iconUrl: this.mapIcon,
        iconSize: [40, 56],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowUrl: '',
        shadowSize: [68, 95],
        shadowAnchor: [22, 94],
      });
      L.marker([requestLatitude, requestLongitude], { icon: placeMark }).addTo(this.mapEntity);
    }
  }

  render() {
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiaWxhbmV2YXpubzExIiwiYSI6ImNrNndsbGR6ZjBkMWUzaG1vZHp0dWZmNGoifQ.hdk2ziw77v-cKLyCc4ghoA',
    }).addTo(this.mapEntity);


    const placeMark = L.icon({
      iconUrl: this.mapIcon,
      iconSize: [40, 56],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
      shadowUrl: '',
      shadowSize: [68, 95],
      shadowAnchor: [22, 94],
    });
    L.marker(this.coords, { icon: placeMark }).addTo(this.mapEntity);
  }

  init() {
    this.render();
    this.bindActions();
  }
}

export default Location;
