(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
var wl;

ldsrcset=function(t){var e,r=document.querySelectorAll(t);for(e=0;e<r.length;e++){var c=r[e].getAttribute("data-srcset");r[e].setAttribute("srcset",c)}},ldsrc=function(t){var e=document.querySelector(t),r=e.getAttribute("data-src");e.setAttribute("src",r)};!function(){if("Promise"in window){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),i=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),s=location.href.replace(/#[^#]+$/,"");o.add(s);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(i){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var s=new XMLHttpRequest;s.open("GET",t,s.withCredentials=!0),s.send()}o.add(t)}},f=function(e){return e.target.closest("a")},p=function(t){var r=t.relatedTarget;r&&f(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},l={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=f(e);c(r)&&u(r.href)},l),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=f(r);c(n)&&(n.addEventListener("mouseout",p,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},l)}}();

$(function(){
r=function(){dpi=window.devicePixelRatio;};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
ldsrc('.js185');ldsrcset('.js210 source');ldsrc('.js186');ldsrcset('.js211 source');ldsrc('.js187');ldsrcset('.js212 source');ldsrc('.js188');ldsrcset('.js213 source');ldsrc('.js189');ldsrcset('.js214 source');ldsrc('.js190');ldsrcset('.js215 source');ldsrc('.js191');ldsrcset('.js216 source');ldsrc('.js192');ldsrcset('.js217 source');ldsrc('.js193');ldsrcset('.js218 source');ldsrc('.js194');ldsrcset('.js219 source');ldsrc('.js195');ldsrcset('.js220 source');ldsrc('.js196');ldsrcset('.js221 source');ldsrc('.js197');ldsrcset('.js222 source');ldsrc('.js198');ldsrcset('.js223 source');ldsrc('.js199');ldsrcset('.js224 source');ldsrc('.js200');ldsrcset('.js225 source');ldsrc('.js201');ldsrcset('.js226 source');ldsrc('.js202');ldsrcset('.js227 source');ldsrc('.js203');ldsrcset('.js228 source');ldsrc('.js204');ldsrcset('.js229 source');ldsrc('.js205');ldsrcset('.js230 source');ldsrc('.js206');ldsrcset('.js231 source');ldsrc('.js207');ldsrcset('.js232 source');ldsrc('.js208');ldsrcset('.js233 source');ldsrc('.js209');ldsrcset('.js234 source');
});