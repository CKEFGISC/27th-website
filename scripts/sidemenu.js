$(function() {
  let expanded = false;
  $('#menu-button').click(function() {
    sidemenu_width = 70;
    if (expanded) {
      $('#navigation').css({
        'width': '0',
        'padding-left': '0'
      });
      expanded = false;
    } else {
      $('#navigation').css({
        'width': sidemenu_width + 'vw',
        'padding-left': (100 - sidemenu_width) + 'vw'
      });
      expanded = true;
    }
  });
});
