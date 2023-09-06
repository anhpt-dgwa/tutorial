import $ from 'jquery'
import jQuery from 'jquery'

var flg_slick;
window.addEventListener('load', function() {
  if (window.innerWidth < 769) {
    $('.gnav .menu li a').on('click',function(){
      $('.gnav').removeClass('open');
      $('#hambuger').removeClass('open');
      $('.site-logo').removeClass('hide');
      $('body').removeClass('open');
    });
    flg_slick = false;
  } else {
    var hd = $(".page-header");
    var mv = $(".main-visual").outerHeight();
    $(window).scroll(function() {
      $(this).scrollTop() >= mv ? hd.addClass("fixed") : hd.removeClass("fixed");
    });
    flg_slick = true;
  }
});
window.addEventListener('resize', function() {
  if (window.innerWidth < 769) {
    if (flg_slick) {
      $('.gnav .menu li a').click(function(){
      $('.gnav').removeClass('open');
      $('#hambuger').removeClass('open');
      $('.site-logo').removeClass('hide');
      $('body').removeClass('open');
    });
      flg_slick = false;
    }
  } else {
    if (!flg_slick) {
      var hd = $(".page-header");
      var mv = $(".main-visual").outerHeight();
      $(window).on('scroll', function() {
        $(this).scrollTop() >= mv ? hd.addClass("fixed") : hd.removeClass("fixed");
      });
      flg_slick = true;
    }
  }
})

jQuery(function($) {
    var t=$(".pagetop");
    t.hide(),t.on('click',function(){return $("body,html").animate({scrollTop:0},400),!1}),$(window).scroll(function(){$(this).scrollTop()>450?t.fadeIn():t.fadeOut()});

    $('#hambuger').on('click', function () {
        $('.gnav').toggleClass('open');
        $('#wrapper').toggleClass('open');
        $(this).toggleClass('open');
        $('.site-logo').toggleClass('hide');
        $('body').toggleClass('open');
    });
});

$(window).on('load',function(){
    // fade-up
    $('.animation').each(function(){
        var POS = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scroll > POS - windowHeight){
            $(this).addClass('fadeInUp');
        }
    });
    $(window).on('scroll', function() {
        $('.animation').each(function(){
            var POS = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > POS - windowHeight){
                $(this).addClass('fadeInUp');
            }
        });
    });
});
(function ($, window, undefined) {
    "use strict";

    if ($(".js-rellax").length > 0) {
        var rellax = new Rellax('.js-rellax', {
            center: true
        });
    }
})(jQuery, window);