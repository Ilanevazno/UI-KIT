$(document).ready(function() {
    //create slider
    $('#exstage').slider();
  
    //change color for inner text on page load
    var tick = $(".slider-tick-container").children();
    var tickLabel = $(".slider-tick-label-container").children();
  
    for (var i = 0; i < tickLabel.length; i++) {
      if (tick.eq(i).hasClass("in-selection")) {
        tickLabel.eq(i).addClass("whiteNum");
      }
    }
  
  
    //change color for inner text after clicking
    $(".stages").click(function() {
      var inSellection = $(".slider-tick-container").children();
      var labbels = $(".slider-tick-label-container").children();
  
      for (var i = 0; i < labbels.length; i++) {
        if (inSellection.eq(i).hasClass("in-selection")) {
          labbels.eq(i).addClass("whiteNum");
        } else {
          labbels.children(i).removeClass("whiteNum");
        }
  
      }
    });
  });
  