$(document).ready(function() {

  $('li.navbar-item.work a').click(function(e) {
    e.preventDefault();
    var targetSection = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(targetSection).offset().top
    }, 1000);
  });   

  $('div.menu ul li:nth-child(2) a').click(function(e) {
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
    
      $heroH1.css('opacity', 0);
      $heroP.css('opacity', 0);
      $heroImage.css('opacity', 0);
      $welcomeArrow.css('opacity', 0);
    
      $heroH1.animate({ opacity: 1 }, 1500, function() {
        $heroP.animate({ opacity: 1 }, 1500, function() {
          $heroImage.animate({ opacity: 1 }, 2000, function() {
            $welcomeArrow.animate({ opacity: 1 }, 1000);
          });
        });
      });
    });
    
    $('.hamburger').click(function() {
      $(this).toggleClass('active');
      $('.menu').slideToggle();
    });
  
    $("#mobile-top-project").on('click', function() {
      window.location.href = "case_study.html";
    });

    $(".clickable").on('click', function() {
      window.location.href = "https://carmenwdesign.github.io/UX_UI_HW_20/";
    });

  });

