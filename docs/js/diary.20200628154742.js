(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js271').attr('src', (dpi>1) ? 'images/object000_1-370.jpg' : 'images/object000_1-185.jpg');


$('.js268').attr('src', (dpi>1) ? 'images/shapeimage_4-1264.jpg' : 'images/shapeimage_4-632.jpg');
$('.js269').attr('src', (dpi>1) ? 'images/object000-360.jpg' : 'images/object000-180.jpg');
$('.js270').attr('src', (dpi>1) ? 'images/object002-370.jpg' : 'images/object002-185.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});