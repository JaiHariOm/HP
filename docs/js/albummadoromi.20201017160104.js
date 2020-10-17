(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js349').hasAttr('src')) { a='src'; } $('.js349').attr(a, (dpi>1) ? 'images/artistphoto-750.jpg' : 'images/artistphoto-375.jpg');
$('.js350').attr('src', (dpi>1) ? 'images/godsgarden-logo6-400.png' : 'images/godsgarden-logo6-200.png');
$('.js344').attr('src', (dpi>1) ? 'images/img_8430-1920.jpeg' : 'images/img_8430-960.jpeg');
$('.js345').attr('src', (dpi>1) ? 'images/godsgarden-logo6-1440.png' : 'images/godsgarden-logo6-720.png');
var a='data-src'; if($('.js348').hasAttr('src')) { a='src'; } $('.js348').attr(a, (dpi>1) ? 'images/madoromi-with-light-690.jpg' : 'images/madoromi-with-light-345.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js349').unveil(50);
$('.js351 source').unveil(50);
$('.js348').unveil(50);
$('.js352 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js346')[0], "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.js347')[0], "2.30s", "0.00s", 1, 325);
wl.addAnimation($('.js348')[0], "2.50s", "0.00s", 1, 0);
wl.addAnimation($('.js349')[0], "4.00s", "0.00s", 1, 0);
wl.start();

});