(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
var wl;

ldsrcset=function(t){var e,r=document.querySelectorAll(t);for(e=0;e<r.length;e++){var c=r[e].getAttribute("data-srcset");r[e].setAttribute("srcset",c)}},ldsrc=function(t){var e=document.querySelector(t),r=e.getAttribute("data-src");e.setAttribute("src",r)};!function(){if("Promise"in window){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),i=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),s=location.href.replace(/#[^#]+$/,"");o.add(s);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(i){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var s=new XMLHttpRequest;s.open("GET",t,s.withCredentials=!0),s.send()}o.add(t)}},f=function(e){return e.target.closest("a")},p=function(t){var r=t.relatedTarget;r&&f(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},l={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=f(e);c(r)&&u(r.href)},l),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=f(r);c(n)&&(n.addEventListener("mouseout",p,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},l)}}();

$(function(){
r=function(){dpi=window.devicePixelRatio;var a='data-src';var e=document.querySelector('.js517');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/img_8430-1280-1.jpeg':'images/img_8430-640-1.jpeg');
var a='data-src';var e=document.querySelector('.js518');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/artistphoto-816-1.jpg':'images/artistphoto-408-1.jpg');
var a='data-src';var e=document.querySelector('.js520');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/godsgarden-logo6-400-1.png':'images/godsgarden-logo6-200-1.png');
var e=document.querySelector('.js510');e.setAttribute('src',(dpi>1)?'images/img_8430-1920-1.jpeg':'images/img_8430-960-1.jpeg');
var e=document.querySelector('.js511');e.setAttribute('src',(dpi>1)?'images/godsgarden-logo6-1116-1.png':'images/godsgarden-logo6-558-1.png');

var e=document.querySelector('.js515');e.setAttribute('src',(dpi>1)?'images/madoromi-with-light-690-1.jpg':'images/madoromi-with-light-345-1.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
ldsrc('.js517');ldsrcset('.js521 source');ldsrc('.js518');ldsrcset('.js522 source');ldsrc('.js520');ldsrcset('.js523 source');wl=new woolite();
wl.init();
wl.addAnimation($('.js512')[0], "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.js513')[0], "3.10s", "0.00s", 1, 1);
wl.addAnimation($('.js516')[0], "3.00s", "0.00s", 1, 100);
wl.addAnimation($('.js519')[0], "3.10s", "0.00s", 1, 100);
wl.start();

});