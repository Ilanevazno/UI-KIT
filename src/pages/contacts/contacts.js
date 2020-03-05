/* eslint-disable class-methods-use-this */
import Location from '../../components/location/location';
import Video from '../../components/video/video';
import MessageForm from '../../components/message-form/message';


class ContactsPage {
  render() {
    this.prepareLocation('js-widget-location', [59.936903, 30.329112]);
    const videoObj = {
      src: 'src/assets/video/new-zeland.mp4',
      selector: '.js-contacts-video',
    };

    this.prepareVideo(videoObj);
    this.prepareMessageForm('.js-message-form-widget');
  }

  prepareLocation(selector, coords) {
    const location = new Location(selector, coords);
    location.bootstrap();
  }

  prepareVideo() {
    const videoPLayer = new Video();
    videoPLayer.bootstrap();
  }

  prepareMessageForm(selector) {
    $(selector).each((idx, itm) => {
      const messageForm = new MessageForm($(itm));
      messageForm.bootstrap();
    });
  }

  bootstrap() {
    this.render();
  }
}

if (window.location.pathname === '/contacts.html') {
  const contacts = new ContactsPage();
  contacts.bootstrap();
}
