
$(document).ready(function () {
    $(function () {
        return $('.icon').on('click', function() {
            if($(this).hasClass('icon-active')) {
                return $(this).removeClass('icon-active');
            } else {
                return $(this).addClass('icon-active');
            }
        });
    });
})