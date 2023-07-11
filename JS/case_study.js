$(document).ready(function() {
  $('.navbarCS').hide();
  $('footer').hide();

  function fade() {
    $('.cube-loader').fadeOut('slow', function() {
      $('.navbarCS').fadeIn('slow');
      $('#content').fadeIn('slow');
      $('footer').fadeIn('slow');
    });
  }

  setTimeout(fade, 3000);

});

