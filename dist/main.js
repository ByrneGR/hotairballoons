!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1);var o=n(2),i=n(3),r=n(4),a=new i,u=document.querySelector("audio"),c=document.querySelector("#pause_animation"),l=document.querySelector("#begin_container");function d(t){t.style.display="block"}window.onload=function(){a.printNoFillSky();new o},document.querySelector("#session_btn").addEventListener("click",(function(){a.toggleAnimation(),u.play(),l.style.display="none",d(u),d(c);new r})),document.querySelector("#pause_animation").addEventListener("click",(function(){a.toggleAnimation()})),document.querySelector("#logo_top_left").addEventListener("click",(function(){return location.reload(),!1}))},function(t,e,n){},function(t,e){function n(){this.launchBalloon()}n.prototype.launchBalloon=function(){var t=document.getElementById("balloon2"),e=-60,n=30;setInterval((function(){e<52?e+=.015:(e=-60,n=30);e<-5?n-=.008:n+=.008;t.style.transform="translate( "+e+"vw, "+n+"vw )"}),10)},t.exports=n},function(t,e){function n(){}n.prototype.printSky=function(){var t=document.getElementById("svgObject").contentDocument.querySelector("svg").outerHTML,e=window.btoa(t);document.getElementById("html_ele").style.backgroundImage="url(data:image/svg+xml;base64,"+e+")"},n.prototype.printNoFillSky=function(){var t=document.getElementById("svgObjectNoFill"),e=(t.contentDocument,t.contentDocument.querySelector("svg").outerHTML),n=window.btoa(e);document.getElementById("html_ele").style.backgroundImage="url(data:image/svg+xml;base64,"+n+")"},n.prototype.toggleAnimation=function(){var t=this;document.getElementById("svgObject").contentDocument.querySelector("svg").querySelectorAll(".tree_animation").forEach((function(e){var n=e.style;"running"===n.webkitAnimationPlayState?(n.webkitAnimationPlayState="paused",n.animationPlayState="paused",n.mozAnimationPlayState="paused",n.oAnimationPlayState="paused",t.printSky()):(n.webkitAnimationPlayState="running",n.animationPlayState="running",n.mozAnimationPlayState="running",n.oAnimationPlayState="running",n.webkitAnimationPlayState="running",t.printSky())}))},n.prototype.setAnimationRunning=function(){this.printSky(),document.getElementById("svgObject").contentDocument.querySelector("svg").querySelectorAll(".tree_animation").forEach((function(t){t.style.webkitAnimationPlayState="running"}))},t.exports=n},function(t,e){var n=document.querySelector("audio"),o=new AudioContext,i=o.createMediaElementSource(n),r=o.createAnalyser();i.connect(r);var a=document.getElementById("canvas"),u=a.getContext("2d"),c=r.frequencyBinCount,l=new Uint8Array(c);function d(){requestAnimationFrame(this.draw.bind(this))}d.prototype.draw=function(){u.beginPath(),u.arc(a.width/2,a.height/2,75,0,2^Math.PI),u.stroke(),r.getByteFrequencyData(l);for(var t=0;t<100;t++){var e=2*Math.PI/100,n=.5*l[t],o=a.width/2+75*Math.cos(e*t),i=a.height/2+75*Math.sin(e*t),c=a.width/2+Math.cos(e*t)*(75+n),d=a.height/2+Math.sin(e*t)*(75+n),y="rgb(200, "+(200-l[t])+", "+l[t]+")";u.strokeStyle=y,u.lineWidth=3,u.beginPath(),u.moveTo(o,i),u.lineTo(c,d),u.stroke()}requestAnimationFrame(this.draw.bind(this))},d.prototype.render=function(){r.getByteFrequencyData(l),console.log(l)},t.exports=d}]);
//# sourceMappingURL=main.js.map