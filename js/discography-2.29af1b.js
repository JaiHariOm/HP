(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
var wl;

ldsrcset=function(t){var e,r=document.querySelectorAll(t);for(e=0;e<r.length;e++){var c=r[e].getAttribute("data-srcset");r[e].setAttribute("srcset",c)}},ldsrc=function(t){var e=document.querySelector(t);if(e){var r=e.getAttribute("data-src");e.setAttribute("src",r)}};ldv=function(t){var e=document.querySelector(t);if(e){var r=document.querySelector(t+" source"),c=r.getAttribute("data-src");r.setAttribute("src",c),e.load()}};!function(){if("Promise"in window&&void 0!==window.performance){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),i=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),s=location.href.replace(/#[^#]+$/,"");o.add(s);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||"?preload=no"==e.search.substr(-11)||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(i){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var s=new XMLHttpRequest;s.open("GET",t,s.withCredentials=!0),s.send()}o.add(t)}},p=function(e){return e.target.closest("a")},f=function(t){var r=t.relatedTarget;r&&p(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},d={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=p(e);c(r)&&u(r.href)},d),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=p(r);c(n)&&(n.addEventListener("mouseout",f,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},d)}}();

$(function(){
r=function(){dpi=window.devicePixelRatio;var e=document.querySelector('.un131');e.setAttribute('src',(dpi>1)?'images/madoromi-with-light-300.jpg':'images/madoromi-with-light-150.jpg');
var e=document.querySelector('.un133');e.setAttribute('src',(dpi>1)?'images/fire_dragon-jacket1-300.jpg':'images/fire_dragon-jacket1-150.jpg');
var e=document.querySelector('.un135');e.setAttribute('src',(dpi>1)?'images/hua-xiang-86-300.jpg':'images/hua-xiang-86-150.jpg');
var e=document.querySelector('.un137');e.setAttribute('src',(dpi>1)?'images/hua-xiang-43-300.jpg':'images/hua-xiang-43-150.jpg');
var e=document.querySelector('.un139');e.setAttribute('src',(dpi>1)?'images/jaketto-300.jpg':'images/jaketto-150.jpg');
var e=document.querySelector('.un142');e.setAttribute('src',(dpi>1)?'images/asa-300.jpg':'images/asa-150.jpg');
var e=document.querySelector('.un145');e.setAttribute('src',(dpi>1)?'images/aitai-aitai-300.jpg':'images/aitai-aitai-150.jpg');
var e=document.querySelector('.un147');e.setAttribute('src',(dpi>1)?'images/meena-mv-300.jpg':'images/meena-mv-150.jpg');
};
if(!window.HTMLPictureElement){r();}
!function(){var e=document.querySelectorAll('a[href^="#"]');[].forEach.call(e,function(e){e.addEventListener("click",function(t){var o=0;if(e.hash.length>1){var n=parseFloat(getComputedStyle(document.body).getPropertyValue("zoom"));n||(n=1);var r=document.querySelectorAll('[name="'+e.hash.slice(1)+'"]')[0];if(!r)return;var l=/chrome/i.test(navigator.userAgent);o=l?r.getBoundingClientRect().top*n+pageYOffset:(r.getBoundingClientRect().top+pageYOffset)*n}if("scrollBehavior"in document.documentElement.style)scroll({top:o,left:0,behavior:"smooth"});else if("requestAnimationFrame"in window){var a=pageYOffset,i=null;requestAnimationFrame(function e(t){i||(i=t);var n=t-i;scrollTo(0,a<o?(o-a)*n/400+a:a-(a-o)*n/400),n<400?requestAnimationFrame(e):scrollTo(0,o)})}else scrollTo(0,o);t.preventDefault()},!1)})}();
wl=new woolite();
wl.init();
wl.addAnimation($('.un132'), "2.00s", "1.40s", 1, 100);
wl.addAnimation($('.un134'), "1.50s", "0.50s", 1, 100);
wl.addAnimation($('.un136'), "1.80s", "0.50s", 1, 100);
wl.addAnimation($('.un138'), "3.00s", "1.90s", 1, 100);
wl.addAnimation($('.un140'), "3.00s", "1.00s", 1, 100);
wl.addAnimation($('.un141'), "2.00s", "0.00s", 30, 100);
wl.addAnimation($('.un143'), "1.50s", "2.80s", 1, 100);
wl.addAnimation($('.un144'), "2.00s", "0.00s", 30, 100);
wl.addAnimation($('.un146'), "2.20s", "1.80s", 1, 100);
wl.addAnimation($('.un148'), "2.20s", "0.90s", 1, 100);
wl.start();
if(location.hash){var e=location.hash.replace("#",""),o=function(){var t=document.querySelectorAll('[name="'+e+'"]')[0];t&&t.scrollIntoView(),"0px"===window.getComputedStyle(document.body).getPropertyValue("min-width")&&setTimeout(o,100)};o()}

});lfn=function(){ldsrcset('.un150 source');};if(document.readyState=="complete"){lfn();}else{$(window).on("load",lfn);}