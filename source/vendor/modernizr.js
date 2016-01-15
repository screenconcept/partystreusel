/*! modernizr 3.3.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-csscalc-csstransforms-csstransforms3d-csstransitions-flexbox-flexboxlegacy-flexboxtweener-flexwrap-inlinesvg-preserve3d-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function s(){var e,n,t,s,i,o,a;for(var f in x)if(x.hasOwnProperty(f)){if(e=[],n=x[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)o=e[i],a=o.split("."),1===a.length?Modernizr[a[0]]=s:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=s),y.push((s?"":"no-")+a.join("-"))}}function i(e){var n=C.className,t=Modernizr._config.classPrefix||"";if(S&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),S?C.className.baseVal=n:C.className=n)}function o(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):S?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=o(S?"svg":"body"),e.fake=!0),e}function f(e,t,r,s){var i,f,l,d,u="modernizr",p=o("div"),c=a();if(parseInt(r,10))for(;r--;)l=o("div"),l.id=s?s[r]:u+(r+1),p.appendChild(l);return i=o("style"),i.type="text/css",i.id="s"+u,(c.fake?c:p).appendChild(i),c.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",d=C.style.overflow,C.style.overflow="hidden",C.appendChild(c)),f=t(p,e),c.fake?(c.parentNode.removeChild(c),C.style.overflow=d,C.offsetHeight):p.parentNode.removeChild(p),!!f}function l(e,n){return!!~(""+e).indexOf(n)}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function u(e,n){return function(){return e.apply(n,arguments)}}function p(e,n,t){var s;for(var i in e)if(e[i]in n)return t===!1?e[i]:(s=n[e[i]],r(s,"function")?u(s,t||n):s);return!1}function c(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,r){var s=n.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(c(n[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];s--;)i.push("("+c(n[s])+":"+r+")");return i=i.join(" or "),f("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function v(e,n,s,i){function a(){u&&(delete N.style,delete N.modElem)}if(i=r(i,"undefined")?!1:i,!r(s,"undefined")){var f=m(e,s);if(!r(f,"undefined"))return f}for(var u,p,c,v,h,g=["modernizr","tspan"];!N.style;)u=!0,N.modElem=o(g.shift()),N.style=N.modElem.style;for(c=e.length,p=0;c>p;p++)if(v=e[p],h=N.style[v],l(v,"-")&&(v=d(v)),N.style[v]!==t){if(i||r(s,"undefined"))return a(),"pfx"==n?v:!0;try{N.style[v]=s}catch(y){}if(N.style[v]!=h)return a(),"pfx"==n?v:!0}return a(),!1}function h(e,n,t,s,i){var o=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+E.join(o+" ")+o).split(" ");return r(n,"string")||r(n,"undefined")?v(a,n,s,i):(a=(e+" "+k.join(o+" ")+o).split(" "),p(a,n,t))}function g(e,n,r){return h(e,t,t,n,r)}var y=[],x=[],w={_version:"3.3.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){x.push({name:e,fn:n,options:t})},addAsyncTest:function(e){x.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var C=n.documentElement,S="svg"===C.nodeName.toLowerCase();Modernizr.addTest("inlinesvg",function(){var e=o("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var _=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];w._prefixes=_,Modernizr.addTest("csscalc",function(){var e="width:",n="calc(10px);",t=o("a");return t.style.cssText=e+_.join(n+e),!!t.style.length});var b="CSS"in e&&"supports"in e.CSS,T="supportsCSS"in e;Modernizr.addTest("supports",b||T);var P=w.testStyles=f,z="Moz O ms Webkit",E=w._config.usePrefixes?z.split(" "):[];w._cssomPrefixes=E;var k=w._config.usePrefixes?z.toLowerCase().split(" "):[];w._domPrefixes=k;var A={elem:o("modernizr")};Modernizr._q.push(function(){delete A.elem});var N={style:A.elem.style};Modernizr._q.unshift(function(){delete N.style}),w.testAllProps=h,w.testAllProps=g,Modernizr.addTest("flexbox",g("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",g("boxDirection","reverse",!0)),Modernizr.addTest("flexboxtweener",g("flexAlign","end",!0)),Modernizr.addTest("flexwrap",g("flexWrap","wrap",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&g("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!g("perspective","1px",!0),n=Modernizr._config.usePrefixes;if(e&&(!n||"webkitPerspective"in C.style)){var t,r="#modernizr{width:0;height:0}";Modernizr.supports?t="@supports (perspective: 1px)":(t="@media (transform-3d)",n&&(t+=",(-webkit-transform-3d)")),t+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",P(r+t,function(n){e=7===n.offsetWidth&&18===n.offsetHeight})}return e}),Modernizr.addTest("preserve3d",g("transformStyle","preserve-3d")),Modernizr.addTest("csstransitions",g("transition","all",!0)),s(),i(y),delete w.addTest,delete w.addAsyncTest;for(var j=0;j<Modernizr._q.length;j++)Modernizr._q[j]();e.Modernizr=Modernizr}(window,document);
