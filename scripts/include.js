$(function(){
  $.get('/common/csslinks.html', function(data) {
    $('head').append(data);
  });
  $.get('/common/header.html', function(data) {
    data = data.replace(/>[\n\t ]+</g, "><");
    $('header').append(data);
  });
  $.get('/common/footer.html', function(data) {
    data = data.replace(/>[\n\t ]+</g, "><");
    $('footer').append(data);
  });
});

