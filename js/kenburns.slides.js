/*
Ken Burns Slideshow
by Kevin Thornbloom - http://www.kthornbloom.com

Licensed under the Creative Commons Attribution 2.5 License - http://creativecommons.org/licenses/by/2.5/
- free for use in both personal and commercial projects
- attribution requires leaving author name, author link, and the license info intact
*/

$(document).ready(function() {
  var playTimer = 4000
  var convertSeconds = (playTimer/1000)-.5

  $('.kb-slide').css({
      'webkitTransition': 'all ' + convertSeconds + 's ease-in-out',
      'mozTransition': 'all ' + convertSeconds + 's ease-in-out',
      'transition': 'all ' + convertSeconds + 's ease-in-out'
  });

  $('.kb-slide:last').css('position','relative');
  $('.kb-slides').wrap('<div class="kb-slides-wrap"></div>');
  $('.kb-slides-wrap').append('<div class="kb-caption"></div><a href="#" id="kb-prev">Prev</a><a href="#" id="kb-next">Next</a>');
   var caption = $('.kb-slide:last').attr('title');
  $('.kb-caption').html(caption);
playZoomout();
  function captionUpdater() {
      if ($('.kb-slide:eq(-2)').attr('title')) {
            var caption = $('.kb-slide:eq(-2)').attr('title');
                  $('.kb-caption').html(caption).show();
            }   
            else {
                  $('.kb-caption').empty().hide();
      }
  }

  function playZoomin() {
      captionUpdater();
    $('.kb-slide:last').addClass('notrans').fadeOut( "slow", function() {
        $(this).prependTo('.kb-slides').removeClass('notrans').css({
            'webkitTransform':'scale(1) rotate(0deg)',
            'msTransform':'scale(1) rotate(0deg)',
            'transform':'scale(1) rotate(0deg)'
        }).show();
        $('.kb-slide:last').css({
            'webkitTransform':'scale(1.2)  rotate(2deg)',
            'msTransform':'scale(1.2)  rotate(2deg)',
            'transform':'scale(1.2)  rotate(2deg)'
        });
        
    });    
  }

  function playZoomout() {
      captionUpdater();
      $('.kb-slide:eq(-2)').addClass('notrans').css('webkitTransform','scale(1.2)   rotate(2deg)');
      $('.kb-slide:last').addClass('notrans').fadeOut( "slow", function() {
          $(this).prependTo('.kb-slides').removeClass('notrans').css({
            'webkitTransform':'scale(1) rotate(0deg)',
            'msTransform':'scale(1) rotate(0deg)',
            'transform':'scale(1) rotate(0deg)'
        }).show();
          $('.kb-slide:last').removeClass('notrans').css({
              'webkitTransform':'scale(1) rotate(0deg)',
              'msTransform':'scale(1) rotate(0deg)',
              'transform':'scale(1) rotate(0deg)'
          });
    });    
  }

  function playPanright() {
      captionUpdater();
      $('.kb-slide:eq(-2)').addClass('notrans').css({
        "webkitTransform": "scale(1.3) translate(-10%, 0)"
      });
      $('.kb-slide:last').addClass('notrans').fadeOut( "slow", function() {
          $(this).prependTo('.kb-slides').removeClass('notrans').css({
            'webkitTransform':'scale(1) rotate(0deg)',
            'msTransform':'scale(1) rotate(0deg)',
            'transform':'scale(1) rotate(0deg)'
        }).show();
          $('.kb-slide:last').removeClass('notrans').css({
              'webkitTransform':'scale(1.3) translate(0,0)',
              'msTransform':'scale(1.3) translate(0,0)',
              'transform':'scale(1.3) translate(0,0)'
          });
    });    
  }

  function playPanleft() {
      captionUpdater();
      $('.kb-slide:eq(-2)').addClass('notrans').css({
        'webkitTransform': 'scale(1.3) translate(10%, 0)',
        'msTransform': 'scale(1.3) translate(10%, 0)',
        'transform': 'scale(1.3) translate(10%, 0)'
      });
      $('.kb-slide:last').addClass('notrans').fadeOut( "slow", function() {
          $(this).prependTo('.kb-slides').removeClass('notrans').css({
            'webkitTransform':'scale(1) rotate(0deg)',
            'msTransform':'scale(1) rotate(0deg)',
            'transform':'scale(1) rotate(0deg)'
        }).show();
          $('.kb-slide:last').removeClass('notrans').css({
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

  $('#kb-prev, #kb-next').hover(function(ev){
      clearInterval(myInterval);
  }, function(ev){
      myInterval = setInterval(fn, playTimer);
  });

  $('#kb-next').click(function(){
      captionUpdater();
      $('.kb-slide:last').addClass('notrans').fadeOut( "slow", function() {
          $(this).prependTo('.kb-slides').removeClass('notrans').css({
            'webkitTransform':'scale(1) rotate(0deg)',
            'msTransform':'scale(1) rotate(0deg)',
            'transform':'scale(1) rotate(0deg)'
        }).show();
      });
  });

  $('#kb-prev').click(function(){
      if ($('.kb-slide:first').attr('title')) {
          var caption = $('.kb-slide:first').attr('title');
          $('.kb-caption').html(caption).show();
      }   
      else {
          $('.kb-caption').empty().hide();
      }
      $('.kb-slide:first').hide().addClass('notrans').appendTo('.kb-slides').fadeIn();
  });
});