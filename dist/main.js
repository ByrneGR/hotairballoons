!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);var o=document.querySelector("audio"),a=document.querySelector("#pause_animation"),r=document.querySelector("#begin_container");o.src="./dist/assets/westayedupallnight.mp3";var i=new AudioContext,u=i.createMediaElementSource(o),c=i.createAnalyser();i.createGain();u.connect(c),c.connect(i.destination),c.fftSize=256;var l=c.frequencyBinCount,d=new Uint8Array(l);function m(){var e=document.getElementById("svgObject").contentDocument.querySelector("svg").outerHTML,t=window.btoa(e);document.getElementById("html_ele").style.backgroundImage="url(data:image/svg+xml;base64,"+t+")"}function s(){document.getElementById("svgObject").contentDocument.querySelector("svg").querySelectorAll(".tree_animation").forEach((function(e){var t=e.style;"running"===t.webkitAnimationPlayState?(t.webkitAnimationPlayState="paused",t.animationPlayState="paused",t.mozAnimationPlayState="paused",t.oAnimationPlayState="paused",m()):(t.webkitAnimationPlayState="running",t.animationPlayState="running",t.mozAnimationPlayState="running",t.oAnimationPlayState="running",t.webkitAnimationPlayState="running",m())}))}function y(e){e.style.display="none"}function f(e){e.style.display="block"}function g(){c.getByteFrequencyData(d)}c.getByteTimeDomainData(d),setInterval(g,500),window.onload=function(){var e,t,n,r,i,u;(e=document.getElementById("svgObjectNoFill")).contentDocument,t=e.contentDocument.querySelector("svg").outerHTML,n=window.btoa(t),document.getElementById("html_ele").style.backgroundImage="url(data:image/svg+xml;base64,"+n+")",r=document.getElementById("balloon2"),i=-60,u=30,setInterval((function(){i<52?i+=.015:(i=-60,u=30),i<-5?u-=.008:u+=.008,r.style.transform="translate( "+i+"vw, "+u+"vw )"}),10),y(o),y(a)},document.querySelector("#session_btn").addEventListener("click",(function e(){o.play(),document.removeEventListener("click",e),s(),y(r),f(o),f(a)})),document.querySelector("#pause_animation").addEventListener("click",s),document.querySelector("#logo_top_left").addEventListener("click",(function(){return location.reload(),!1}))},function(e,t,n){}]);
//# sourceMappingURL=main.js.map