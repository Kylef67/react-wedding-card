"use strict";var precacheConfig=[["/react-wedding-card/index.html","72ecda619c7ff39827356d1e1aea5347"],["/react-wedding-card/static/css/main.f0ee7e71.css","a19abe954d2ce260c109e43e1b2427ec"],["/react-wedding-card/static/js/main.e863999c.js","18eb150f58044980e3afa2056e580ba7"],["/react-wedding-card/static/media/1.bcaecb99.png","bcaecb99e1388a8189adc23498a05c60"],["/react-wedding-card/static/media/2.acf01ea9.jpg","acf01ea945fd87d609c97076020ce1e7"],["/react-wedding-card/static/media/3.89f5faba.jpg","89f5fabaa415bc65519e55ac1a48d9af"],["/react-wedding-card/static/media/4.db1bb423.jpg","db1bb423ea5de274dfe74bd7a6d292a0"],["/react-wedding-card/static/media/5.f352b668.jpg","f352b6687cdfd3192fc71d1031fa6bef"],["/react-wedding-card/static/media/6.6d176bf8.jpg","6d176bf818f46037cb5448329049bf96"],["/react-wedding-card/static/media/bridal.0914d8b9.jpeg","0914d8b92405fc82e1454471ec4bae18"],["/react-wedding-card/static/media/groom.ce7f640a.jpeg","ce7f640a33c211f19d7dc658de8b5ee3"],["/react-wedding-card/static/media/header.6d176bf8.jpg","6d176bf818f46037cb5448329049bf96"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/react-wedding-card/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});