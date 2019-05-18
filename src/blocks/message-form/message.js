jQuery(function($) {
  $('#message__form').on('submit', function(event) {
    if ( validateForm() ) { // если есть ошибки возвращает true
      event.preventDefault();
    }
  });
  
  function validateForm() {
    $(".text-error").remove();
    
    // Проверка логина    
    var el_u    = $(".message__name");
    if ( el_u.val().length < 4 ) {
      var v_login = true;
      $('span').remove(":contains('Thanks!')");
      el_u.after('<span class="text-error for-login">Error</span>');
      $('.for-login').css({top: el_u.position().top + el_u.outerHeight() + 2});
    } else {
      var v_login = false;
      $('span').remove(":contains('Thanks!')");
      el_u.after('<span class="text-success for-login">Thanks!</span>');
      $('.for-login').css({top: el_u.position().top + el_u.outerHeight() +2});
    }
    $("#userName").toggleClass('error', v_login );
    
    // Проверка e-mail
    
    var reg     = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
    var el_e    = $(".message__email");
    var v_email = el_e.val()?false:true;
  
    if ( v_email ) {
      el_e.after('<span class="text-error for-email">Error</span>');
      $(".for-email").css({top: el_e.position().top + el_e.outerHeight() + 2});
    } else if ( !reg.test( el_e.val() ) ) {
      v_email = true;
      el_e.after('<span class="text-error for-email">Error</span>');
      $(".for-email").css({top: el_e.position().top + el_e.outerHeight() + 2});
    }
    else if ( reg.test( el_e.val() ) ){
    v_email = true;
    el_e.after('<span class="text-success for-email">Thanks!</span>');
    $('.for-login').css({top: el_u.position().top + el_u.outerHeight() +2});
    }
    $("#userEmail").toggleClass('error', v_email );
    return ( v_login || v_email);
  }
});