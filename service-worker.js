"use strict";var precacheConfig=[["/index.html","2da69b60d7deda16bc786c18844a98f9"],["/static/css/main.ac2d44a7.css","04c7f07bf0b55f40cf16bf10fde3da15"],["/static/js/main.120402b5.js","9e2cf4c596da8ec538d3837e0f6ae2ce"],["/static/media/fa-brands-400.03783c51.eot","03783c5172ee1ad128c576bf88fac168"],["/static/media/fa-brands-400.073c2f3c.svg","073c2f3ce60eaf69cc2767ef3d989078"],["/static/media/fa-brands-400.7559b377.woff2","7559b3774a0625e8ca6c0160f8f6cfd8"],["/static/media/fa-brands-400.ed2b8bf1.ttf","ed2b8bf117160466ba6220a8f1da54a4"],["/static/media/fa-brands-400.fe9d62e0.woff","fe9d62e0d16a333a20e63c3e7595f82e"],["/static/media/fa-regular-400.59215032.ttf","59215032a4397507b80e5625dc323de3"],["/static/media/fa-regular-400.8fdea4e8.svg","8fdea4e89ac405d9f8db327adb331d8d"],["/static/media/fa-regular-400.e07d9e40.woff2","e07d9e40b26048d9abe2ef966cd6e263"],["/static/media/fa-regular-400.e5770f98.woff","e5770f9863963fb576942e25214a226d"],["/static/media/fa-regular-400.fc9c63c8.eot","fc9c63c8224fb341fc933641cbdd12ef"],["/static/media/fa-solid-900.4bced7c4.woff","4bced7c4c0d61d4f988629bb8ae80b8b"],["/static/media/fa-solid-900.acf50f59.ttf","acf50f59802f20d8b45220eaae532a1c"],["/static/media/fa-solid-900.b557f56e.svg","b557f56e367e59344ca95f9d1fb44352"],["/static/media/fa-solid-900.b5cf8ae2.woff2","b5cf8ae26748570d8fb95a47f46b69e1"],["/static/media/fa-solid-900.ef3df984.eot","ef3df98419d143d9617fe163bf4edc0b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});