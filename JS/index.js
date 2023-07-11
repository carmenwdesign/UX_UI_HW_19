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
    
  });

