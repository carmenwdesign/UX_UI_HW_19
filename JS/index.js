$(document).ready(function() {
  // Hide the navbar initially
  $('.navbarCS').hide();
  $('footer').hide();

  function fade() {
    $('.cube-loader').fadeOut('slow', function() {
      // Animation complete callback
      // Show the navbar and rest of the content
      $('.navbarCS').fadeIn('slow');
      $('#content').fadeIn('slow');
      $('footer').fadeIn('slow');
    });
  }
  setTimeout(fade, 3000);

    $('li.navbar-item.work a').click(function(e) {
      e.preventDefault();
      var targetSection = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(targetSection).offset().top
      }, 1000);
    }); 

    $('#top-project').click(function() {
      window.location.href = 'case_study.html';
    });

    var welcomeArrow = $('<div class="welcome-arrow"></div>').appendTo('body');
    welcomeArrow.css('display', 'inline-block');
  
    welcomeArrow.hover(function() {
      $(this).css('animation-play-state', 'paused');
    }, function() {
      $(this).css('animation-play-state', 'running');
    });

});

