!function(t){var e={};function n(r){if(e[r])return e[r].exports;var c=e[r]={i:r,l:!1,exports:{}};return t[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)n.d(r,c,function(e){return t[e]}.bind(null,c));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){const n="v1.00",r=["/offline.html","/assets/javascripts/body.bundle-dd4992b8.js","/assets/stylesheets/all.bundle-d27e0e89.css"],c=[/https?:\/\/api2.drykiss.com\//,/https?:\/\/api.mixpanel.com\//,/https?:\/\/api.segment.io\//,/https?:\/\/in.getclicky.com\//,/https?:\/\/zenkaffe.herokuapp.com\//,/https?:\/\/p.typekit.net\//,/\/__rack\//];function o(t){return fetch(t).then(e=>{var n=e.clone();return caches.open(u("resources")).then(e=>{e.put(t,n)}),t.method,t.url,e})}function i(t){return t.method,t.url,t.url.match(/\.(jpg|png|gif|svg|jpeg)(\?.*)?$/)?caches.match("/offline.svg"):caches.match("/offline.html")}function u(){return[n,...arguments].join(":")}self.addEventListener("install",function(t){t.waitUntil(caches.open(u("offline")).then(t=>t.addAll(r)).then(()=>{}))}),self.addEventListener("fetch",function(t){const e=t.request;!function(t){return"GET"!==t.method||c.some(e=>t.url.match(e))}(e)?function(t){return~t.headers.get("Accept").indexOf("text/html")}(e)?t.respondWith(function(t){return o(t).catch(()=>(function(t){return caches.match(t).then(e=>e||i(t))})(t))}(e)):t.respondWith(function(t){return caches.match(t).then(e=>(t.method,t.url,e||o(t).catch(()=>i(t))))}(e)):t.respondWith(function(t){return window.fetch(t).then(e=>(t.method,t.url,e)).catch(()=>i(t))}(e))}),self.addEventListener("activate",function(t){t.waitUntil(caches.keys().then(t=>Promise.all(t.filter(t=>!t.startsWith(n)).map(t=>caches.delete(t)))).then(()=>{}))})}]);