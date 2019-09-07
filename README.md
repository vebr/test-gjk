# Recreate the landing page of [Gojek](https://gojek.com)

## Description

I created this website for retesting for the Frontend Web Developer test, because I know the first one is lame.
And you can find the commented codes on the **index.html** , **base.html**, also on **assets/js/base.js** .

## Lighthouse Score

> **Applied Slow 4G, 4x CPU Slowdown :**

[![Performance: 94/100](https://lighthouse-badge.appspot.com/?score=94&category=Performance&compact)](https://gojek.com) [![Accessibility: 85/100](https://lighthouse-badge.appspot.com/?score=85&category=Accessibility&compact)](https://gojek.com) [![Best-Practice: 100/100](https://lighthouse-badge.appspot.com/?score=100&category=Best%20Practice&compact)](https://gojek.com) [![SE): 96/100](https://lighthouse-badge.appspot.com/?score=96&category=SEO&compact)](https://gojek.com) [![PWA: 100/100](https://lighthouse-badge.appspot.com/?score=100&category=PWA&compact)](https://gojek.com)

> **Simulated Slow 4G, 4x CPU Slowdown :**

[![Performance: 100/100](https://lighthouse-badge.appspot.com/?score=100&category=Performance&compact)](https://gojek.com) [![Accessibility: 85/100](https://lighthouse-badge.appspot.com/?score=85&category=Accessibility&compact)](https://gojek.com) [![Best-Practice: 100/100](https://lighthouse-badge.appspot.com/?score=100&category=Best%20Practice&compact)](https://gojek.com) [![SE): 96/100](https://lighthouse-badge.appspot.com/?score=96&category=SEO&compact)](https://gojek.com) [![PWA: 100/100](https://lighthouse-badge.appspot.com/?score=100&category=PWA&compact)](https://gojek.com)


## Demo
since lighthouse need HTTPS to make perfect score for PWA, I uploaded the website to firebase hosting, you can test it with a lighthohuse there.

Here is a working live demo :  https://gojek-test-737a0.firebaseapp.com/

## WorkBox strategies
#### Runtime:
```javascript
workbox.routing.registerRoute(
    new RegExp('/.*'),
    new workbox.strategies.NetworkFirst()
  );
  ```
  Using strategy **NetworkFirst**, the service worker first attempts to retrieve a response from the network. I use this because when the network request fails entirely, or takes too long to return a response, then the most recent response from the cache is returned instead.
 
#### Stylesheet:
```javascript
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
 ```
 
 Using strategy **cacheFirst**, In this approach, when our service worker intercepts a request, it first uses the Cache Storage API to see whether there's a cached response available. If there is, that response is returned to the web app.

#### Images:
```javascript
  workbox.routing.registerRoute(
      new RegExp('\.(png|svg|jpg|jpeg)$'),
      workbox.strategies.cacheFirst({
          cacheName: 'cache-Images',
          plugins: [
              new workbox.expiration.Plugin({
                  maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
                  maxEntries: 50,// only cache 50 request
                  purgeOnQuotaError: true
              })
          ]
      })
  );
  ```
  
 Using strategy **cacheFirst**, In this approach, when our service worker intercepts a request, it first uses the Image Cache Storage API to see whether there's a cached response available. Very usefull when the network is poor to load a lot of images (since we have a lot of images).

#### Blog articles:
```javascript
workbox.routing.registerRoute(
      new RegExp('https://www.gojek.com/blog/'),
      workbox.strategies.staleWhileRevalidate({
          cacheName: 'cache-Blog',
          cacheExpiration: {
              maxAgeSeconds: 60 * 30 //cache the articles content for 30m
          }
      })
  );
  ```
  
 Using strategy **Stale-while-revalidate**, In this approach, our service worker will immediately check for a cached response and, if one is found, pass it back to our web app. In the meantime, regardless of whether there was a cache match, our service worker also fires off a network request to get back a "fresh" response, so user will always get new article withing 30 minutes.
 
  
## Folder Structures

    ├── assets
    │   ├── css
    │   ├── js
    │   └── media
    ├── base.html
    ├── gobox
    │   ├── css
    │   ├── index.html
    │   ├── js
    │   └── media
    ├── index.html
    ├── manifest.json
    ├── public
    │   ├── 404.html
    │   ├── assets
    │   ├── base.html
    │   ├── gobox
    │   ├── index.html
    │   ├── manifest.json
    │   └── service-worker.js
    ├── README.md
    └── service-worker.js

>  The **Public** folder contains files that are hosted on firebase, for reasons of optimizing performance, the file inside contains a minified version

> The base page layout container is on **base.html**

> Gobox page located on **gobox** folder

## 3rd party libraries

> **Q: Why I'm not using slick.js?**
>
> **A:** I choose Tiny Slider instead of Slick.js because Slick.js depends on jQuery, and I think it's better not to use jQuery at this time because it has a lot of vulnerabilities

- ##### [Tiny Slider](https://github.com/ganlanyuan/tiny-slider)
- ##### [Bootstrap 4 (only css)](https://github.com/twbs/bootstrap)
