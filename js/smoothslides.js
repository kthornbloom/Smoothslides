/*
 * Smoothslides
 * http://kthornbloom.com/smoothslides.php
 *
 * Copyright 2013, Kevin Thornbloom
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

 (function ($) {
    $.fn.extend({
        smoothSlides: function (options) {

            // These are overridden by options declared in footer
            var defaults = {
                playTimer: 4000,
                animEasing: 'ease-in-out',
                autoanimType: 'random',
                nextText: 'Next',
                prevText: 'Prev',
                captions: 'true',
                navigation: 'true'
            }

            var options =  $.extend(defaults, options),
                convertSeconds = (options.playTimer/1000)-.5

            /* Set CSS transition timing and easing */
            $('.ss-slide').css({
                'webkitTransition': 'all ' + convertSeconds + 's ' + options.animEasing,
                'mozTransition': 'all ' + convertSeconds + 's ' + options.animEasing,
                'msTransition': 'all ' + convertSeconds + 's ' + options.animEasing,
                'oTransition': 'all ' + convertSeconds + 's ' + options.animEasing,
                'transition': 'all ' + convertSeconds + 's ' + options.animEasing
            });

            $('.ss-slide:last').css('position','relative');
            $('.ss-slides').wrap('<div class="ss-slides-wrap"></div>');
            if (options.captions == 'true'){
              $('.ss-slides-wrap').append('<div class="ss-caption"></div>');
            }
            if (options.navigation == 'true'){
              $('.ss-slides-wrap').append('<a href="#" id="ss-prev">' + options.prevText + '</a><a href="#" id="ss-next">' + options.nextText + '</a>');
            }
             var caption = $('.ss-slide:last').attr('title');
            $('.ss-caption').html(caption);


            function captionUpdater() {
                if ($('.ss-slide:eq(-2)').attr('title')) {
                      var caption = $('.ss-slide:eq(-2)').attr('title');
                            $('.ss-caption').html(caption).show();
                      }   
                      else {
                            $('.ss-caption').empty().hide();
                }
            }

            function zoomIn() {
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

            function zoomOut() {
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

            function panRight() {
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

            function panLeft() {
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

            function panUp() {
              captionUpdater();
              $('.ss-slide:eq(-2)').addClass('notrans').css({
                'webkitTransform': 'scale(1.3) translate(0, 10%)',
                'msTransform': 'scale(1.3) translate(0, 10%)',
                'transform': 'scale(1.3) translate(0, 10%)'
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

            function panDown() {
              captionUpdater();
              $('.ss-slide:eq(-2)').addClass('notrans').css({
                'webkitTransform': 'scale(1.3) translate(0, -10%)',
                'msTransform': 'scale(1.3) translate(0, -10%)',
                'transform': 'scale(1.3) translate(0, -10%)'
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

            /* Start First Animation */
            if (options.autoanimType == 'random') {
                var fns = [zoomOut, zoomIn, panRight, panLeft];
                fns[Math.floor(Math.random() * fns.length)]();
              } else if (options.autoanimType == 'false') {
                //
              } else {
                  eval(options.autoanimType + "()");
              }

            /* Subsequent Auto Animations */
            var fn = function () {
                if (options.autoanimType == 'random') {
                  var fns = [zoomOut, zoomIn, panRight, panLeft, panUp, panDown];
                  fns[Math.floor(Math.random() * fns.length)]();
                } else if (options.autoanimType == 'false') {
                  //
                } else {
                    eval(options.autoanimType + "()");
                }
            }
            var myInterval = setInterval(fn, options.playTimer);

            /* Pause On Hover */
            $('#ss-prev, #ss-next').hover(function(ev){
                clearInterval(myInterval);
            }, function(ev){
                myInterval = setInterval(fn, options.playTimer);
            });

            /* Next Button */
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

            /* Previous Button */
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

      }
    });
})(jQuery);
