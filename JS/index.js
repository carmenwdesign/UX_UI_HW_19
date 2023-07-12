$(document).ready(function() {

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

    $('.project, #top-project').hover(function() {
      $(this).css({
        'outline': '2px solid #FFD5D1',
        'padding': '30px',
        'border-radius': '20px'
      });
    }, function() {
      $(this).css({
        'outline': 'none',
        'padding': '0',
        'border-radius': '0'
      });
    });

    $(function() {
      var $heroSection = $('.hero-section');
      var $heroH1 = $heroSection.find('h1');
      var $heroP = $heroSection.find('p');
      var $heroImage = $('.hero-image');
      var $welcomeArrow = $('.welcome-arrow');
    
      // Set opacity to 0 for elements
      $heroH1.css('opacity', 0);
      $heroP.css('opacity', 0);
      $heroImage.css('opacity', 0);
      $welcomeArrow.css('opacity', 0);
    
      $heroH1.animate({ opacity: 1 }, 1500, function() {
        // Fade in the paragraph after h1 has finished fading in
        $heroP.animate({ opacity: 1 }, 1500, function() {
          // Fade in the image after the paragraph has finished fading in
          $heroImage.animate({ opacity: 1 }, 2000, function() {
            // Fade in the welcome arrow after the image has finished fading in
            $welcomeArrow.animate({ opacity: 1 }, 1000);
          });
        });
      });
    });
    
    $(document).ready(function() {
      $('.hamburger').click(function() {
        $(this).toggleClass('active');
        $('.menu').slideToggle();
      });
    });    
  
  });

