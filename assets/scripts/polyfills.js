!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,n){n(2),n(1)},function(e,t){!function(t,n){var r=function(e,t){"use strict";if(t.getElementsByClassName){var n,r=t.documentElement,i=e.Date,s=e.HTMLPictureElement,a=e.addEventListener,c=e.setTimeout,o=e.requestAnimationFrame||c,u=e.requestIdleCallback,l=/^picture$/i,d=["load","error","lazyincluded","_lazyloaded"],f={},p=Array.prototype.forEach,m=function(e,t){return f[t]||(f[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),f[t].test(e.getAttribute("class")||"")&&f[t]},h=function(e,t){m(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},A=function(e,t){var n;(n=m(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},g=function(e,t,n){var r=n?"addEventListener":"removeEventListener";n&&g(e,t),d.forEach(function(n){e[r](n,t)})},v=function(e,n,r,i,s){var a=t.createEvent("CustomEvent");return a.initCustomEvent(n,!i,!s,r||{}),e.dispatchEvent(a),a},y=function(t,r){var i;!s&&(i=e.picturefill||n.pf)?i({reevaluate:!0,elements:[t]}):r&&r.src&&(t.src=r.src)},z=function(e,t){return(getComputedStyle(e,null)||{})[t]},b=function(e,t,r){for(r=r||e.offsetWidth;r<n.minSize&&t&&!e._lazysizesWidth;)r=t.offsetWidth,t=t.parentNode;return r},w=function(){var e,n,r=[],i=[],s=r,a=function(){var t=s;for(s=r.length?i:r,e=!0,n=!1;t.length;)t.shift()();e=!1},u=function(r,i){e&&!i?r.apply(this,arguments):(s.push(r),n||(n=!0,(t.hidden?c:o)(a)))};return u._lsFlush=a,u}(),E=function(e,t){return t?function(){w(e)}:function(){var t=this,n=arguments;w(function(){e.apply(t,n)})}},C=function(e){var t,n=0,r=666,s=function(){t=!1,n=i.now(),e()},a=u?function(){u(s,{timeout:r}),666!==r&&(r=666)}:E(function(){c(s)},!0);return function(e){var s;(e=!0===e)&&(r=44),t||(t=!0,s=125-(i.now()-n),s<0&&(s=0),e||s<9&&u?a():c(a,s))}},x=function(e){var t,n,r=function(){t=null,e()},s=function(){var e=i.now()-n;e<99?c(s,99-e):(u||r)(r)};return function(){n=i.now(),t||(t=c(s,99))}},S=function(){var s,o,u,d,f,b,S,T,L,R,B,P,W,N,D,k=/^img$/i,$=/^iframe$/i,_="onscroll"in e&&!/glebot/.test(navigator.userAgent),I=0,F=0,U=-1,O=function(e){F--,e&&e.target&&g(e.target,O),(!e||F<0||!e.target)&&(F=0)},H=function(e,n){var i,s=e,a="hidden"==z(t.body,"visibility")||"hidden"!=z(e,"visibility");for(L-=n,P+=n,R-=n,B+=n;a&&(s=s.offsetParent)&&s!=t.body&&s!=r;)(a=(z(s,"opacity")||1)>0)&&"visible"!=z(s,"overflow")&&(i=s.getBoundingClientRect(),a=B>i.left&&R<i.right&&P>i.top-1&&L<i.bottom+1);return a},Q=function(){var e,i,a,c,l,d,p,m,h;if((f=n.loadMode)&&F<8&&(e=s.length)){i=0,U++,null==N&&("expand"in n||(n.expand=r.clientHeight>500&&r.clientWidth>500?500:370),W=n.expand,N=W*n.expFactor),I<N&&F<1&&U>2&&f>2&&!t.hidden?(I=N,U=0):I=f>1&&U>1&&F<6?W:0;for(;i<e;i++)if(s[i]&&!s[i]._lazyRace)if(_)if((m=s[i].getAttribute("data-expand"))&&(d=1*m)||(d=I),h!==d&&(S=innerWidth+d*D,T=innerHeight+d,p=-1*d,h=d),a=s[i].getBoundingClientRect(),(P=a.bottom)>=p&&(L=a.top)<=T&&(B=a.right)>=p*D&&(R=a.left)<=S&&(P||B||R||L)&&(u&&F<3&&!m&&(f<3||U<4)||H(s[i],d))){if(Y(s[i]),l=!0,F>9)break}else!l&&u&&!c&&F<4&&U<4&&f>2&&(o[0]||n.preloadAfterLoad)&&(o[0]||!m&&(P||B||R||L||"auto"!=s[i].getAttribute(n.sizesAttr)))&&(c=o[0]||s[i]);else Y(s[i]);c&&!l&&Y(c)}},G=C(Q),j=function(e){h(e.target,n.loadedClass),A(e.target,n.loadingClass),g(e.target,V)},q=E(j),V=function(e){q({target:e.target})},K=function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}},J=function(e){var t,r,i=e.getAttribute(n.srcsetAttr);(t=n.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),i&&e.setAttribute("srcset",i),t&&(r=e.parentNode,r.insertBefore(e.cloneNode(),e),r.removeChild(e))},X=E(function(e,t,r,i,s){var a,o,u,f,m,z;(m=v(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(r?h(e,n.autosizesClass):e.setAttribute("sizes",i)),o=e.getAttribute(n.srcsetAttr),a=e.getAttribute(n.srcAttr),s&&(u=e.parentNode,f=u&&l.test(u.nodeName||"")),z=t.firesLoad||"src"in e&&(o||a||f),m={target:e},z&&(g(e,O,!0),clearTimeout(d),d=c(O,2500),h(e,n.loadingClass),g(e,V,!0)),f&&p.call(u.getElementsByTagName("source"),J),o?e.setAttribute("srcset",o):a&&!f&&($.test(e.nodeName)?K(e,a):e.src=a),(o||f)&&y(e,{src:a})),e._lazyRace&&delete e._lazyRace,A(e,n.lazyClass),w(function(){(!z||e.complete&&e.naturalWidth>1)&&(z?O(m):F--,j(m))},!0)}),Y=function(e){var t,r=k.test(e.nodeName),i=r&&(e.getAttribute(n.sizesAttr)||e.getAttribute("sizes")),s="auto"==i;(!s&&u||!r||!e.src&&!e.srcset||e.complete||m(e,n.errorClass))&&(t=v(e,"lazyunveilread").detail,s&&M.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,F++,X(e,t,s,i,r))},Z=function(){if(!u){if(i.now()-b<999)return void c(Z,999);var e=x(function(){n.loadMode=3,G()});u=!0,n.loadMode=3,G(),a("scroll",function(){3==n.loadMode&&(n.loadMode=2),e()},!0)}};return{_:function(){b=i.now(),s=t.getElementsByClassName(n.lazyClass),o=t.getElementsByClassName(n.lazyClass+" "+n.preloadClass),D=n.hFac,a("scroll",G,!0),a("resize",G,!0),e.MutationObserver?new MutationObserver(G).observe(r,{childList:!0,subtree:!0,attributes:!0}):(r.addEventListener("DOMNodeInserted",G,!0),r.addEventListener("DOMAttrModified",G,!0),setInterval(G,999)),a("hashchange",G,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t.addEventListener(e,G,!0)}),/d$|^c/.test(t.readyState)?Z():(a("load",Z),t.addEventListener("DOMContentLoaded",G),c(Z,2e4)),s.length?(Q(),w._lsFlush()):G()},checkElems:G,unveil:Y}}(),M=function(){var e,r=E(function(e,t,n,r){var i,s,a;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),l.test(t.nodeName||""))for(i=t.getElementsByTagName("source"),s=0,a=i.length;s<a;s++)i[s].setAttribute("sizes",r);n.detail.dataAttr||y(e,n.detail)}),i=function(e,t,n){var i,s=e.parentNode;s&&(n=b(e,s,n),i=v(e,"lazybeforesizes",{width:n,dataAttr:!!t}),i.defaultPrevented||(n=i.detail.width)&&n!==e._lazysizesWidth&&r(e,s,i,n))},s=function(){var t,n=e.length;if(n)for(t=0;t<n;t++)i(e[t])},c=x(s);return{_:function(){e=t.getElementsByClassName(n.autosizesClass),a("resize",c)},checkElems:c,updateElem:i}}(),T=function(){T.i||(T.i=!0,M._(),S._())};return function(){var t,r={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2};n=e.lazySizesConfig||e.lazysizesConfig||{};for(t in r)t in n||(n[t]=r[t]);e.lazySizesConfig=n,c(function(){n.init&&T()})}(),{cfg:n,autoSizer:M,loader:S,init:T,uP:y,aC:h,rC:A,hC:m,fire:v,gW:b,rAF:w}}}(t,t.document);t.lazySizes=r,"object"==typeof e&&e.exports&&(e.exports=r)}(window)},function(e,t,n){var r;/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
/*! Gecko-Picture - v1.0
 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
 * Firefox's early picture implementation (prior to FF41) is static and does
 * not react to viewport changes. This tiny module fixes this.
 */
!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,n=document.createElement("source"),r=function(e){var t,r,i=e.parentNode;"PICTURE"===i.nodeName.toUpperCase()?(t=n.cloneNode(),i.insertBefore(t,i.firstElementChild),setTimeout(function(){i.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))},i=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)r(t[e])},s=function(){clearTimeout(t),t=setTimeout(i,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),c=function(){s(),a&&a.addListener&&a.addListener(s)};return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?c():document.addEventListener("DOMContentLoaded",c),s}())}(window),/*! Picturefill - v3.0.2
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
 *  License: MIT
 */
function(i,s,a){"use strict";function c(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function o(){k=!1,I=i.devicePixelRatio,$={},_={},z.DPR=I||1,F.width=Math.max(i.innerWidth||0,M.clientWidth),F.height=Math.max(i.innerHeight||0,M.clientHeight),F.vw=F.width/100,F.vh=F.height/100,y=[F.height,F.width,I].join("-"),F.em=z.getEmValue(),F.rem=F.em}function u(e,t,n,r){var i,s,a,c;return"saveData"===L.algorithm?e>2.7?c=n+1:(s=t-n,i=Math.pow(e-.6,1.5),a=s*i,r&&(a+=.1*i),c=e+a):c=n>1?Math.sqrt(e*t):e,c>n}function l(e){var t,n=z.getSet(e),r=!1;"pending"!==n&&(r=y,n&&(t=z.setRes(n),z.applySetCandidate(t,e))),e[z.ns].evaled=r}function d(e,t){return e.res-t.res}function f(e,t,n){var r;return!n&&t&&(n=e[z.ns].sets,n=n&&n[n.length-1]),r=p(t,n),r&&(t=z.makeUrl(t),e[z.ns].curSrc=t,e[z.ns].curCan=r,r.res||Y(r,r.set.sizes)),r}function p(e,t){var n,r,i;if(e&&t)for(i=z.parseSet(t),e=z.makeUrl(e),n=0;n<i.length;n++)if(e===z.makeUrl(i[n].url)){r=i[n];break}return r}function m(e,t){var n,r,i,s,a=e.getElementsByTagName("source");for(n=0,r=a.length;n<r;n++)i=a[n],i[z.ns]=!0,(s=i.getAttribute("srcset"))&&t.push({srcset:s,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")})}function h(e,t){function n(t){var n,r=t.exec(e.substring(d));if(r)return n=r[0],d+=n.length,n}function r(){var e,n,r,a,c,o,u,l,d,p=!1,m={};for(a=0;a<s.length;a++)c=s[a],o=c[c.length-1],u=c.substring(0,c.length-1),l=parseInt(u,10),d=parseFloat(u),q.test(u)&&"w"===o?((e||n)&&(p=!0),0===l?p=!0:e=l):V.test(u)&&"x"===o?((e||n||r)&&(p=!0),d<0?p=!0:n=d):q.test(u)&&"h"===o?((r||n)&&(p=!0),0===l?p=!0:r=l):p=!0;p||(m.url=i,e&&(m.w=e),n&&(m.d=n),r&&(m.h=r),r||n||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,f.push(m))}for(var i,s,a,o,u,l=e.length,d=0,f=[];;){if(n(Q),d>=l)return f;i=n(G),s=[],","===i.slice(-1)?(i=i.replace(j,""),r()):function(){for(n(H),a="",o="in descriptor";;){if(u=e.charAt(d),"in descriptor"===o)if(c(u))a&&(s.push(a),a="",o="after descriptor");else{if(","===u)return d+=1,a&&s.push(a),void r();if("("===u)a+=u,o="in parens";else{if(""===u)return a&&s.push(a),void r();a+=u}}else if("in parens"===o)if(")"===u)a+=u,o="in descriptor";else{if(""===u)return s.push(a),void r();a+=u}else if("after descriptor"===o)if(c(u));else{if(""===u)return void r();o="in descriptor",d-=1}d+=1}}()}}function A(e){var t,n,r,i,s,a,o=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,u=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(n=function(e){function t(){i&&(s.push(i),i="")}function n(){s[0]&&(a.push(s),s=[])}for(var r,i="",s=[],a=[],o=0,u=0,l=!1;;){if(""===(r=e.charAt(u)))return t(),n(),a;if(l){if("*"===r&&"/"===e[u+1]){l=!1,u+=2,t();continue}u+=1}else{if(c(r)){if(e.charAt(u-1)&&c(e.charAt(u-1))||!i){u+=1;continue}if(0===o){t(),u+=1;continue}r=" "}else if("("===r)o+=1;else if(")"===r)o-=1;else{if(","===r){t(),n(),u+=1;continue}if("/"===r&&"*"===e.charAt(u+1)){l=!0,u+=2;continue}}i+=r,u+=1}}}(e),r=n.length,t=0;t<r;t++)if(i=n[t],s=i[i.length-1],function(e){return!!(o.test(e)&&parseFloat(e)>=0)||(!!u.test(e)||("0"===e||"-0"===e||"+0"===e))}(s)){if(a=s,i.pop(),0===i.length)return a;if(i=i.join(" "),z.matchesMedia(i))return a}return"100vw"}s.createElement("picture");var g,v,y,z={},b=!1,w=function(){},E=s.createElement("img"),C=E.getAttribute,x=E.setAttribute,S=E.removeAttribute,M=s.documentElement,T={},L={algorithm:""},R=navigator.userAgent,B=/rident/.test(R)||/ecko/.test(R)&&R.match(/rv\:(\d+)/)&&RegExp.$1>35,P="currentSrc",W=/\s+\+?\d+(e\d+)?w/,N=i.picturefillCFG,D="font-size:100%!important;",k=!0,$={},_={},I=i.devicePixelRatio,F={px:1,in:96},U=s.createElement("a"),O=!1,H=/^[ \t\n\r\u000c]+/,Q=/^[, \t\n\r\u000c]+/,G=/^[^ \t\n\r\u000c]+/,j=/[,]+$/,q=/^\d+$/,V=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,K=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},J=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}},X=function(){var e=function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n},t=J(function(t){return"return "+e((t||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(e,n){var r;if(!(e in $))if($[e]=!1,n&&(r=e.match(/^([\d\.]+)(em|vw|px)$/)))$[e]=r[1]*F[r[2]];else try{$[e]=new Function("e",t(e))(F)}catch(e){}return $[e]}}(),Y=function(e,t){return e.w?(e.cWidth=z.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},Z=function(e){if(b){var t,n,r,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),t=i.elements||z.qsa(i.context||s,i.reevaluate||i.reselect?z.sel:z.selShort),r=t.length){for(z.setupRun(i),O=!0,n=0;n<r;n++)z.fillImg(t[n],i);z.teardownRun(i)}}};i.console&&console.warn,P in E||(P="src"),T["image/jpeg"]=!0,T["image/gif"]=!0,T["image/png"]=!0,T["image/svg+xml"]=s.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),z.ns=("pf"+(new Date).getTime()).substr(0,9),z.supSrcset="srcset"in E,z.supSizes="sizes"in E,z.supPicture=!!i.HTMLPictureElement,z.supSrcset&&z.supPicture&&!z.supSizes&&function(e){E.srcset="data:,a",e.src="data:,a",z.supSrcset=E.complete===e.complete,z.supPicture=z.supSrcset&&z.supPicture}(s.createElement("img")),z.supSrcset&&!z.supSizes?function(){var e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=s.createElement("img"),n=function(){2===t.width&&(z.supSizes=!0),v=z.supSrcset&&!z.supSizes,b=!0,setTimeout(Z)};t.onload=n,t.onerror=n,t.setAttribute("sizes","9px"),t.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",t.src=e}():b=!0,z.selShort="picture>img,img[srcset]",z.sel=z.selShort,z.cfg=L,z.DPR=I||1,z.u=F,z.types=T,z.setSize=w,z.makeUrl=J(function(e){return U.href=e,U.href}),z.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},z.matchesMedia=function(){return i.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?z.matchesMedia=function(e){return!e||matchMedia(e).matches}:z.matchesMedia=z.mMQ,z.matchesMedia.apply(this,arguments)},z.mMQ=function(e){return!e||X(e)},z.calcLength=function(e){var t=X(e,!0)||!1;return t<0&&(t=!1),t},z.supportsType=function(e){return!e||T[e]},z.parseSize=J(function(e){var t=(e||"").match(/(\([^)]+\))?\s*(.+)/);return{media:t&&t[1],length:t&&t[2]}}),z.parseSet=function(e){return e.cands||(e.cands=h(e.srcset,e)),e.cands},z.getEmValue=function(){var e;if(!g&&(e=s.body)){var t=s.createElement("div"),n=M.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",M.style.cssText=D,e.style.cssText=D,e.appendChild(t),g=t.offsetWidth,e.removeChild(t),g=parseFloat(g,10),M.style.cssText=n,e.style.cssText=r}return g||16},z.calcListLength=function(e){if(!(e in _)||L.uT){var t=z.calcLength(A(e));_[e]=t||F.width}return _[e]},z.setRes=function(e){var t;if(e){t=z.parseSet(e);for(var n=0,r=t.length;n<r;n++)Y(t[n],e.sizes)}return t},z.setRes.res=Y,z.applySetCandidate=function(e,t){if(e.length){var n,r,i,s,a,c,o,l,p,m=t[z.ns],h=z.DPR;if(c=m.curSrc||t[P],o=m.curCan||f(t,c,e[0].set),o&&o.set===e[0].set&&((p=B&&!t.complete&&o.res-.1>h)||(o.cached=!0,o.res>=h&&(a=o))),!a)for(e.sort(d),s=e.length,a=e[s-1],r=0;r<s;r++)if(n=e[r],n.res>=h){i=r-1,a=e[i]&&(p||c!==z.makeUrl(n.url))&&u(e[i].res,n.res,h,e[i].cached)?e[i]:n;break}a&&(l=z.makeUrl(a.url),m.curSrc=l,m.curCan=a,l!==c&&z.setSrc(t,a),z.setSize(t))}},z.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},z.getSet=function(e){var t,n,r,i=!1,s=e[z.ns].sets;for(t=0;t<s.length&&!i;t++)if(n=s[t],n.srcset&&z.matchesMedia(n.media)&&(r=z.supportsType(n.type))){"pending"===r&&(n=r),i=n;break}return i},z.parseSets=function(e,t,n){var r,i,s,a,c=t&&"PICTURE"===t.nodeName.toUpperCase(),o=e[z.ns];(void 0===o.src||n.src)&&(o.src=C.call(e,"src"),o.src?x.call(e,"data-pfsrc",o.src):S.call(e,"data-pfsrc")),(void 0===o.srcset||n.srcset||!z.supSrcset||e.srcset)&&(r=C.call(e,"srcset"),o.srcset=r,a=!0),o.sets=[],c&&(o.pic=!0,m(t,o.sets)),o.srcset?(i={srcset:o.srcset,sizes:C.call(e,"sizes")},o.sets.push(i),(s=(v||o.src)&&W.test(o.srcset||""))||!o.src||p(o.src,i)||i.has1x||(i.srcset+=", "+o.src,i.cands.push({url:o.src,d:1,set:i}))):o.src&&o.sets.push({srcset:o.src,sizes:null}),o.curCan=null,o.curSrc=void 0,o.supported=!(c||i&&!z.supSrcset||s&&!z.supSizes),a&&z.supSrcset&&!o.supported&&(r?(x.call(e,"data-pfsrcset",r),e.srcset=""):S.call(e,"data-pfsrcset")),o.supported&&!o.srcset&&(!o.src&&e.src||e.src!==z.makeUrl(o.src))&&(null===o.src?e.removeAttribute("src"):e.src=o.src),o.parsed=!0},z.fillImg=function(e,t){var n,r=t.reselect||t.reevaluate;e[z.ns]||(e[z.ns]={}),n=e[z.ns],(r||n.evaled!==y)&&(n.parsed&&!t.reevaluate||z.parseSets(e,e.parentNode,t),n.supported?n.evaled=y:l(e))},z.setupRun=function(){O&&!k&&I===i.devicePixelRatio||o()},z.supPicture?(Z=w,z.fillImg=w):function(){var e,t=i.attachEvent?/d$|^c/:/d$|^c|^i/,n=function(){var i=s.readyState||"";r=setTimeout(n,"loading"===i?200:999),s.body&&(z.fillImgs(),(e=e||t.test(i))&&clearTimeout(r))},r=setTimeout(n,s.body?9:99),a=M.clientHeight,c=function(){k=Math.max(i.innerWidth||0,M.clientWidth)!==F.width||M.clientHeight!==a,a=M.clientHeight,k&&z.fillImgs()};K(i,"resize",function(e,t){var n,r,i=function(){var s=new Date-r;s<t?n=setTimeout(i,t-s):(n=null,e())};return function(){r=new Date,n||(n=setTimeout(i,t))}}(c,99)),K(s,"readystatechange",n)}(),z.picturefill=Z,z.fillImgs=Z,z.teardownRun=w,Z._=z,i.picturefillCFG={pf:z,push:function(e){var t=e.shift();"function"==typeof z[t]?z[t].apply(z,e):(L[t]=e[0],O&&z.fillImgs({reselect:!0}))}};for(;N&&N.length;)i.picturefillCFG.push(N.shift());i.picturefill=Z,"object"==typeof e&&"object"==typeof e.exports?e.exports=Z:void 0!==(r=function(){return Z}.call(t,n,t,e))&&(e.exports=r),z.supPicture||(T["image/webp"]=function(e,t){var n=new i.Image;return n.onerror=function(){T[e]=!1,Z()},n.onload=function(){T[e]=1===n.width,Z()},n.src=t,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document)},function(e,t,n){e.exports=n(0)}]);