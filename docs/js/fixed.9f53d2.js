!function(){for(var e=navigator.userAgent,t=/iPad|iPhone|iPod/.test(e)&&!window.MSStream,s=/Version\//g,a=!t&&/Safari/.test(e)&&s.test(e)&&parseInt(e.substring(s.lastIndex))>=13,i=document.getElementsByClassName("fbk"),l=i.length-1;l>=0;l--){var d=i[l],n=d.getAttribute("data-fbk");if(a||t||d.getAttribute("data-ffbk")){var o=new RegExp("(fbk|"+n+")s*","g");if(d.className=d.className.replace(o,""),"BODY"!=d.nodeName){d.style.overflow="hidden";var r=document.createElement("div");r.style.position="absolute",r.style.width="100%",r.style.height="100%",r.style.clipPath="content-box",r.style.webkitClipPath="circle(999999px)",d.children.length?d.insertBefore(r,d.children[d.children[0].className.indexOf("bd")>=0?1:0]):d.appendChild(r),d=r}var c=document.createElement("div");c.className=n,c.style.position="fixed",c.style.width="100vw",c.style.height="100vh",c.style.top=c.style.left=0,t&&"BODY"!=d.nodeName||(c.style.zIndex="-1000"),c.style.backgroundAttachment="initial",d.appendChild(c)}}}();