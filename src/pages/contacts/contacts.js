/* eslint-disable class-methods-use-this */
import Location from '../../components/location/location';
import Video from '../../components/video/video';

class ContactsPage {
  render() {
    const location = new Location('map', [59.936903, 30.329112]);
    location.bootstrap();
  }

  bindActions() {

  }

  bootstrap() {
    this.render();
    this.bindActions();
  }
}

if (window.location.href.split('/')[window.location.href.split('/').length - 1] === 'contacts.html') {
  const videoObj = {
    src: 'src/assets/video/new-zeland.mp4',
    selector: '.video-player__container',
  };

  const locationPage = new ContactsPage(videoObj.src, videoObj.selector);
  locationPage.bootstrap();
  const videoPLayer = new Video();
  videoPLayer.bootstrap();
}
