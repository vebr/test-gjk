importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

if (workbox) {

  workbox.setConfig({ debug: false });
  // Updating SW lifecycle to update the app after user triggered refresh
  workbox.core.skipWaiting();
  workbox.core.clientsClaim();
  self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('html-cache').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
        ]);
      })
    );
   });
  // cache name
  workbox.core.setCacheNameDetails({
      prefix: 'gjk-test-cache',
      precache: 'precache',
      runtime: 'runtime',
    });
    
  // runtime cache
  workbox.routing.registerRoute(
    new RegExp('/.*'),
    new workbox.strategies.NetworkFirst()
  );
  
  // 1. stylesheet
  workbox.routing.registerRoute(
      new RegExp('\.css$'),
      workbox.strategies.cacheFirst({
          cacheName: 'cache-Css',
          plugins: [
              new workbox.expiration.Plugin({
                  maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
                  maxEntries: 20, // only cache 20 request
                  purgeOnQuotaError: true
              })
          ]
      })
  );
  // 2. images
  workbox.routing.registerRoute(
      new RegExp('\.(png|svg|jpg|jpeg)$'),
      workbox.strategies.cacheFirst({
          cacheName: 'cache-Images',
          plugins: [
              new workbox.expiration.Plugin({
                  maxAgeSeconds: 60 * 60 * 24 * 7,
                  maxEntries: 50,
                  purgeOnQuotaError: true
              })
          ]
      })
  );
  
  // 3. cache blogs articles result
  workbox.routing.registerRoute(
      new RegExp('https://www.gojek.com/blog/'),
      workbox.strategies.staleWhileRevalidate({
          cacheName: 'cache-Blog',
          cacheExpiration: {
              maxAgeSeconds: 60 * 30 //cache the articles content for 30mn
          }
      })
  );
  
  // 4. cache image from third-party
  workbox.routing.registerRoute(
    new RegExp('https://lelogama\\.go-jek\\.com/'),
    new workbox.strategies.CacheFirst({
      cacheName: "img-cache",
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200]
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 7,
          maxEntries: 50,
          purgeOnQuotaError: true
      })
      ]
    }),
  );

  workbox.precaching.precacheAndRoute([]);
} else {
  console.log(`Workbox didn't work`);
}
