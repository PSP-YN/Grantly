const CACHE_NAME = "grantly-shell-v2";
const CORE_ASSETS = ["/", "/index.html", "/favicon.svg", "/grantly-icon.svg", "/manifest.webmanifest"];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith("grantly-") && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(fetch(request).then(response => {
      if (response.ok) caches.open(CACHE_NAME).then(cache => cache.put("/index.html", response.clone()));
      return response;
    }).catch(() => caches.match("/index.html").then(response => response || caches.match("/"))));
    return;
  }

  if (/\.(?:js|css|svg|woff2?|png|webp|ico)$/.test(url.pathname)) {
    event.respondWith(caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        if (response.ok) caches.open(CACHE_NAME).then(cache => cache.put(request, response.clone()));
        return response;
      });
    }));
  }
});
