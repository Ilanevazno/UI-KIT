$.datepicker.setDefaults({
    showOn: "both",
    buttonImageOnly: false,
    altField: "#actualDate",
    altFormat: "yy-mm-dd",
    showMonthAfterYear: true,
    weekHeader: "W",
    showOtherMonths: true,
    firstDay: 1,
    dayNamesMin: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ]
  });

  $(document).ready(function() {
    $('#datepicker').datepicker();

    $('.ui-datepicker-year').remove();

    //Добавление шапки с актуальной датой
    $(".ui-datepicker").prepend('<div class="actual__date">0</div>') 

    //Добавление надписи "Today"
    $('<div class="choised__data">Today</div>').appendTo('.ui-datepicker')

    //Подгрузка текущего дня в шапку календаря
    $('.actual__date')[0].innerHTML = $('.ui-state-highlight').html();


    //Фикс поломки всего виджета при клике на какой либо день
    $('.ui-datepicker-calendar tbody tr td').off('click');
    $('.ui-datepicker-calendar tbody tr td').click(function(evt){
      evt.preventDefault();
    })

    //Убрать "год"
    $('body').click(function(){
      $('.ui-datepicker-year').remove();
    })

    //Уберу ненужные спаны
    $('.ui-datepicker .ui-datepicker-next span').remove();
    $('.ui-datepicker .ui-datepicker-prev span').remove();

    //Фикс исчезающей шапочки с текущим числом
    $('body').click(function(CurrentDate) {
      let nowDate = $('.ui-state-highlight'); 
      let d = new Date();
      let day = d.getDate();

      $('.choised__data').remove();  
      $('<div class="choised__data">Today</div>').appendTo('.ui-datepicker');
      
      $(".actual__date").remove();
      $(".ui-datepicker").prepend('<div class="actual__date"></div>');
      $('.actual__date')[0].innerHTML = day;

      $('.ui-datepicker .ui-datepicker-next span').remove();
      $('.ui-datepicker .ui-datepicker-prev span').remove();

      $('.ui-datepicker-calendar tbody tr td').off('click');
      $('.ui-datepicker-calendar tbody tr td').click(function(evt){
        evt.preventDefault();
      })
    });
  })
