webpackJsonp([7,17],{1194:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),c=n.n(i),u=n(32),s=(n.n(u),n(242)),f=n.n(s),l=n(1419),p=n(1493),h=n(1420),v=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},d=function(t){var e=t.practiceAreas,n=t.entities;return y({},e,n)},b=function(t){return{onFetchPracticeAreas:function(){t(n.i(l.a)())}}},m=function(t){function e(t){r(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.renderButtonLinks=n.renderButtonLinks.bind(n),n}return a(e,t),v(e,[{key:"componentDidMount",value:function(){this.props.onFetchPracticeAreas()}},{key:"renderButtonLinks",value:function(){var t=this.props,e=t.practiceAreas,n=t.practiceAreaIds;return n.map(function(t){var n=e[t].area,r=e[t].slug;return c.a.createElement("div",{key:t,className:"col-sm-6"},c.a.createElement(p.a,{key:t,id:t,text:n,slug:"/practice-areas/"+r,imgSrc:e[t].thumbnailSrc,customClassNames:"btn-practice-area"}))})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("main",null,c.a.createElement(f.a,{title:"Our Practice Areas",meta:[{name:"description",content:"Our firm's practice areas."}]}),c.a.createElement("div",{className:"jumbotron",style:{backgroundImage:"url(https://www.conceptlawfirm.xyz/static/images/2000/melbourne-night.jpg)"}},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"text-uppercase"},"Practice Areas"),c.a.createElement("h3",null,"We excel at what we do"))),c.a.createElement("div",{className:"container-fluid"},this.renderButtonLinks())),c.a.createElement(h.a,null))}}]),e}(i.Component);e.default=n.i(u.connect)(d,b)(m)},1319:function(t,e,n){var r=n(1337),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},1320:function(t,e,n){function r(t,e){var n=a(t,e);return o(n)?n:void 0}var o=n(1365),a=n(1378);t.exports=r},1321:function(t,e,n){"use strict";function r(t){return{type:m.f,value:t}}function o(t){return{type:m.g,value:t}}function a(t){return{type:m.h,value:t}}function i(t){return{type:m.i,value:t}}function c(t){return{type:m.j,sortBy:t}}function u(t){return{type:m.k,value:t}}function s(t,e){return{type:m.l,records:t,recordIds:e}}function f(t,e,n){return{type:m.m,entities:t,addedRecord:e,addedRecordId:n}}function l(t,e,n){return{type:m.n,entities:t,editedRecord:e,editedRecordId:n}}function p(t,e,n){return{type:m.o,entities:t,records:e,recordIds:n}}function h(t,e){return{type:m.p,entities:t,commentId:e}}function v(t){return{type:m.q,formData:t}}function y(){return{type:m.r}}function d(){return{type:m.s}}function b(){return{type:m.t}}var m=n(33);e.h=r,e.i=o,e.n=a,e.l=i,e.g=c,e.f=u,e.a=s,e.b=f,e.c=l,e.e=p,e.d=h,e.o=v,e.j=y,e.k=d,e.m=b},1322:function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},1323:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){t[e]=n}function a(t,e,n,r,a){var i=r.assignEntity,c=void 0===i?o:i,u=e&&e.getDefaults&&e.getDefaults(),s=e&&e.getAssignEntity&&e.getAssignEntity(),f=(0,S.default)(u)?m({},u):{};for(var l in t)if(t.hasOwnProperty(l)){var h="function"==typeof e[l]?e[l].call(null,t):e[l],v=p(t[l],h,n,r,a);c.call(null,f,l,v,t,e),s&&s.call(null,f,l,v,t,e)}return f}function i(t,e,n,r){return function(t,o){return p(t,e,n,r,o)}}function c(t,e,n,r){return function(o,a){var i=t.getSchemaKey(o),c=p(o,e[i],n,r,a);return{id:c,schema:i}}}function u(t,e,n,r){var o=e.getItemSchema(),a=i(e,o,n,r);return Array.isArray(t)?t.map(a):Object.keys(t).reduce(function(e,n){return e[n]=a(t[n],n),e},{})}function s(t,e,n,r){var o=e.getItemSchema();return c(e,o,n,r)(t)}function f(t,e,n){for(var r in e)e.hasOwnProperty(r)&&(t.hasOwnProperty(r)&&!(0,A.default)(t[r],e[r])?console.warn("When merging two "+n+', found unequal data in their "'+r+'" values. Using the earlier value.',t[r],e[r]):t[r]=e[r])}function l(t,e,n,r,o){var i=r.mergeIntoEntity,c=void 0===i?f:i,u=e.getKey(),s=e.getId(t,o);n.hasOwnProperty(u)||(n[u]={}),n[u].hasOwnProperty(s)||(n[u][s]={});var l=n[u][s],p=a(t,e,n,r,o);return c(l,p,u),s}function p(t,e,n,r,o){return(0,S.default)(t)&&(0,S.default)(e)?e instanceof g.default?l(t,e,n,r,o):e instanceof j.default?u(t,e,n,r):e instanceof O.default?s(t,e,n,r):a(t,e,n,r,o):t}function h(t){return(0,S.default)(t)&&(0,A.default)(Object.keys(t),Object.keys(t).map(function(e){return t[e]}))?Object.keys(t):t}function v(t,e){return new j.default(t,e)}function y(t,e){return new j.default(t,e)}function d(t,e){return new O.default(t,e)}function b(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0,S.default)(t))throw new Error("Normalize accepts an object or an array as its input.");if(!(0,S.default)(e)||Array.isArray(e))throw new Error("Normalize accepts an object for schema.");var r={},o=p(t,e,r,n);return{entities:r,result:h(o)}}Object.defineProperty(e,"__esModule",{value:!0}),e.Schema=void 0;var m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.arrayOf=v,e.valuesOf=y,e.unionOf=d,e.normalize=b;var _=n(1417),g=r(_),w=n(1418),j=r(w),x=n(1344),O=r(x),E=n(1413),A=r(E),k=n(1322),S=r(k);e.Schema=g.default},1324:function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(1388),a=n(1389),i=n(1390),c=n(1391),u=n(1392);r.prototype.clear=o,r.prototype.delete=a,r.prototype.get=i,r.prototype.has=c,r.prototype.set=u,t.exports=r},1325:function(t,e,n){function r(t,e){for(var n=t.length;n--;)if(o(t[n][0],e))return n;return-1}var o=n(1339);t.exports=r},1326:function(t,e,n){function r(t){return null==t?void 0===t?u:c:s&&s in Object(t)?a(t):i(t)}var o=n(1332),a=n(1375),i=n(1401),c="[object Null]",u="[object Undefined]",s=o?o.toStringTag:void 0;t.exports=r},1327:function(t,e,n){function r(t,e){var n=t.__data__;return o(e)?n["string"==typeof e?"string":"hash"]:n.map}var o=n(1385);t.exports=r},1328:function(t,e,n){var r=n(1320),o=r(Object,"create");t.exports=o},1329:function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},1330:function(t,e,n){"use strict";var r=n(1323);n.n(r);n.d(e,"a",function(){return h}),n.d(e,"c",function(){return v}),n.d(e,"b",function(){return y}),n.d(e,"i",function(){return d}),n.d(e,"g",function(){return b}),n.d(e,"h",function(){return m}),n.d(e,"e",function(){return _}),n.d(e,"f",function(){return g}),n.d(e,"d",function(){return w});var o=new r.Schema("practiceAreas"),a=new r.Schema("posts"),i=new r.Schema("comments"),c=new r.Schema("users"),u=new r.Schema("staff"),s=new r.Schema("staffUsers",{idAttribute:"userId"}),f=new r.Schema("clients"),l=new r.Schema("clientUsers",{idAttribute:"userId"}),p=new r.Schema("matters"),h=(new r.Schema("currentUser"),o),v=a,y=i,d=c,b=u,m=s,_=f,g=l,w=p},1331:function(t,e,n){var r=n(1320),o=n(1319),a=r(o,"Map");t.exports=a},1332:function(t,e,n){var r=n(1319),o=r.Symbol;t.exports=o},1333:function(t,e){var n=Array.isArray;t.exports=n},1335:function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(1393),a=n(1394),i=n(1395),c=n(1396),u=n(1397);r.prototype.clear=o,r.prototype.delete=a,r.prototype.get=i,r.prototype.has=c,r.prototype.set=u,t.exports=r},1336:function(t,e,n){function r(t,e,n,r,s,f){var l=n&c,p=t.length,h=e.length;if(p!=h&&!(l&&h>p))return!1;var v=f.get(t);if(v&&f.get(e))return v==e;var y=-1,d=!0,b=n&u?new o:void 0;for(f.set(t,e),f.set(e,t);++y<p;){var m=t[y],_=e[y];if(r)var g=l?r(_,m,y,e,t,f):r(m,_,y,t,e,f);if(void 0!==g){if(g)continue;d=!1;break}if(b){if(!a(e,function(t,e){if(!i(b,e)&&(m===t||s(m,t,n,r,f)))return b.push(e)})){d=!1;break}}else if(m!==_&&!s(m,_,n,r,f)){d=!1;break}}return f.delete(t),f.delete(e),d}var o=n(1353),a=n(1360),i=n(1370),c=1,u=2;t.exports=r},1337:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,n(21))},1338:function(t,e){function n(t){if(null!=t){try{return o.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var r=Function.prototype,o=r.toString;t.exports=n},1339:function(t,e){function n(t,e){return t===e||t!==t&&e!==e}t.exports=n},1340:function(t,e,n){(function(t){var r=n(1319),o=n(1416),a="object"==typeof e&&e&&!e.nodeType&&e,i=a&&"object"==typeof t&&t&&!t.nodeType&&t,c=i&&i.exports===a,u=c?r.Buffer:void 0,s=u?u.isBuffer:void 0,f=s||o;t.exports=f}).call(e,n(106)(t))},1341:function(t,e,n){function r(t){if(!a(t))return!1;var e=o(t);return e==c||e==u||e==i||e==s}var o=n(1326),a=n(1322),i="[object AsyncFunction]",c="[object Function]",u="[object GeneratorFunction]",s="[object Proxy]";t.exports=r},1342:function(t,e){function n(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}var r=9007199254740991;t.exports=n},1343:function(t,e,n){var r=n(1366),o=n(1369),a=n(1400),i=a&&a.isTypedArray,c=i?o(i):r;t.exports=c},1344:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(1322),c=r(i),u=function(){function t(e,n){if(o(this,t),!(0,c.default)(e))throw new Error("UnionSchema requires item schema to be an object.");if(!n||!n.schemaAttribute)throw new Error("UnionSchema requires schemaAttribute option.");this._itemSchema=e;var r=n.schemaAttribute;this._getSchema="function"==typeof r?r:function(t){return t[r]}}return a(t,[{key:"getItemSchema",value:function(){return this._itemSchema}},{key:"getSchemaKey",value:function(t){return this._getSchema(t)}}]),t}();e.default=u},1349:function(t,e,n){var r=n(1320),o=n(1319),a=r(o,"DataView");t.exports=a},1350:function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(1379),a=n(1380),i=n(1381),c=n(1382),u=n(1383);r.prototype.clear=o,r.prototype.delete=a,r.prototype.get=i,r.prototype.has=c,r.prototype.set=u,t.exports=r},1351:function(t,e,n){var r=n(1320),o=n(1319),a=r(o,"Promise");t.exports=a},1352:function(t,e,n){var r=n(1320),o=n(1319),a=r(o,"Set");t.exports=a},1353:function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new o;++e<n;)this.add(t[e])}var o=n(1335),a=n(1403),i=n(1404);r.prototype.add=r.prototype.push=a,r.prototype.has=i,t.exports=r},1354:function(t,e,n){function r(t){var e=this.__data__=new o(t);this.size=e.size}var o=n(1324),a=n(1406),i=n(1407),c=n(1408),u=n(1409),s=n(1410);r.prototype.clear=a,r.prototype.delete=i,r.prototype.get=c,r.prototype.has=u,r.prototype.set=s,t.exports=r},1355:function(t,e,n){var r=n(1319),o=r.Uint8Array;t.exports=o},1356:function(t,e,n){var r=n(1320),o=n(1319),a=r(o,"WeakMap");t.exports=a},1357:function(t,e){function n(t,e){for(var n=-1,r=null==t?0:t.length,o=0,a=[];++n<r;){var i=t[n];e(i,n,t)&&(a[o++]=i)}return a}t.exports=n},1358:function(t,e,n){function r(t,e){var n=i(t),r=!n&&a(t),f=!n&&!r&&c(t),p=!n&&!r&&!f&&s(t),h=n||r||f||p,v=h?o(t.length,String):[],y=v.length;for(var d in t)!e&&!l.call(t,d)||h&&("length"==d||f&&("offset"==d||"parent"==d)||p&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||u(d,y))||v.push(d);return v}var o=n(1368),a=n(1411),i=n(1333),c=n(1340),u=n(1384),s=n(1343),f=Object.prototype,l=f.hasOwnProperty;t.exports=r},1359:function(t,e){function n(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}t.exports=n},1360:function(t,e){function n(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}t.exports=n},1361:function(t,e,n){function r(t,e,n){var r=e(t);return a(t)?r:o(r,n(t))}var o=n(1359),a=n(1333);t.exports=r},1362:function(t,e,n){function r(t){return a(t)&&o(t)==i}var o=n(1326),a=n(1329),i="[object Arguments]";t.exports=r},1363:function(t,e,n){function r(t,e,n,i,c){return t===e||(null==t||null==e||!a(t)&&!a(e)?t!==t&&e!==e:o(t,e,n,i,r,c))}var o=n(1364),a=n(1329);t.exports=r},1364:function(t,e,n){function r(t,e,n,r,d,m){var _=s(t),g=s(e),w=_?v:u(t),j=g?v:u(e);w=w==h?y:w,j=j==h?y:j;var x=w==y,O=j==y,E=w==j;if(E&&f(t)){if(!f(e))return!1;_=!0,x=!1}if(E&&!x)return m||(m=new o),_||l(t)?a(t,e,n,r,d,m):i(t,e,w,n,r,d,m);if(!(n&p)){var A=x&&b.call(t,"__wrapped__"),k=O&&b.call(e,"__wrapped__");if(A||k){var S=A?t.value():t,P=k?e.value():e;return m||(m=new o),d(S,P,n,r,m)}}return!!E&&(m||(m=new o),c(t,e,n,r,d,m))}var o=n(1354),a=n(1336),i=n(1372),c=n(1373),u=n(1377),s=n(1333),f=n(1340),l=n(1343),p=1,h="[object Arguments]",v="[object Array]",y="[object Object]",d=Object.prototype,b=d.hasOwnProperty;t.exports=r},1365:function(t,e,n){function r(t){if(!i(t)||a(t))return!1;var e=o(t)?v:s;return e.test(c(t))}var o=n(1341),a=n(1386),i=n(1322),c=n(1338),u=/[\\^$.*+?()[\]{}|]/g,s=/^\[object .+?Constructor\]$/,f=Function.prototype,l=Object.prototype,p=f.toString,h=l.hasOwnProperty,v=RegExp("^"+p.call(h).replace(u,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=r},1366:function(t,e,n){function r(t){return i(t)&&a(t.length)&&!!I[o(t)]}var o=n(1326),a=n(1342),i=n(1329),c="[object Arguments]",u="[object Array]",s="[object Boolean]",f="[object Date]",l="[object Error]",p="[object Function]",h="[object Map]",v="[object Number]",y="[object Object]",d="[object RegExp]",b="[object Set]",m="[object String]",_="[object WeakMap]",g="[object ArrayBuffer]",w="[object DataView]",j="[object Float32Array]",x="[object Float64Array]",O="[object Int8Array]",E="[object Int16Array]",A="[object Int32Array]",k="[object Uint8Array]",S="[object Uint8ClampedArray]",P="[object Uint16Array]",z="[object Uint32Array]",I={};I[j]=I[x]=I[O]=I[E]=I[A]=I[k]=I[S]=I[P]=I[z]=!0,I[c]=I[u]=I[g]=I[s]=I[w]=I[f]=I[l]=I[p]=I[h]=I[v]=I[y]=I[d]=I[b]=I[m]=I[_]=!1,t.exports=r},1367:function(t,e,n){function r(t){if(!o(t))return a(t);var e=[];for(var n in Object(t))c.call(t,n)&&"constructor"!=n&&e.push(n);return e}var o=n(1387),a=n(1399),i=Object.prototype,c=i.hasOwnProperty;t.exports=r},1368:function(t,e){function n(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}t.exports=n},1369:function(t,e){function n(t){return function(e){return t(e)}}t.exports=n},1370:function(t,e){function n(t,e){return t.has(e)}t.exports=n},1371:function(t,e,n){var r=n(1319),o=r["__core-js_shared__"];t.exports=o},1372:function(t,e,n){function r(t,e,n,r,o,x,E){switch(n){case j:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case w:return!(t.byteLength!=e.byteLength||!x(new a(t),new a(e)));case p:case h:case d:return i(+t,+e);case v:return t.name==e.name&&t.message==e.message;case b:case _:return t==e+"";case y:var A=u;case m:var k=r&f;if(A||(A=s),t.size!=e.size&&!k)return!1;var S=E.get(t);if(S)return S==e;r|=l,E.set(t,e);var P=c(A(t),A(e),r,o,x,E);return E.delete(t),P;case g:if(O)return O.call(t)==O.call(e)}return!1}var o=n(1332),a=n(1355),i=n(1339),c=n(1336),u=n(1398),s=n(1405),f=1,l=2,p="[object Boolean]",h="[object Date]",v="[object Error]",y="[object Map]",d="[object Number]",b="[object RegExp]",m="[object Set]",_="[object String]",g="[object Symbol]",w="[object ArrayBuffer]",j="[object DataView]",x=o?o.prototype:void 0,O=x?x.valueOf:void 0;t.exports=r},1373:function(t,e,n){function r(t,e,n,r,i,u){var s=n&a,f=o(t),l=f.length,p=o(e),h=p.length;if(l!=h&&!s)return!1;for(var v=l;v--;){var y=f[v];if(!(s?y in e:c.call(e,y)))return!1}var d=u.get(t);if(d&&u.get(e))return d==e;var b=!0;u.set(t,e),u.set(e,t);for(var m=s;++v<l;){y=f[v];var _=t[y],g=e[y];if(r)var w=s?r(g,_,y,e,t,u):r(_,g,y,t,e,u);if(!(void 0===w?_===g||i(_,g,n,r,u):w)){b=!1;break}m||(m="constructor"==y)}if(b&&!m){var j=t.constructor,x=e.constructor;j!=x&&"constructor"in t&&"constructor"in e&&!("function"==typeof j&&j instanceof j&&"function"==typeof x&&x instanceof x)&&(b=!1)}return u.delete(t),u.delete(e),b}var o=n(1374),a=1,i=Object.prototype,c=i.hasOwnProperty;t.exports=r},1374:function(t,e,n){function r(t){return o(t,i,a)}var o=n(1361),a=n(1376),i=n(1414);t.exports=r},1375:function(t,e,n){function r(t){var e=i.call(t,u),n=t[u];try{t[u]=void 0;var r=!0}catch(t){}var o=c.call(t);return r&&(e?t[u]=n:delete t[u]),o}var o=n(1332),a=Object.prototype,i=a.hasOwnProperty,c=a.toString,u=o?o.toStringTag:void 0;t.exports=r},1376:function(t,e,n){var r=n(1357),o=n(1415),a=Object.prototype,i=a.propertyIsEnumerable,c=Object.getOwnPropertySymbols,u=c?function(t){return null==t?[]:(t=Object(t),r(c(t),function(e){return i.call(t,e)}))}:o;t.exports=u},1377:function(t,e,n){var r=n(1349),o=n(1331),a=n(1351),i=n(1352),c=n(1356),u=n(1326),s=n(1338),f="[object Map]",l="[object Object]",p="[object Promise]",h="[object Set]",v="[object WeakMap]",y="[object DataView]",d=s(r),b=s(o),m=s(a),_=s(i),g=s(c),w=u;(r&&w(new r(new ArrayBuffer(1)))!=y||o&&w(new o)!=f||a&&w(a.resolve())!=p||i&&w(new i)!=h||c&&w(new c)!=v)&&(w=function(t){var e=u(t),n=e==l?t.constructor:void 0,r=n?s(n):"";if(r)switch(r){case d:return y;case b:return f;case m:return p;case _:return h;case g:return v}return e}),t.exports=w},1378:function(t,e){function n(t,e){return null==t?void 0:t[e]}t.exports=n},1379:function(t,e,n){function r(){this.__data__=o?o(null):{},this.size=0}var o=n(1328);t.exports=r},1380:function(t,e){function n(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}t.exports=n},1381:function(t,e,n){function r(t){var e=this.__data__;if(o){var n=e[t];return n===a?void 0:n}return c.call(e,t)?e[t]:void 0}var o=n(1328),a="__lodash_hash_undefined__",i=Object.prototype,c=i.hasOwnProperty;t.exports=r},1382:function(t,e,n){function r(t){var e=this.__data__;return o?void 0!==e[t]:i.call(e,t)}var o=n(1328),a=Object.prototype,i=a.hasOwnProperty;t.exports=r},1383:function(t,e,n){function r(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=o&&void 0===e?a:e,this}var o=n(1328),a="__lodash_hash_undefined__";t.exports=r},1384:function(t,e){function n(t,e){return e=null==e?r:e,!!e&&("number"==typeof t||o.test(t))&&t>-1&&t%1==0&&t<e}var r=9007199254740991,o=/^(?:0|[1-9]\d*)$/;t.exports=n},1385:function(t,e){function n(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}t.exports=n},1386:function(t,e,n){function r(t){return!!a&&a in t}var o=n(1371),a=function(){var t=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=r},1387:function(t,e){function n(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||r;return t===n}var r=Object.prototype;t.exports=n},1388:function(t,e){function n(){this.__data__=[],this.size=0}t.exports=n},1389:function(t,e,n){function r(t){var e=this.__data__,n=o(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():i.call(e,n,1),--this.size,!0}var o=n(1325),a=Array.prototype,i=a.splice;t.exports=r},1390:function(t,e,n){function r(t){var e=this.__data__,n=o(e,t);return n<0?void 0:e[n][1]}var o=n(1325);t.exports=r},1391:function(t,e,n){function r(t){return o(this.__data__,t)>-1}var o=n(1325);t.exports=r},1392:function(t,e,n){function r(t,e){var n=this.__data__,r=o(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var o=n(1325);t.exports=r},1393:function(t,e,n){function r(){this.size=0,this.__data__={hash:new o,map:new(i||a),string:new o}}var o=n(1350),a=n(1324),i=n(1331);t.exports=r},1394:function(t,e,n){function r(t){var e=o(this,t).delete(t);return this.size-=e?1:0,e}var o=n(1327);t.exports=r},1395:function(t,e,n){function r(t){return o(this,t).get(t)}var o=n(1327);t.exports=r},1396:function(t,e,n){function r(t){return o(this,t).has(t)}var o=n(1327);t.exports=r},1397:function(t,e,n){function r(t,e){var n=o(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var o=n(1327);t.exports=r},1398:function(t,e){function n(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}t.exports=n},1399:function(t,e,n){var r=n(1402),o=r(Object.keys,Object);t.exports=o},1400:function(t,e,n){(function(t){var r=n(1337),o="object"==typeof e&&e&&!e.nodeType&&e,a=o&&"object"==typeof t&&t&&!t.nodeType&&t,i=a&&a.exports===o,c=i&&r.process,u=function(){try{return c&&c.binding&&c.binding("util")}catch(t){}}();t.exports=u}).call(e,n(106)(t))},1401:function(t,e){function n(t){return o.call(t)}var r=Object.prototype,o=r.toString;t.exports=n},1402:function(t,e){function n(t,e){return function(n){return t(e(n))}}t.exports=n},1403:function(t,e){function n(t){return this.__data__.set(t,r),this}var r="__lodash_hash_undefined__";t.exports=n},1404:function(t,e){function n(t){return this.__data__.has(t)}t.exports=n},1405:function(t,e){function n(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}t.exports=n},1406:function(t,e,n){function r(){this.__data__=new o,this.size=0}var o=n(1324);t.exports=r},1407:function(t,e){function n(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}t.exports=n},1408:function(t,e){function n(t){return this.__data__.get(t)}t.exports=n},1409:function(t,e){function n(t){return this.__data__.has(t)}t.exports=n},1410:function(t,e,n){function r(t,e){var n=this.__data__;if(n instanceof o){var r=n.__data__;if(!a||r.length<c-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new i(r)}return n.set(t,e),this.size=n.size,this}var o=n(1324),a=n(1331),i=n(1335),c=200;t.exports=r},1411:function(t,e,n){var r=n(1362),o=n(1329),a=Object.prototype,i=a.hasOwnProperty,c=a.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(t){return o(t)&&i.call(t,"callee")&&!c.call(t,"callee")};t.exports=u},1412:function(t,e,n){function r(t){return null!=t&&a(t.length)&&!o(t)}var o=n(1341),a=n(1342);t.exports=r},1413:function(t,e,n){function r(t,e){return o(t,e)}var o=n(1363);t.exports=r},1414:function(t,e,n){function r(t){return i(t)?o(t):a(t)}var o=n(1358),a=n(1367),i=n(1412);t.exports=r},1415:function(t,e){function n(){return[]}t.exports=n},1416:function(t,e){function n(){return!1}t.exports=n},1417:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(r(this,t),!e||"string"!=typeof e)throw new Error("A string non-empty key is required");this._key=e,this._assignEntity=n.assignEntity;var o=n.idAttribute||"id";this._getId="function"==typeof o?o:function(t){return t[o]},this._idAttribute=o,this._meta=n.meta,this._defaults=n.defaults}return o(t,[{key:"getAssignEntity",value:function(){return this._assignEntity}},{key:"getKey",value:function(){return this._key}},{key:"getId",value:function(t,e){return this._getId(t,e)}},{key:"getIdAttribute",value:function(){return this._idAttribute}},{key:"getMeta",value:function(t){if(!t||"string"!=typeof t)throw new Error("A string non-empty property name is required");return this._meta&&this._meta[t]}},{key:"getDefaults",value:function(){return this._defaults}},{key:"define",value:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e])}}]),t}();e.default=a},1418:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(1322),c=r(i),u=n(1344),s=r(u),f=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o(this,t),!(0,c.default)(e))throw new Error("ArraySchema requires item schema to be an object.");if(n.schemaAttribute){var r=n.schemaAttribute;this._itemSchema=new s.default(e,{schemaAttribute:r})}else this._itemSchema=e}return a(t,[{key:"getItemSchema",value:function(){return this._itemSchema}}]),t}();e.default=f},1419:function(t,e,n){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(e){return f.a.get("https://www.conceptlawfirm.xyz/api/practice-areas").then(function(r){var o=r.data.practiceAreas,a=n.i(l.normalize)(o,n.i(l.arrayOf)(p.a));e(t?n.i(h.a)(a.entities.practiceAreas,a.result):c(a.entities,a.result))})}}function o(t){return function(e){return f.a.get("https://www.conceptlawfirm.xyz/api/practice-areas/"+t).then(function(t){var r=t.data.practiceArea,o=n.i(l.normalize)(r,p.a);return e(u(o.entities.practiceAreas,r.id))})}}function a(t,e){return function(r){return f.a.post("https://www.conceptlawfirm.xyz/api/practice-areas",e,t).then(function(t){var e=t.data.practiceArea,o=n.i(l.normalize)(e,p.a);r(n.i(h.b)(o.entities,o.entities.practiceAreas,e.id))})}}function i(t,e,r){return function(o){return f.a.put("https://www.conceptlawfirm.xyz/api/practice-areas/"+r,e,t).then(function(t){var e=t.data.practiceArea,r=n.i(l.normalize)(e,p.a);o(n.i(h.c)(r.entities,r.entities.practiceAreas,e.id))})}}function c(t,e){return{type:v.d,entities:t,practiceAreaIds:e}}function u(t,e){return{type:v.e,practiceArea:t,practiceAreaId:e}}var s=n(105),f=n.n(s),l=n(1323),p=(n.n(l),n(1330)),h=n(1321),v=n(33);e.a=r,e.b=o,e.d=a,e.c=i},1420:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(53),i=function(t){return o.a.createElement("footer",{className:"footer"},o.a.createElement("div",{className:"container-fluid visible-md visible-lg"},o.a.createElement("ul",{className:"list-unstyled col-md-4"},o.a.createElement("h5",null,o.a.createElement("b",null,"Contact Us")),o.a.createElement("li",null,o.a.createElement("p",null,"Call us on (03)0000 0000")),o.a.createElement("li",null,o.a.createElement("p",null,"15 Street Name, Suburb 0000, City, Australia"))),o.a.createElement("ul",{className:"list-unstyled col-md-4"},o.a.createElement("h5",null,o.a.createElement("b",null,"Concept Law Firm")),o.a.createElement("li",null,o.a.createElement(a.Link,{to:"/blog"},"Blog")),o.a.createElement("li",null,o.a.createElement(a.Link,{to:"/practice-areas"},"Practice Areas")),o.a.createElement("li",null,o.a.createElement(a.Link,{to:"/staff"},"Our People")),o.a.createElement("li",null,o.a.createElement(a.Link,{to:"/careers"},"Careers"))),o.a.createElement("ul",{className:"list-unstyled col-md-4"},o.a.createElement("h5",null,o.a.createElement("b",null,"Other")),o.a.createElement("li",null,o.a.createElement(a.Link,{to:"#"},"Section")),o.a.createElement("li",null,o.a.createElement(a.Link,{to:"#"},"Section")),o.a.createElement("li",null,o.a.createElement(a.Link,{to:"#"},"Section")))),o.a.createElement("div",{className:"footer-bottom text-center"},o.a.createElement("ul",{className:"list-inline"},o.a.createElement("li",null,"Concept Law Firm © 2017"),o.a.createElement("li",null,o.a.createElement(a.Link,{to:"/privacy-policy"},"Privacy Policy")),o.a.createElement("li",null,o.a.createElement(a.Link,{to:"/terms-of-service"},"Terms of Service")))))};e.a=i},1443:function(t,e,n){"use strict";var r=n(246),o=n.n(r);e.a=o()()},1493:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=n(0),c=n.n(i),u=n(53),s=n(1443),f=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l=function(t){function e(t){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return a(e,t),f(e,[{key:"componentDidMount",value:function(){var t={duration:1e3,scale:1,distance:0};s.a.reveal(this.button,t,100)}},{key:"handleClick",value:function(){var t=this.props,e=t.router,n=t.slug,r=t.id;e.push({pathname:n,state:{id:r}})}},{key:"render",value:function(){var t=this;this.handleClick=this.handleClick.bind(this);var e=this.props,n=e.text,r=e.imgSrc,o=e.customClassNames;return c.a.createElement("div",{className:"form-group"},c.a.createElement("button",{type:"button",className:"btn btn-block text-uppercase "+o,onClick:this.handleClick,style:{backgroundImage:"url("+r+")"},ref:function(e){return t.button=e}},n))}}]),e}(i.Component);e.a=n.i(u.withRouter)(l)}});