!function(){for(var e=navigator.userAgent,t=/iPad|iPhone|iPod/.test(e)&&!window.MSStream,a=/Version\//g,i=!t&&/Safari/.test(e)&&a.test(e)&&parseInt(e.substring(a.lastIndex))>=13,n=document.getElementsByClassName("fbk"),s=n.length-1;s>=0;s--){var l=n[s],d=l.getAttribute("data-fbk");if(i||t||l.getAttribute("data-ffbk")){var r=new RegExp("(fbk|"+d+")s*","g");if(l.className=l.className.replace(r,""),"BODY"!=l.nodeName){l.style.overflow="hidden";var o=document.createElement("div");o.style.position="absolute",o.style.width="100%",o.style.height="100%",o.style.clipPath=i||t?"content-box":"circle(999999px)",l.children.length?l.insertBefore(o,l.children[l.children[0].className.indexOf("bd")>=0?1:0]):l.appendChild(o),l=o}var c=document.createElement("div");c.className=d,c.style.position="fixed",c.style.width="100vw",c.style.height="100vh",c.style.top=c.style.left=0,t&&"BODY"!=l.nodeName||(c.style.zIndex="-1000"),c.style.backgroundAttachment="initial",l.appendChild(c)}}}();
