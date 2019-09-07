var d = document;

headerChild = d.querySelector("#header > .container");
let a = window.getComputedStyle(headerChild) || headerChild.currentStyle;
d.documentElement.style.setProperty("--language-right", `${parseInt(a.marginRight.replace(/px/,""))+15+"px"} `), window.addEventListener("resize", () => {
  d.documentElement.style.setProperty("--language-right", `${parseInt(a.marginRight.replace(/px/,""))+15+"px"} `)
})

const hamburger = d.querySelector(".hamburger");
const sidebar = d.getElementById("mobile-navigation");
const mLanguageWrapper = d.querySelector('.mobile-language');
const footerDropdown1 = d.querySelector('.footer-item--dropdown-1');
const footerDropdown2 = d.querySelector('.footer-item--dropdown-2');
const footerDropdown3 = d.querySelector('.footer-item--dropdown-3');
const footerDropdown4 = d.querySelector('.footer-item--dropdown-4');
const footerDropdown5 = d.querySelector('.footer-item--dropdown-5');
const mLanguage = d.querySelector('#mobile-language')
const desktopLanguage = d.querySelector('#link-menu-lang')
const desktopLanguageWrapper = d.querySelector('.d-language')
const desktopNavService = d.querySelector('#link-item-service')
const desktopNavJoin = d.querySelector('#link-item-join')
const mLocation = d.querySelector('#f-location')
const mCSelector = d.querySelector('#country-selector')
const dCSelector = d.querySelector('#country-select-desktop')
const mCSelectorHandle = d.querySelector('.m-language-bottom__handle')
const icon = d.querySelectorAll(".mnav-tree__icon")
const mnavTreeRoot = d.querySelectorAll('.mnav-tree-item--root');
const mLanguageBG = d.querySelectorAll(".mnav-tree__list-service")
const mnavTreeLink = d.querySelectorAll('.mnav-tree__link');

function togglemNav(e) {
  e.path[1].parentNode.classList.toggle('mnav-active')
  mLanguage.style.display = "inherit";
  e.target.removeEventListener(e.type, arguments.callee);
  d.getElementsByClassName("mobile-navigation__wrapper")[0].style.backgroundColor = "#00aa13";
}

mnavTreeRoot.forEach(function (el) {
  el.childNodes[1].addEventListener('click', function () {
    el.childNodes[3].classList.toggle('mnav-active')
    el.childNodes[3].style.backgroundColor = "#00aa13"
    d.getElementsByClassName("mobile-navigation__wrapper")[0].style.backgroundColor = "#00aa13";
    if (el.childNodes[3].classList.contains('mnav-active')) {
      mLanguage.style.display = "none";
    }
    let current = d.querySelector('.mnav-active').childNodes[1]
    current.addEventListener('click', togglemNav)
  }, false);
})


mnavTreeLink.forEach(function (el) {
  el.addEventListener('click', function () {
    el.classList.toggle("active")
    el.classList.toggle("rotate-icon")
    elWrapper = el.parentNode.parentNode
    anotherEl = el.parentNode.parentElement.querySelectorAll(".mnav-tree__link")
    // console.log(elWrapper)
    anotherEl.forEach(function (ael) {
      if (ael === el) {
        switch (el.id) {
          case "fmcg-toggle":
            d.getElementsByClassName("mobile-navigation__wrapper")[0].style.backgroundColor = "#ee2737";
            elWrapper.style.backgroundColor = "#ee2737";
            break;
          case "dn-toggle":
            d.getElementsByClassName("mobile-navigation__wrapper")[0].style.backgroundColor = "#f06400";
            elWrapper.style.backgroundColor = "#f06400";
            break;
          case "pay-toggle":
            d.getElementsByClassName("mobile-navigation__wrapper")[0].style.backgroundColor = "#00aed6";
            elWrapper.style.backgroundColor = "#00aed6";
            break;
          case "ne-toggle":
            d.getElementsByClassName("mobile-navigation__wrapper")[0].style.backgroundColor = "#df1995";
            elWrapper.style.backgroundColor = "#df1995";
            break;
          default:
            d.getElementsByClassName("mobile-navigation__wrapper")[0].style.backgroundColor = "#00aa13";
            elWrapper.style.backgroundColor = "#00aa13";
            break;
        }
      } else {
        ael.classList.remove("active")
        ael.style.fontWeight = 400
        ael.parentNode.childNodes[3].classList.remove("active")
      }
    })
    el.parentNode.childNodes[3].classList.toggle("active")
    if (el.classList.contains("active")) {
      el.style.fontWeight = 700
    } else {
      el.style.fontWeight = 400
    }
  })
})

hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  if (hamburger.classList.contains("is-active")) {
    sidebar.style.width = "100%";
    sidebar.style.opacity = "1";
  } else {
    if (d.querySelectorAll(".mnav-active").length === 0) {
      sidebar.style.width = "0px";
      sidebar.style.opacity = "0";
      mLanguageWrapper.parentNode.classList.remove('open')
    } else {
      d.querySelectorAll(".mnav-active")[0].classList.remove("mnav-active")
    }
    sidebar.style.width = "0px";
    sidebar.style.opacity = "0";
    d.getElementsByClassName("mobile-navigation__wrapper")[0].style.backgroundColor = "#00aa13";
    mLanguage.style.display = "flex";
    try {
      mLanguageBG[0].querySelectorAll(".active")[0].classList.remove("active")
      mLanguageBG[0].querySelectorAll(".active")[0].classList.remove("rotate-icon")
      mLanguageBG[0].querySelectorAll(".mnav-tree__list-collapse.pl-0.active")[0].parentNode.childNodes[1].style.fontWeight = 400
      mLanguageBG[0].querySelectorAll(".mnav-tree__list-collapse.pl-0.active")[0].classList.remove("active")
      mLanguageBG[0].style.backgroundColor = "#00aa13";
      mLanguageWrapper.parentNode.classList.remove('open')
    } catch (e) {
      return
    }
  }
});

(function () {
  icon.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      return null;
    }, true);
  })

  // Bind Click event to the drop down navigation button
  mLanguageWrapper.addEventListener('click', function () {
    this.parentNode.classList.toggle('open')
  }, false);

  desktopLanguage.addEventListener('click', function () {
    desktopLanguageWrapper.classList.toggle('active')
  }, false);

  dCSelector.addEventListener('click', function () {
    mLocation.classList.toggle('active')
  }, false);

  mLocation.addEventListener('click', function () {
    mCSelector.classList.toggle('active')
    mCSelectorHandle.addEventListener('click', function () {
      mCSelector.classList.remove('active')
    }, false)
  }, false);

  desktopNavService.addEventListener('click', function () {
    if (desktopNavJoin.classList.contains('active')) {
      desktopNavJoin.classList.toggle('active')
    }
    this.classList.toggle('active')
  }, false);

  desktopNavJoin.addEventListener('click', function () {
    if (desktopNavService.classList.contains('active')) {
      desktopNavService.classList.toggle('active')
    }
    this.classList.toggle('active')
  }, false);

  footerDropdown1.addEventListener('click', function () {
    let footerDropdownClose = [footerDropdown2, footerDropdown3, footerDropdown4, footerDropdown5];
    this.classList.toggle('open');
    this.classList.toggle('pb-3');
    footerDropdownClose.forEach(function (el) {
      el.classList.remove("open")
      el.classList.remove("pb-3")
    })
  }, false);
  footerDropdown2.addEventListener('click', function () {
    let footerDropdownClose = [footerDropdown1, footerDropdown3, footerDropdown4, footerDropdown5];
    this.classList.toggle('open');
    this.classList.toggle('pb-3');
    footerDropdownClose.forEach(function (el) {
      el.classList.remove("open")
      el.classList.remove("pb-3")
    })
  }, false);
  footerDropdown3.addEventListener('click', function () {
    let footerDropdownClose = [footerDropdown1, footerDropdown2, footerDropdown4, footerDropdown5];
    this.classList.toggle('open');
    this.classList.toggle('pb-3');
    footerDropdownClose.forEach(function (el) {
      el.classList.remove("open")
      el.classList.remove("pb-3")
    })
  }, false);
  footerDropdown4.addEventListener('click', function () {
    let footerDropdownClose = [footerDropdown1, footerDropdown2, footerDropdown3, footerDropdown5];
    this.classList.toggle('open');
    this.classList.toggle('pb-3');
    footerDropdownClose.forEach(function (el) {
      el.classList.remove("open")
      el.classList.remove("pb-3")
    })
  }, false);
  footerDropdown5.addEventListener('click', function () {
    let footerDropdownClose = [footerDropdown1, footerDropdown2, footerDropdown3, footerDropdown4];
    this.classList.toggle('open');
    this.classList.toggle('pb-3');
    footerDropdownClose.forEach(function (el) {
      el.classList.remove("open")
      el.classList.remove("pb-3")
    })
  }, false);
})();

// The reason I don't use slick.js, is that slick.js needs jQuery and I don't use jQuery because it has a lot of vulnerabilities 
let slider = tns({
  container: '.information-1__slider-wrapper',
  items: 1,
  nav: true,
  navPosition: "bottom",
  arrowKeys: true,
  prevButton: true,
  mouseDrag: true,
  center: true,
  loop: false,
  responsive: {
    320: {
      edgePadding: 20,
      items: 1.045,
    },
    769: {
      edgePadding: 20,
      gutter: 0,
      items: 1,
    }
  }
});


let sliderService1 = tns({
  container: '.service-1__slider-wrapper',
  items: 2.08,
  nav: true,
  navPosition: "bottom",
  prevButton: true,
  mouseDrag: true,
  // center: true,
  // autoHeight: true,
  "slideBy": 2.6,
  loop: false,
  responsive: {
    320: {
      edgePadding: 20,
      gutter: 20,
    },
    769: {
      // autoHeight:true,
      // autoWidth: true,
      edgePadding: 200,
      gutter: 0,
      items: 4,
      nav: false,
    }
  }
});

let sliderService2 = tns({
  "container": '.service-2__slider-wrapper',
  "nav": true,
  items: 2.08,
  "navPosition": "bottom",
  "prevButton": true,
  "mouseDrag": true,
  // center: true,
  // autoHeight: true,
  "slideBy": 2.6,
  "loop": false,
  "responsive": {
    "320": {
      "edgePadding": 20,
      gutter: 20,
    },
    "769": {
      "edgePadding": 0,
      gutter: 20,
      items: 3,
      nav: false,
    }
  }
});


let sliderService3 = tns({
  "container": '.service-3__slider-wrapper',
  "nav": true,
  items: 2.08,
  controls: false,
  "navPosition": "none",
  "mouseDrag": true,
  // center: true,
  // autoHeight: true,
  "slideBy": 2.6,
  "loop": false,
  "responsive": {
    "320": {
      "edgePadding": 20,
      gutter: 20,
      items: 2.08,
    },
    "769": {
      edgePadding: 20,
      gutter: 5,
      "fixedWidth": 268,
      items: 4.1,
      nav: false,
    }
  }
});

let sliderService4 = tns({
  "container": '.service-4__slider-wrapper',
  "nav": true,
  items: 2.08,
  controls: false,
  "navPosition": "none",
  "mouseDrag": true,
  // center: true,
  // autoHeight: true,
  "slideBy": 2.6,
  "loop": false,
  "responsive": {
    "320": {
      "edgePadding": 20,
      gutter: 20,
      items: 2.08,
    },
    "769": {
      edgePadding: 20,
      gutter: 5,
      "fixedWidth": 268,
      items: 4,
      nav: false,
    }
  }
});

let sliderService5 = tns({
  "container": '.service-5__slider-wrapper',
  "nav": true,
  items: 2.08,
  controls: false,
  "navPosition": "none",
  "mouseDrag": true,
  // center: true,
  // autoHeight: true,
  "slideBy": 2.6,
  "loop": false,
  "responsive": {
    "320": {
      "edgePadding": 20,
      gutter: 20,
      items: 2.08,
    },
    "769": {
      edgePadding: 20,
      gutter: 5,
      "fixedWidth": 268,
      items: 2,
      nav: false,
    }
  }
});


let scrollpos = window.scrollY;
let header = d.getElementById("header");

function add_class_on_scroll() {
  header.classList.add("is-active");
}

function remove_class_on_scroll() {
  header.classList.remove("is-active");
}

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;
  if (scrollpos > 10) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});