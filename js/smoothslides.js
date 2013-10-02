/*
Smoothslides
by Kevin Thornbloom - http://www.kthornbloom.com

Licensed under the Creative Commons Attribution 2.5 License - http://creativecommons.org/licenses/by/2.5/
- free for use in both personal and commercial projects
- attribution requires leaving author name, author link, and the license info intact
*/

$(document).ready(function() {
  var playTimer = 4000
  var convertSeconds = (playTimer/1000)-.5

  $('.ss-slide').css({
      'webkitTransition': 'all ' + convertSeconds + 's ease-in-out',
      'mozTransition': 'all ' + convertSeconds + 's ease-in-out',
      'transition': 'all ' + convertSeconds + 's ease-in-out'
  });

  $('.ss-slide:last').css('position','relative');
  $('.ss-slides').wrap('<div class="ss-slides-wrap"></div>');
  $('.ss-slides-wrap').append('<div class="ss-caption"></div><a href="#" id="ss-prev">Prev</a><a href="#" id="ss-next">Next</a>');
   var caption = $('.ss-slide:last').attr('title');
  $('.ss-caption').html(caption);

  firstPlay();

  function captionUpdater() {
      if ($('.ss-slide:eq(-2)').attr('title')) {
            var caption = $('.ss-slide:eq(-2)').attr('title');
                  $('.ss-caption').html(caption).show();
            }   
            else {
                  $('.ss-caption').empty().hide();
      }
  }

 function firstPlay() {
    $('.ss-slide:last').addClass('notrans').css({
        'webkitTransform':'scale(1.2) rotate(2deg)',
        'msTransform': 'scale(1.2) rotate(2deg)',
        'transform': 'scale(1.2) rotate(2deg)'
    });
    setTimeout( function() {
        $('.ss-slide:last').removeClass('notrans').css({
            'webkitTransform':'scale(1) rotate(0deg)',
            'msTransform':'scale(1) rotate(0deg)',
            'transform':'scale(1) rotate(0deg)'
        });
    }, 100);
  }

 function playZoomin() {
    captionUpdater();
  $('.ss-slide:last').addClass('notrans').fadeOut( "slow", function() {
      $(this).prependTo('.ss-slides').removeClass('notrans').css({
          'webkitTransform':'scale(1) rotate(0deg)',
          'msTransform':'scale(1) rotate(0deg)',
          'transform':'scale(1) rotate(0deg)'
      }).show();
      $('.ss-slide:last').css({
          'webkitTransform':'scale(1.2)  rotate(2deg)',
          'msTransform':'scale(1.2)  rotate(2deg)',
          'transform':'scale(1.2)  rotate(2deg)'
      });
      
  });    
}

function playZoomout() {
    captionUpdater();
    $('.ss-slide:eq(-2)').addClass('notrans').css({
        'webkitTransform':'scale(1.2) rotate(2deg)',
        'msTransform': 'scale(1.2) rotate(2deg)',
        'transform': 'scale(1.2) rotate(2deg)'
    });
    $('.ss-slide:last').addClass('notrans').fadeOut( "slow", function() {
        $(this).prependTo('.ss-slides').removeClass('notrans').css({
          'webkitTransform':'scale(1) rotate(0deg)',
          'msTransform':'scale(1) rotate(0deg)',
          'transform':'scale(1) rotate(0deg)'
      }).show();
        $('.ss-slide:last').removeClass('notrans').css({
            'webkitTransform':'scale(1) rotate(0deg)',
            'msTransform':'scale(1) rotate(0deg)',
            'transform':'scale(1) rotate(0deg)'
        });
  });    
}

function playPanright() {
    captionUpdater();
    $('.ss-slide:eq(-2)').addClass('notrans').css({
      'webkitTransform': 'scale(1.3) translate(-10%, 0)',
      'msTransform': 'scale(1.3) translate(-10%, 0)',
      'transform': 'scale(1.3) translate(-10%, 0)'
    });
    $('.ss-slide:last').addClass('notrans').fadeOut( "slow", function() {
        $(this).prependTo('.ss-slides').removeClass('notrans').css({
          'webkitTransform':'scale(1) rotate(0deg)',
          'msTransform':'scale(1) rotate(0deg)',
          'transform':'scale(1) rotate(0deg)'
      }).show();
        $('.ss-slide:last').removeClass('notrans').css({
            'webkitTransform':'scale(1.3) translate(0,0)',
            'msTransform':'scale(1.3) translate(0,0)',
            'transform':'scale(1.3) translate(0,0)'
        });
  });    
}

function playPanleft() {
    captionUpdater();
    $('.ss-slide:eq(-2)').addClass('notrans').css({
      'webkitTransform': 'scale(1.3) translate(10%, 0)',
      'msTransform': 'scale(1.3) translate(10%, 0)',
      'transform': 'scale(1.3) translate(10%, 0)'
    });
    $('.ss-slide:last').addClass('notrans').fadeOut( "slow", function() {
        $(this).prependTo('.ss-slides').removeClass('notrans').css({
          'webkitTransform':'scale(1) rotate(0deg)',
          'msTransform':'scale(1) rotate(0deg)',
          'transform':'scale(1) rotate(0deg)'
      }).show();
        $('.ss-slide:last').removeClass('notrans').css({
            'webkitTransform':'scale(1.3) translate(0,0)',
            'msTransform':'scale(1.3) translate(0,0)',
            'transform':'scale(1.3) translate(0,0)'
        });
  });    
}

  var fns = [playZoomout, playZoomin, playPanright, playPanleft];
  var fn = function () {
      fns[Math.floor(Math.random() * fns.length)]();
  }

  var myInterval = setInterval(fn, playTimer);

  $('#ss-prev, #ss-next').hover(function(ev){
      clearInterval(myInterval);
  }, function(ev){
      myInterval = setInterval(fn, playTimer);
  });

  $('#ss-next').click(function(event){
      captionUpdater();
      $('.ss-slide:last').addClass('notrans').fadeOut( "slow", function() {
          $(this).prependTo('.ss-slides').removeClass('notrans').css({
            'webkitTransform':'scale(1) rotate(0deg)',
            'msTransform':'scale(1) rotate(0deg)',
            'transform':'scale(1) rotate(0deg)'
        }).show();
      });
      event.preventDefault();
  });

  $('#ss-prev').click(function(event){
      if ($('.ss-slide:first').attr('title')) {
          var caption = $('.ss-slide:first').attr('title');
          $('.ss-caption').html(caption).show();
      }   
      else {
          $('.ss-caption').empty().hide();
      }
      $('.ss-slide:first').hide().addClass('notrans').appendTo('.ss-slides').fadeIn();
      event.preventDefault();
  });
});
