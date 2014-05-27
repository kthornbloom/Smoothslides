/*
 * Smoothslides
 * http://kthornbloom.com/smoothslides.php
 *
 * Copyright 2014, Kevin Thornbloom
 * Free to use and modify under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

(function($) {
    $.fn.extend({
        smoothSlides: function(options) {

            // These are overridden by options declared in footer
            var defaults = {
                duration: 6000,
                autoPlay: 'true',
                effect: 'random',
                effectEasing: 'ease-in-out',
                nextText: ' ►',
                prevText: '◄ ',
                captions: 'true',
                navigation: 'true',
                pagination: 'true',
                order: 'normal'
            }

            var options = $.extend(defaults, options),
                convertSeconds = (options.duration / 1000) - .5

                /* Set CSS transition timing and easing */
                $('.ss-slide').css({
                    'webkitTransition': 'all ' + convertSeconds + 's ' + options.effectEasing,
                    'mozTransition': 'all ' + convertSeconds + 's ' + options.effectEasing,
                    'msTransition': 'all ' + convertSeconds + 's ' + options.effectEasing,
                    'oTransition': 'all ' + convertSeconds + 's ' + options.effectEasing,
                    'transition': 'all ' + convertSeconds + 's ' + options.effectEasing
                });
            // Set some inline styles & add markup
            $('.ss-slide:last').css('position', 'relative');
            $('.ss-slides').wrap('<div class="ss-slides-wrap"></div>');

            // Randomizer Function
            $.fn.randomize = function(selector) {
                (selector ? this.find(selector) : this).parent().each(function() {
                    $(this).children(selector).sort(function() {
                        return Math.random() - 0.5;
                    }).detach().appendTo(this);
                });

                return this;
            };

            // Add Captions
            if (options.captions == 'true') {
                $('.ss-slides-wrap').append('<div class="ss-capwrap"><div class="ss-caption"></div></div>');
            }
            if (options.autoPlay == 'true') {
                if ($('.ss-slide:last').attr('title')) {
                    var caption = $('.ss-slide:last').attr('title');
                    $('.ss-caption').html(caption);
                }
            } else {
                if ($('.ss-slide:first').attr('title')) {
                    var caption = $('.ss-slide:first').attr('title');
                    $('.ss-caption').html(caption);
                } else {
                    $('.ss-caption').hide();
                }

            }

            // Add Pagination
            if (options.pagination == 'true') {
                $('.ss-slides-wrap').append('<div class="ss-pag-wrap"><div class="ss-paginate"></div></div>');
                $('.ss-slide').each(function() {
                    $('.ss-paginate').append('<a href="#"></a>');
                });
                if (options.autoPlay == 'true') {
                    $('.ss-paginate a:last').addClass('ss-current');
                } else {
                    $('.ss-paginate a:first').addClass('ss-current');
                }
            }

            // Add Navigation
            if (options.navigation == 'true') {
                $('.ss-slides-wrap').append('<a href="#" id="ss-prev">' + options.prevText + '</a><a href="#" id="ss-next">' + options.nextText + '</a>');
            }

            // Order
            if (options.order == 'normal') {
                $('.ss-slide').each(function() {
                    $(this).prependTo(this.parentNode);
                });
                if (options.autoPlay == 'true') {
                    $('.ss-slide:first').appendTo('.ss-slides');
                }
            } else if (options.order == 'random') {
                $('.ss-slide').randomize();
            } else if (options.order == 'reverse') {
                $('.ss-slide:first').appendTo('.ss-slides');
            }

            // Update Caption function
            function captionUpdater() {
                if ($('.ss-slide:eq(-2)').attr('title')) {
                    var caption = $('.ss-slide:eq(-2)').attr('title');
                    $('.ss-caption').html(caption).fadeIn(500);
                } else {
                    $('.ss-caption').fadeOut(500, function() {
                        $('.ss-caption').empty();
                    });
                }
            }

            // Update Pagination forwards
            function paginateForwards() {
                var currentDot = ($('.ss-current').index()) + 1,
                    nextSlide = currentDot + 1,
                    totalSlides = $('.ss-paginate a').length;
                if (currentDot >= totalSlides) {
                    $('.ss-current').removeClass('ss-current');
                    $('.ss-paginate a:first').addClass('ss-current');
                } else {
                    $('.ss-current').removeClass('ss-current');
                    $('.ss-paginate a').eq(currentDot).addClass('ss-current');
                }
            }

            // Updated Pagination reverse
            function paginateBackwards() {
                var currentDot = ($('.ss-current').index()) + 1,
                    nextSlide = currentDot - 2,
                    totalSlides = $('.ss-paginate a').length;
                if (currentDot <= 1) {
                    $('.ss-current').removeClass('ss-current');
                    $('.ss-paginate a:last').addClass('ss-current');
                } else {
                    $('.ss-current').removeClass('ss-current');
                    $('.ss-paginate a').eq(nextSlide).addClass('ss-current');
                }
            }

            /* ======================= */
            //Effects
            /* ======================= */

            function crossFade() {
                captionUpdater();
                paginateForwards();
                $('.ss-slide:last').addClass('notrans').fadeOut("slow", function() {
                    $(this).prependTo('.ss-slides').removeClass('notrans').css({
                        'webkitTransform': 'scale(1) rotate(0deg)',
                        'msTransform': 'scale(1) rotate(0deg)',
                        'transform': 'scale(1) rotate(0deg)',
                        'opacity': '0'
                    }).show();
                    $('.ss-slide:first').css({
                        'opacity': '1'
                    });

                });
            }

            function zoomIn() {
                captionUpdater();
                paginateForwards();
                $('.ss-slide:last').addClass('notrans').fadeOut("slow", function() {
                    $(this).prependTo('.ss-slides').removeClass('notrans').css({
                        'webkitTransform': 'scale(1) rotate(0deg)',
                        'msTransform': 'scale(1) rotate(0deg)',
                        'transform': 'scale(1) rotate(0deg)'
                    }).show();
                    $('.ss-slide:last').css({
                        'webkitTransform': 'scale(1.2)  rotate(2deg)',
                        'msTransform': 'scale(1.2)  rotate(2deg)',
                        'transform': 'scale(1.2)  rotate(2deg)'
                    });

                });
            }

            function zoomOut() {
                captionUpdater();
                paginateForwards();
                $('.ss-slide:eq(-2)').addClass('notrans').css({
                    'webkitTransform': 'scale(1.2) rotate(2deg)',
                    'msTransform': 'scale(1.2) rotate(2deg)',
                    'transform': 'scale(1.2) rotate(2deg)'
                });
                $('.ss-slide:last').addClass('notrans').fadeOut("slow", function() {
                    $(this).prependTo('.ss-slides').removeClass('notrans').css({
                        'webkitTransform': 'scale(1) rotate(0deg)',
                        'msTransform': 'scale(1) rotate(0deg)',
                        'transform': 'scale(1) rotate(0deg)'
                    }).show();
                    $('.ss-slide:last').removeClass('notrans').css({
                        'webkitTransform': 'scale(1) rotate(0deg)',
                        'msTransform': 'scale(1) rotate(0deg)',
                        'transform': 'scale(1) rotate(0deg)'
                    });
                });
            }

            function panRight() {
                captionUpdater();
                paginateForwards();
                $('.ss-slide:eq(-2)').addClass('notrans').css({
                    'webkitTransform': 'scale(1.3) translate(-10%, 0)',
                    'msTransform': 'scale(1.3) translate(-10%, 0)',
                    'transform': 'scale(1.3) translate(-10%, 0)'
                });
                $('.ss-slide:last').addClass('notrans').fadeOut("slow", function() {
                    $(this).prependTo('.ss-slides').removeClass('notrans').css({
                        'webkitTransform': 'scale(1) rotate(0deg)',
                        'msTransform': 'scale(1) rotate(0deg)',
                        'transform': 'scale(1) rotate(0deg)'
                    }).show();
                    $('.ss-slide:last').removeClass('notrans').css({
                        'webkitTransform': 'scale(1.3) translate(0,0)',
                        'msTransform': 'scale(1.3) translate(0,0)',
                        'transform': 'scale(1.3) translate(0,0)'
                    });
                });
            }

            function panLeft() {
                captionUpdater();
                paginateForwards();
                $('.ss-slide:eq(-2)').addClass('notrans').css({
                    'webkitTransform': 'scale(1.3) translate(10%, 0)',
                    'msTransform': 'scale(1.3) translate(10%, 0)',
                    'transform': 'scale(1.3) translate(10%, 0)'
                });
                $('.ss-slide:last').addClass('notrans').fadeOut("slow", function() {
                    $(this).prependTo('.ss-slides').removeClass('notrans').css({
                        'webkitTransform': 'scale(1) rotate(0deg)',
                        'msTransform': 'scale(1) rotate(0deg)',
                        'transform': 'scale(1) rotate(0deg)'
                    }).show();
                    $('.ss-slide:last').removeClass('notrans').css({
                        'webkitTransform': 'scale(1.3) translate(0,0)',
                        'msTransform': 'scale(1.3) translate(0,0)',
                        'transform': 'scale(1.3) translate(0,0)'
                    });
                });
            }

            function panUp() {
                captionUpdater();
                paginateForwards();
                $('.ss-slide:eq(-2)').addClass('notrans').css({
                    'webkitTransform': 'scale(1.3) translate(0, 10%)',
                    'msTransform': 'scale(1.3) translate(0, 10%)',
                    'transform': 'scale(1.3) translate(0, 10%)'
                });
                $('.ss-slide:last').addClass('notrans').fadeOut("slow", function() {
                    $(this).prependTo('.ss-slides').removeClass('notrans').css({
                        'webkitTransform': 'scale(1) rotate(0deg)',
                        'msTransform': 'scale(1) rotate(0deg)',
                        'transform': 'scale(1) rotate(0deg)'
                    }).show();
                    $('.ss-slide:last').removeClass('notrans').css({
                        'webkitTransform': 'scale(1.3) translate(0,0)',
                        'msTransform': 'scale(1.3) translate(0,0)',
                        'transform': 'scale(1.3) translate(0,0)'
                    });
                });
            }

            function panDown() {
                captionUpdater();
                paginateForwards();
                $('.ss-slide:eq(-2)').addClass('notrans').css({
                    'webkitTransform': 'scale(1.3) translate(0, -10%)',
                    'msTransform': 'scale(1.3) translate(0, -10%)',
                    'transform': 'scale(1.3) translate(0, -10%)'
                });
                $('.ss-slide:last').addClass('notrans').fadeOut("slow", function() {
                    $(this).prependTo('.ss-slides').removeClass('notrans').css({
                        'webkitTransform': 'scale(1) rotate(0deg)',
                        'msTransform': 'scale(1) rotate(0deg)',
                        'transform': 'scale(1) rotate(0deg)'
                    }).show();
                    $('.ss-slide:last').removeClass('notrans').css({
                        'webkitTransform': 'scale(1.3) translate(0,0)',
                        'msTransform': 'scale(1.3) translate(0,0)',
                        'transform': 'scale(1.3) translate(0,0)'
                    });
                });
            }

            // Start First Animation 
            if (options.autoPlay == 'false') {
                //do nothing
            } else if (options.effect == 'random') {
                var fns = [zoomOut, zoomIn, panRight, panLeft];
                fns[Math.floor(Math.random() * fns.length)]();
            } else if (options.effect == 'false') {
                //
            } else {
                eval(options.effect + "()");
            }

            /* Subsequent Auto Animations */
            var fn = function() {
                if (options.effect == 'random' && options.autoPlay == 'true') {
                    var fns = [zoomOut, zoomIn, panRight, panLeft, panUp, panDown];
                    fns[Math.floor(Math.random() * fns.length)]();
                } else if (options.effect == 'false') {
                    //
                } else {
                    eval(options.effect + "()");
                }
            }

            // Autoplay
            if (options.autoPlay == 'true') {
                var myInterval = setInterval(fn, options.duration);
            }

            /* Pause On Hover */
            $('#ss-prev, #ss-next, .ss-paginate').hover(function(ev) {
                clearInterval(myInterval);
            }, function(ev) {
                myInterval = setInterval(fn, options.duration);
            });

            /* Next Button */
            var quickNext = function() {
                $('#ss-next').off('click');
                $('.ss-slide:last').addClass('notrans').fadeOut('250', function() {
                    $('.ss-slide:last').prependTo('.ss-slides').removeClass('notrans').css({
                        'webkitTransform': 'scale(1) rotate(0deg)',
                        'msTransform': 'scale(1) rotate(0deg)',
                        'transform': 'scale(1) rotate(0deg)',
                        'opacity': '1'
                    }).show();
                    $('#ss-next').on("click", quickNext);
                });

                captionUpdater();
                paginateForwards();
                event.preventDefault();
            }
            $('#ss-next').on("click", quickNext);

            /* Previous Button */
            var quickPrev = function() {
                $('#ss-prev').off('click');
                if ($('.ss-slide:first').attr('title')) {
                    var caption = $('.ss-slide:first').attr('title');
                    $('.ss-caption').html(caption).show();
                } else {
                    $('.ss-caption').empty().hide();
                }
                paginateBackwards();
                $('.ss-slide:first').hide().addClass('notrans').appendTo('.ss-slides').fadeIn();
                $('#ss-prev').on("click", quickPrev);
                event.preventDefault();
            }
            $('#ss-prev').on("click", quickPrev);

            /* Paginator */
            $(document.body).on('click', '.ss-paginate a', function(event) {
                var whichClicked = ($(this).index()) + 1,
                    currentSlide = ($('.ss-current').index()) + 1;
                if (whichClicked < currentSlide) {
                    var iterate = (currentSlide - whichClicked);
                    for (var i = 0; i < iterate; i++) {
                        $('.ss-slide:first').appendTo('.ss-slides').removeClass('notrans').css({
                            'webkitTransform': 'scale(1) rotate(0deg)',
                            'msTransform': 'scale(1) rotate(0deg)',
                            'transform': 'scale(1) rotate(0deg)'
                        }).show();
                        $('.ss-current').removeClass();
                        $('.ss-paginate a').eq(whichClicked - 1).addClass('ss-current');
                    }

                } else if (whichClicked > currentSlide) {
                    var iterate = whichClicked - currentSlide;
                    for (var i = 0; i < iterate; i++) {
                        $('.ss-slide:last').prependTo('.ss-slides').removeClass('notrans').css({
                            'webkitTransform': 'scale(1) rotate(0deg)',
                            'msTransform': 'scale(1) rotate(0deg)',
                            'transform': 'scale(1) rotate(0deg)',
                            'display': 'none'
                        }).show();
                        $('.ss-current').removeClass();
                        $('.ss-paginate a').eq(whichClicked - 1).addClass('ss-current');
                    }
                }
                if ($('.ss-slide:last').attr('title')) {
                    var caption = $('.ss-slide:last').attr('title');
                    $('.ss-caption').html(caption).fadeIn(500);
                } else {
                    $('.ss-caption').fadeOut(500, function() {
                        $('.ss-caption').empty();
                    });
                }
                event.preventDefault();
            });

        }
    });
})(jQuery);