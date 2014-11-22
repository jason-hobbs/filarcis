// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require gritter
//= require jquery-fileupload/basic
//= require jquery-fileupload/vendor/tmpl
//= require jquery.purr
//= require best_in_place
//= require_tree .

$(function(){ $(document).foundation(); });

$('.best_in_place').best_in_place();


$(document).ready(
    function() {
      $.extend($.gritter.options, {
            fade_in_speed: 100, // how fast notifications fade in (string or int)
            fade_out_speed: 100, // how fast the notices fade out
            time: 1500 // hang on the screen for...
          });

    $('.best_in_place').on("ajax:success", function () {
      location.reload();
    });

    //$('.best_in_place').on("ajax:success", function () {
    //  location.reload();
    //});

    //$('.folder-nav').click(function()
    //{
      //$('.folder-nav').removeClass('folder-nav-active');
      //$(this).addClass('folder-nav-active');
    //});

    $('.highlight').click(function()
    {
      $('.folder-nav').removeClass('folder-nav-active');
      $(this).parent().addClass('folder-nav-active');
    });

    $('.arrow').click(function()
    {
      var origsrc = $(this).find('img').attr('src');
      //alert(origsrc);
      var src = '';
      if (origsrc == '/images/arrow-closed.png')
         src = '/images/arrow-open.png';
      else
         src = '/images/arrow-closed.png';
      $(this).find('img').attr('src', src);


      $(this).parent().next().toggle();
    });

});


$(document).bind('dragover', function (e) {
    var dropZone = $('#dropzone'),
        timeout = window.dropZoneTimeout;
    if (!timeout) {
        dropZone.addClass('in');
    } else {
        clearTimeout(timeout);
    }
    var found = false,
        node = e.target;
    do {
        if (node === dropZone[0]) {
            found = true;
            break;
        }
        node = node.parentNode;
    } while (node != null);
    if (found) {
        dropZone.addClass('hover');
    } else {
        dropZone.removeClass('hover');
    }
    window.dropZoneTimeout = setTimeout(function () {
        window.dropZoneTimeout = null;
        dropZone.removeClass('in hover');
    }, 1000);
});
