import './checkbox.scss';

$(document).ready(function () {
    $(function () {
        return $('.tick__checkbox-icon').on('click', function() {
            if($(this).hasClass('tick__checkbox-icon--active')) {
                return $(this).removeClass('tick__checkbox-icon--active');
            } else {
                return $(this).addClass('tick__checkbox-icon--active');
            }
        });
    });
})

