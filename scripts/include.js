$(function(){
  $.get('/common/csslinks.html', function (data) {
    $('head').append(data);
  });
  $('header').load('/common/header.html'); 
  $('footer').load('/common/footer.html');
});

