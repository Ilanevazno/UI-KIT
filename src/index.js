import $ from 'jquery';
import './fonts/fonts.scss'
//Подключение глобальных переменных scss
import './blocks/template/Global-variables.scss';
//Подключение основных файлов проекта
import './index.pug';
import './index.scss';

//Лоадер странички
$('body').ready(function(){
    setTimeout(function() {
        let preloader = $('#page-preloader');

        if(!preloader.hasClass('done') ){
            $('.preloader').css({
                'transition': '1s all',
            });
            preloader.addClass('done');
        }
    }, 1000);
})

//Подключение jQuery UI
import './blocks/jQueryUI/jquery-ui.css';
// Подключение ripple кнопок
import './blocks/buttons/buttons.pug';
import './blocks/buttons/buttons.scss';
import './blocks/buttons/buttons.js';
// Подключение arrow кнопок
import './blocks/arrows/arrow.pug';
import './blocks/arrows/arrow.scss';
import './blocks/arrows/arrow.js';
// Подключение percentages чартов
import './blocks/pie-chart/percentages-chart/percentages.pug';
import './blocks/pie-chart/percentages-chart/percentages.scss';
import './blocks/pie-chart/percentages-chart/percentages.js';
// Подключение donut чартов
import './blocks/pie-chart/donut-chart/donut.pug';
import './blocks/pie-chart/donut-chart/donut.scss';
import './blocks/pie-chart/donut-chart/donut.js';
// Подключение слайдера
import './blocks/sliders/tools/slider-ui.js';
import './blocks/sliders/slider.pug';
import './blocks/sliders/slider.scss';
import './blocks/sliders/slider.js';
// Подключение "stages"
import './blocks/stages/stages.pug';
import './blocks/stages/stages.scss';
import './blocks/stages/tools/stages-ui.scss';
import './blocks/stages/tools/stages-ui.js';
import './blocks/stages/stages.js';
// Подключение "Form elements"
import './blocks/message-form/message.pug';
import './blocks/message-form/message.scss';
import './blocks/message-form/message.js';
// Подключение "Toggles"
import './blocks/toggles-form/toggles/toggles.pug';
import './blocks/toggles-form/toggles/toggles.scss';
import './blocks/toggles-form/toggles/toggles.js';
// Подключение "Tick boxes"
import './blocks/toggles-form/tick-boxes/checkbox.pug';
import './blocks/toggles-form/tick-boxes/checkbox.scss';
import './blocks/toggles-form/tick-boxes/checkbox.js';
// Подключение "Search / drop-down"
import './blocks/search/search.pug';
import './blocks/search/search.scss';
import './blocks/search/search.js';
// Подключение "User profile"
import './blocks/User-profile/user-profile.pug';
import './blocks/User-profile/user-profile.scss';
// Подключение "News and events"
    //News
    import './blocks/News-and-events/News/News.pug';
    import './blocks/News-and-events/News/News.scss';
    import './blocks/News-and-events/News/News.js';
    import './blocks/News-and-events/News/jquery/FeedEk.min.js';
    import './blocks/News-and-events/News/jquery/FeedEk.call.js';
    //Events
    import './blocks/News-and-events/Events/Events.pug';
    import './blocks/News-and-events/Events/Events.scss';
    import './blocks/News-and-events/Events/Events.js';
// Подключение "Location"
import './blocks/location/location.pug';
import './blocks/location/location.scss';
import './blocks/location/location.js';
// Подключение "Calendar and messaging"
    //Подключение "calendar"
    import './blocks/Calendar-and-messaging/calendar/calendar.pug';
    import './blocks/Calendar-and-messaging/calendar/calendar.scss';
    import './blocks/Calendar-and-messaging/calendar/calendar.js';
    //Подключение "messaging"
    import './blocks/Calendar-and-messaging/messaging/messaging.pug';
    import './blocks/Calendar-and-messaging/messaging/messaging.scss';
    import './blocks/Calendar-and-messaging/messaging/messaging.js';
// подключение "video"
import './blocks/video/video.pug';
import './blocks/video/video.scss';
import './blocks/video/video.js';