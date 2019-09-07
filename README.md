# Veddha Re-Test 

### Description :
I created this website for retesting for the Frontend Web Developer test, because I know the first one is lame. since lighthouse need HTTPS to make perfect score for PWA, I uploaded the website to firebase hosting, you can test it with a lighthohuse [here](https://gojek-test-737a0.firebaseapp.com/).


### WorkBox strategies :



### Lighthouse Score :

###### Applied Slow 4G, 4x CPU Slowdown :
[![Performance: 94/100](https://lighthouse-badge.appspot.com/?score=94&category=Performance&compact)](https://gojek.com) [![Accessibility: 85/100](https://lighthouse-badge.appspot.com/?score=85&category=Accessibility&compact)](https://gojek.com) [![Best-Practice: 100/100](https://lighthouse-badge.appspot.com/?score=100&category=Best%20Practice&compact)](https://gojek.com) [![SE): 96/100](https://lighthouse-badge.appspot.com/?score=96&category=SEO&compact)](https://gojek.com) [![PWA: 100/100](https://lighthouse-badge.appspot.com/?score=100&category=PWA&compact)](https://gojek.com)

###### Simulated Slow 4G, 4x CPU Slowdown :
[![Performance: 100/100](https://lighthouse-badge.appspot.com/?score=100&category=Performance&compact)](https://gojek.com) [![Accessibility: 85/100](https://lighthouse-badge.appspot.com/?score=85&category=Accessibility&compact)](https://gojek.com) [![Best-Practice: 100/100](https://lighthouse-badge.appspot.com/?score=100&category=Best%20Practice&compact)](https://gojek.com) [![SE): 96/100](https://lighthouse-badge.appspot.com/?score=96&category=SEO&compact)](https://gojek.com) [![PWA: 100/100](https://lighthouse-badge.appspot.com/?score=100&category=PWA&compact)](https://gojek.com)

### Folder Structures :

    ├── css
    ├── gobox
    │   ├── css
    │   ├── js
    │   └── media
    │       ├── fonts
    │       │   ├── gojekicon
    │       │   └── maison-neue
    │       ├── icon
    │       └── images
    ├── js
    ├── media
    │   ├── fonts
    │   │   ├── gojekicon
    │   │   └── maison-neue
    │   ├── icon
    │   └── images
    └── public
        ├── css
        ├── gobox
        │   ├── css
        │   ├── js
        │   └── media
        │       ├── fonts
        │       │   ├── gojekicon
        │       │   └── maison-neue
        │       ├── icon
        │       └── images
        ├── js
        └── media
            ├── fonts
            │   ├── gojekicon
            │   └── maison-neue
            ├── icon
            └── images

>  The **Public** folder contains files that are hosted on firebase, for reasons of optimizing performance, the file inside contains a minified version

> The base page layout container is on **base.html**
### 3rd party libraries : 

> **Q: Why I'm not using slick.js?**
>
> **A:** I choose Tiny Slider instead of Slick.js because Slick.js depends on jQuery, and I think it's better not to use jQuery at this time because it has a lot of vulnerabilities

##### - [Tiny Slider](https://github.com/ganlanyuan/tiny-slider)

##### - [Bootstrap 4 (only css)](https://github.com/twbs/bootstrap)
