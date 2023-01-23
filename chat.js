$(function() {
  var b = $("#button");
  var w = $("#collapsable");
  var l = $("#list");
  
  w.height(l.outerHeight(true));

  b.click(function() {
  
    if(w.hasClass('content')) {
      w.removeClass('content');
      w.height(0);
    } else {
      w.addClass('content');
      w.height(l.outerHeight(true));
    }
  
  });
});



