parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wzuc":[function(require,module,exports) {
let e=1;c(e);let t=document.getElementById("slidePrev"),n=document.getElementById("slideNext"),l=document.getElementById("slideOne"),d=document.getElementById("slideTwo"),i=document.getElementById("slideThree");function c(t){var n,l=document.getElementsByClassName("review-slider__item"),d=document.getElementsByClassName("review-slider-dots__item");for(t>l.length&&(e=1),t<1&&(e=l.length),n=0;n<l.length;n++)l[n].style.display="none";for(n=0;n<d.length;n++)d[n].className=d[n].className.replace(" active","");l[e-1].style.display="block",d[e-1].className+=" active"}n.addEventListener("click",function(){c(e+=1)}),t.addEventListener("click",function(){c(e-=1)}),l.addEventListener("click",function(){c(e=1)}),d.addEventListener("click",function(){c(e=2)}),i.addEventListener("click",function(){c(e=3)});
},{}]},{},["wzuc"], null)
//# sourceMappingURL=/team_project_ICECREAM/slider.802d6aa5.js.map