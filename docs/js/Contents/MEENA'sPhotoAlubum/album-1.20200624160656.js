(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js242').attr('src', (dpi>1) ? '../../images/dscn0206-1-664.jpg' : '../../images/dscn0206-1-332.jpg');






$('.js251').attr('src', (dpi>1) ? '../../images/dscn0220-650.jpg' : '../../images/dscn0220-325.jpg');
$('.js252').attr('src', (dpi>1) ? '../../images/imeji-2-630.jpg' : '../../images/imeji-2-315.jpg');
$('.js253').attr('src', (dpi>1) ? '../../images/dscn9793-392.jpg' : '../../images/dscn9793-196.jpg');
$('.js254').attr('src', (dpi>1) ? '../../images/hua-xiang-20-1-530.jpg' : '../../images/hua-xiang-20-1-265.jpg');
$('.js255').attr('src', (dpi>1) ? '../../images/dscn0234-2-682.jpg' : '../../images/dscn0234-2-341.jpg');













};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});