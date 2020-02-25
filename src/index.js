// base
import './assets/fonts/fonts.scss';
import './assets/favicons/favicons.js';


// //pages
import './styles/index.scss';

//components
import './components/buttons/buttons';
import './components/arrows/arrow';
import './components/percentages-chart/percentages';
import './components/donut-chart/donut';
import './components/sliders/slider';
import './components/stages/stages';
import './components/message-form/message';
import './components/toggles/toggles';
import './components/tick-boxes/checkbox';
import './components/search/search';
import './components/profile/profile';
import './components/Events/Events';
import './components/News/News';
import './components/location/location';
import './components/calendar/calendar';
import './components/messaging/messaging';
import './components/video/video';

//media
import './styles/media.scss';

$(document).on('DOMContentLoaded', function() {
    setTimeout(() => {
        $('.js-page-preloader').css('opacity', '0');
    }, 500)
})