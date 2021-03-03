$(document).ready(function() {


  $(window).scroll(function() {

    $('.fi').each(function(i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_object / 2) {
        $(this).animate({
          'opacity': '1'
        }, 2500);
      }
    });
  });

  $(window).scroll(function() {

    $('.fi2').each(function(i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_object / 1.2) {
        $(this).animate({
          'opacity': '1'
        }, 2500);
      }
    });
  });

  $(window).scroll(function() {
    $('.fadeinleft').each(function(i) {

      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).animate({
          'opacity': '1',
          'margin-left': '0px'
        }, 600);
      }

    });
  });

  $(window).scroll(function() {
    $('.fadeinright').each(function(i) {

      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).animate({
          'opacity': '1',
          'margin-left': '0px'
        }, 600);
      }

    });
  });


  $(window).scroll(function() {
    $('.fadeintop').each(function(i) {

      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).animate({
          'opacity': '1',
          'margin-top': '0px'
        }, 600);
      }

    });
  });


  $(".scroll").click(function(event) {

    event.preventDefault();

    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 500);
  });

});
