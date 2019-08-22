// const staticAssets = [
//   './',
//   './css/global.css',
//   './js/app.js',
//   './js/gojek.js',
//   './js/libs.js',
// ];

// self.addEventListener('install', async event => {
//   const cache = await caches.open('static-meme');
//   cache.addAll(staticAssets);
// });

// self.addEventListener('fetch', event => {
//   const {request} = event;
//   const url = new URL(request.url);
//   if(url.origin === location.origin) {
//       event.respondWith(cacheData(request));
//   } else {
//       event.respondWith(networkFirst(request));
//   }

// });

// async function cacheData(request) {
//   const cachedResponse = await caches.match(request);
//   return cachedResponse || fetch(request);
// }

// async function networkFirst(request) {
//   const cache = await caches.open('dynamic-meme');

//   try {
//       const response = await fetch(request);
//       cache.put(request, response.clone());
//       return response;
//   } catch (error){
//       return await cache.match(request);

//   }
// }

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  workbox.setConfig({debug: true})
  // Updating SW lifecycle to update the app after user triggered refresh
  workbox.core.skipWaiting()
  workbox.core.clientsClaim() 
  workbox.routing.registerRoute(/\.js$/, new workbox.strategies.NetworkFirst());
  workbox.routing.registerRoute(
    // Cache CSS files.
    /\.css$/,
    // Use cache but update in the background.
    new workbox.strategies.StaleWhileRevalidate({
      // Use a custom cache name.
      cacheName: "css-cache"
    })
  );

  // Cache image files.
  workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|svg|gif)$/,
    // Use the cache if it's available.
    new workbox.strategies.CacheFirst({
      cacheName: "img-cache",
      plugins: [
        new workbox.expiration.Plugin({
          // Cache only 20 images.
          maxEntries: 20,
          // Cache for a maximum of a week.
          maxAgeSeconds: 7 * 24 * 60 * 60
        })
      ]
    })
  );

  // Cache Bootstrap CSS
  workbox.routing.registerRoute(
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    new workbox.strategies.StaleWhileRevalidate({
      // Use a custom cache name.
      cacheName: "css-cache"
    })
  );
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
