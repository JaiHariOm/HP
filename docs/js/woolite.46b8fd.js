var doParallax;(function(){var t,e,n,i=function(t,e){return function(){return t.apply(e,arguments)}};t=this.WeakMap||this.MozWeakMap||(t=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,n,i=this.keys,a=i.length;for(e=n=0;n<a;e=++n){if(i[e]===t)return this.values[e]}},t.prototype.set=function(t,e){var n,i,a=this.keys,r=a.length;for(n=i=0;i<r;n=++i){if(a[n]===t)return void(this.values[n]=e)}return this.keys.push(t),this.values.push(e)},t}()),e=this.getComputedStyle||function(t,e){return this.getPropertyValue=function(e){var i;return"float"===e&&(e="styleFloat"),n.test(e)&&e.replace(n,function(t,e){return e.toUpperCase()}),(null!=(i=t.currentStyle)?i[e]:void 0)||null},this},n=/(\-([a-z]){1})/g,this.woolite=function(){function n(e){window.wooliteObj=this,this.scrollCallback=i(this.scrollCallback,this),this.scrollHandler=i(this.scrollHandler,this),this.resetAnimation=i(this.resetAnimation,this),this.start=i(this.start,this),this.scrolled=!0,this.ready=!1,this.isChrome=/chrome/i.test(navigator.userAgent),this.isFF=/firefox/i.test(navigator.userAgent),this.animationNameCache=new t}return n.prototype.init=function(){return this.ac=0,this.element=window.document.documentElement,this.stopped=!1,this.boxes=[],this.manualBoxes=[],[]},n.prototype.addAnimation=function(t,e,n,i,a){var r=document.querySelector(t);if(null!==r){var o={element:r,duration:e,delay:n,iteration:i,offset:a};this.applyStyle(o,!0),this.boxes.push(o),this.addScrollEvent(r)}},n.prototype.addManualAnimation=function(t,e,n){var i=document.querySelector(t);if(null!==i){var a={element:i,duration:e,delay:n};this.applyStyle(a,!0,!1,!0),this.manualBoxes.push(a)}},n.prototype.addScrollEvent=function(t){for(;t!=document;){if("scroll"==e(t).overflow){t.addEventListener("scroll",this.scrollHandler),this.scrollHandler();break}t=t.parentNode}},n.prototype.start=function(){return window.addEventListener("scroll",this.scrollHandler),window.addEventListener("resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50),this.finished=[]},n.prototype.stop=function(){if(this.stopped=!0,window.addEventListener("scroll",this.scrollHandler),window.addEventListener("resize",this.scrollHandler),null!=this.interval)return clearInterval(this.interval)},n.prototype.show=function(t,e){var n;this.ac++||(this.iid=setInterval((n=this,function(){n.scrolled=!0,n.scrollCallback()}),50)),this.applyStyle(t,void 0,e),t.element.className=t.element.className+" animated";var i=document.createEvent("Event");return i.initEvent("scroll",!0,!0),window.dispatchEvent(i),setTimeout(function(){null!=doParallax&&doParallax()},50),t},n.prototype.applyStyle=function(t,e,n){return this.animate(function(t,e,n,i){return function(){return t.customStyle(e.element,n,e.duration,e.delay,e.iteration,i)}}(this,t,e,n))},n.prototype.animate="requestAnimationFrame"in window?function(t){return requestAnimationFrame(t)}:function(t){return setTimeout(t,1)},n.prototype.doAnimate=function(t,e){for(var n=this.manualBoxes,i=n.length,a=0;a<i;a++){var r=n[a];if(r&&r.element==t){this.show(r,e);break}}},n.prototype.resetAnimation=function(t){var e;if(t.type.toLowerCase().indexOf("animationend")>=0){if(e=t.target||t.srcElement,--this.ac||(clearInterval(this.iid),this.iid=void 0),"reverse"==this.vendorCSS(e,"animation-direction")){e.removeAttribute("style");for(var n=this.manualBoxes,i=this.boxes,a=n.length,r=i.length,o=0;o<a;o++){var s=n[o];if(s&&s.element==e){for(var l=s.element;l!=document;){var d=l.getAttribute("data-popup-type");if(d&&d.length>0){this.vendorSet(l.style,{transform:"translate3d(-999999px,0,0)"});break}l=l.parentNode}for(var u=0;u<r;u++){var h=i[u];if(h)for(l=h.element.parentNode;l!=document;){if(l==e){h.element.className=h.element.className.replace("animated","").trim(),this.applyStyle(h,!0);break}l=l.parentNode}}break}}}else this.cachedAnimationName(e)&&(this.vendorSet(e.style,{animationName:"none"}),"1"===e.getAttribute("data-vis")&&(e.setAttribute("data-vis","0"),e.style.visibility="hidden"));return e.className=e.className.replace("animated","").trim()}},n.prototype.customStyle=function(t,e,n,i,a,r){var o;if(parseFloat(n)||(n="0.1s"),void 0!==(o=this.cachedAnimationName(t))||this.cacheAnimationName(t)){var s,l,d=t.getAttribute("data-vis");return t.style.visibility="0"===d||(!d||0===d.length)&&e?"hidden":"visible",this.vendorSet(t.style,{animationDirection:r>0?"reverse":"normal"}),n&&this.vendorSet(t.style,{animationDuration:n}),i&&this.vendorSet(t.style,{animationDelay:i}),a&&this.vendorSet(t.style,{animationIterationCount:a}),this.vendorSet(t.style,{animationName:e?"none":o}),e||(this.animate((s=this,l=t,function(){l.addEventListener("animationend",s.resetAnimation),l.addEventListener("oanimationend",s.resetAnimation),l.addEventListener("webkitAnimationEnd",s.resetAnimation),l.addEventListener("MSAnimationEnd",s.resetAnimation)})),this.scrolled=!0),t}setTimeout(function(t,e,n,i,a,r,o){return function(){t.customStyle(e,n,i,a,r,o)}}(this,t,e,n,i,a,r),50)},n.prototype.vendors=["moz","webkit"],n.prototype.vendorSet=function(t,e){var n,i,a,r;for(n in i=[],e)a=e[n],t[""+n]=a,i.push(function(){for(var e=[],i=this.vendors,o=i.length,s=0;s<o;s++)r=i[s],e.push(t[""+r+n.charAt(0).toUpperCase()+n.substr(1)]=a);return e}.call(this));return i},n.prototype.vendorCSS=function(t,n){for(var i=e(t),a=i.getPropertyValue(n),r=this.vendors,o=r.length,s=0;s<o;s++){var l=r[s];a=a||i.getPropertyValue("-"+l+"-"+n)}return a},n.prototype.animationName=function(t){var n;try{n=this.vendorCSS(t,"animation-name")}catch(i){n=e(t).getPropertyValue("animation-name")}if("none"===n)return"";if(null!=(i=t.classList))i.remove(n);else{var i,a=(i=t.className.split(" ")).indexOf(n);a>=0&&(i.splice(a,1),t.className=i.join(" "))}return n},n.prototype.cacheAnimationName=function(t){var e=this.animationName(t);return"none"!=e&&e.length>0&&(this.animationNameCache.set(t,e),!0)},n.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},n.prototype.scrollHandler=function(){return this.scrolled=!0},n.prototype.scrollCallback=function(){if(this.scrolled){this.scrolled=!1;for(var t=[],e=this.boxes,n=e.length,i=this.manualBoxes,a=i.length,r=[],o=0;o<n;o++){var s=e[o];if(s){if(!this.ready&&(this.ready="0px"!==window.getComputedStyle(document.body).getPropertyValue("min-width"),!this.ready)){for(var l=s.element.offsetParent;l;){var d=l.classList;if(null!=d&&d.contains("btf"))break;if((" "+l.className+" ").indexOf(" btf ")>-1)break;l=l.offsetParent}if(l)continue}if(this.isVisible(s)&&-1==s.element.className.search("animated")&&(this.show(s),void 0===s.popup)){s.popup=null;for(l=s.element.parentNode;l!=document;){if((p=l.getAttribute("data-popup-type"))&&p.length>0){if(s.popup=l.getAttribute("id"),-1==r.indexOf(s.popup)){for(var u=0;u<a;u++){var h=i[u];!h||h.element!=l&&h.element.parentNode.parentNode!=l||(l=null)}null!==l&&r.push(s.popup)}break}l=l.parentNode}}t.push(s)}}if(this.boxes=t,!this.boxes.length&&!this.manualBoxes.length)return this.stop();plen=r.length;for(var c=0;c<plen;c++){var p=r[c];pop.addHook(p,null,function(t,i){return function(){for(o=0;o<n;o++){var a=e[o];a&&a.popup==i&&(a.element.className=a.element.className.replace("animated","").trim(),t.applyStyle(a,!1,!0))}}}(this,p))}}},n.prototype.boundingRect=function(t){var e=t.getBoundingClientRect();if(!this.isFF){var n=parseFloat(window.getComputedStyle(document.body).getPropertyValue("zoom"));n||(n=1),e={left:e.left*n,right:e.right*n,top:e.top*n,bottom:e.bottom*n},this.isChrome||(e.top+=window.pageYOffset*(n-1),e.bottom+=window.pageYOffset*(n-1))}return e},n.prototype.isVisible=function(t){var n,i,a,r=t.element.parentNode,o=r.parentNode;if(-1!=r.className.indexOf("slick-slide")&&("1"===r.getAttribute("data-anim")||0==e(r).opacity)||null!=o&&-1!=o.className.indexOf("slick-slide")&&("1"===o.getAttribute("data-anim")||0==e(o).opacity))return"hidden"!=e(t.element).visibility&&(t.element.className=t.element.className.replace("animated","").trim(),this.applyStyle(t,!0)),!1;if("hidden"!=e(t.element).visibility){if("1"!==t.element.getAttribute("data-vis"))return!1}else for(var s=r,l=this.manualBoxes,d=l.length;s!=document;){if("hidden"==e(s).visibility)return!1;for(var u=0;u<d;u++){var h=l[u];if(h&&h.element==s){for(r=s;r!=document;){var c=r.getAttribute("data-popup-type");if(c&&c.length>0){if(parseInt(c)>0)return"reverse"!=this.vendorCSS(s,"animation-direction");break}r=r.parentNode}break}}s=s.parentNode}n=t.offset||0;var p="innerHeight"in window?window.innerHeight:document.documentElement.clientHeight;a=0+Math.min(this.element.clientHeight,p)-n;var m,f;s=t.element;do{i=this.boundingRect(m=s)}while(!(i.bottom-i.top)&&s.children.length&&("A"==(f=(s=s.children[s.children.length-1]).tagName.toUpperCase())||"PICTURE"==f));return m!=s&&(i=this.boundingRect(s)),i.bottom-i.top&&i.top<=a&&i.bottom>=0},n}()}).call(this),wl=new woolite,wl.init();
