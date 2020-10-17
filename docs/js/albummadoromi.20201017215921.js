(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js324').hasAttr('src')) { a='src'; } $('.js324').attr(a, (dpi>1) ? 'images/artistphoto-816.jpg' : 'images/artistphoto-408.jpg');
$('.js325').attr('src', (dpi>1) ? 'images/godsgarden-logo6-400.png' : 'images/godsgarden-logo6-200.png');
$('.js319').attr('src', (dpi>1) ? 'images/img_8430-1920.jpeg' : 'images/img_8430-960.jpeg');
$('.js320').attr('src', (dpi>1) ? 'images/godsgarden-logo6-1440.png' : 'images/godsgarden-logo6-720.png');
var a='data-src'; if($('.js323').hasAttr('src')) { a='src'; } $('.js323').attr(a, (dpi>1) ? 'images/madoromi-with-light-690.jpg' : 'images/madoromi-with-light-345.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js324').unveil(50);
$('.js326 source').unveil(50);
$('.js323').unveil(50);
$('.js327 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js321')[0], "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.js322')[0], "3.10s", "0.00s", 1, 1);
wl.addAnimation($('.js323')[0], "3.00s", "0.00s", 1, 100);
wl.addAnimation($('.js324')[0], "3.10s", "0.00s", 1, 100);
wl.start();

});