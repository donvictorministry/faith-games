"use strict";

var DV_CACHE_NAME = "faith-games-v1";
var DV_SHELL_FILES = [
  "./index.html",
  "./manifest.json",
  "./styles.css",
  "./scripts.js"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(DV_CACHE_NAME).then(function (cache) {
      return cache.addAll(DV_SHELL_FILES);
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (k) { return k !== DV_CACHE_NAME; })
            .map(function (k) { return caches.delete(k); })
      );
    }).then(function () { return self.clients.claim(); })
  );
});

function dvIsImageRequest(request) {
  if (request.destination === "image") return true;
  var url = request.url.toLowerCase();
  return /\.(png|jpg|jpeg|gif|webp|svg|ico)(\?.*)?$/.test(url);
}

self.addEventListener("fetch", function (event) {
  var request = event.request;

  // Never intercept non-GET
  if (request.method !== "GET") return;

  // Images (same-origin OR cross-origin, e.g. imgbb): cache-first,
  // fall back to network, cache whatever comes back — including
  // opaque cross-origin responses. No origin check needed.
  if (dvIsImageRequest(request)) {
    event.respondWith(
      caches.match(request).then(function (cached) {
        if (cached) return cached;
        return fetch(request).then(function (response) {
          var copy = response.clone();
          caches.open(DV_CACHE_NAME).then(function (cache) { cache.put(request, copy); });
          return response;
        }).catch(function () { return cached; });
      })
    );
    return;
  }

  // App shell / everything else: cache-first, network fallback, update cache in background.
  event.respondWith(
    caches.match(request).then(function (cached) {
      var networkFetch = fetch(request).then(function (response) {
        if (response && response.ok) {
          var copy = response.clone();
          caches.open(DV_CACHE_NAME).then(function (cache) { cache.put(request, copy); });
        }
        return response;
      }).catch(function () { return cached; });
      return cached || networkFetch;
    })
  );
});
