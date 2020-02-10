
import './toggles.scss'

$(document).ready(function () {
    $(function () {
        return $('.toggles__icon').on('click', function() {
            if($(this).hasClass('toggles__icon--active')) {
                return $(this).removeClass('toggles__icon--active');
            } else {
                return $(this).addClass('toggles__icon--active');
            }
        });
    });
})