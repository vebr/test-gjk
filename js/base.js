const hamburger = document.querySelector(".hamburger");
const sidebar = document.getElementById("mobile-navigation");
const mobileLanguage = document.querySelector('.mobile-language');
const footerDropdown1 = document.querySelector('.footer-item--dropdown-1');
const footerDropdown2 = document.querySelector('.footer-item--dropdown-2');
const footerDropdown3 = document.querySelector('.footer-item--dropdown-3');
const footerDropdown4 = document.querySelector('.footer-item--dropdown-4');
const footerDropdown5 = document.querySelector('.footer-item--dropdown-5');

hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  if (hamburger.classList.contains("is-active")) {
    sidebar.style.width = "100%";
    sidebar.style.opacity = "1";
  } else {
    sidebar.style.width = "0px";
    sidebar.style.opacity = "0";
    mobileLanguage.parentNode.classList.remove('open')
  }
});


(function () {
  // Bind Click event to the drop down navigation button
  mobileLanguage.addEventListener('click', function () {
    this.parentNode.classList.toggle('open')
  }, false);
  footerDropdown1.addEventListener('click', function () {
    let footerDropdownClose = [footerDropdown2, footerDropdown3, footerDropdown4, footerDropdown5];
    this.classList.toggle('open');
    this.classList.toggle('pb-3');
    footerDropdownClose.forEach(function(el) {
      el.classList.remove("open")
      el.classList.remove("pb-3")
    })
  }, false);
  footerDropdown2.addEventListener('click', function () {
    let footerDropdownClose = [footerDropdown1, footerDropdown3, footerDropdown4, footerDropdown5];
    this.classList.toggle('open');
    this.classList.toggle('pb-3');
    footerDropdownClose.forEach(function(el) {
      el.classList.remove("open")
      el.classList.remove("pb-3")
    })
  }, false);
  footerDropdown3.addEventListener('click', function () {
    let footerDropdownClose = [footerDropdown1, footerDropdown2, footerDropdown4, footerDropdown5];
    this.classList.toggle('open');
    this.classList.toggle('pb-3');
    footerDropdownClose.forEach(function(el) {
      el.classList.remove("open")
      el.classList.remove("pb-3")
    })
  }, false);
  footerDropdown4.addEventListener('click', function () {
    let footerDropdownClose = [footerDropdown1, footerDropdown2, footerDropdown3, footerDropdown5];
    this.classList.toggle('open');
    this.classList.toggle('pb-3');
    footerDropdownClose.forEach(function(el) {
      el.classList.remove("open")
      el.classList.remove("pb-3")
    })
  }, false);
  footerDropdown5.addEventListener('click', function () {
    let footerDropdownClose = [footerDropdown1, footerDropdown2, footerDropdown3, footerDropdown4];
    this.classList.toggle('open');
    this.classList.toggle('pb-3');
    footerDropdownClose.forEach(function(el) {
      el.classList.remove("open")
      el.classList.remove("pb-3")
    })
  }, false);
})();

// The reason I don't use slick.js, is that slick.js needs jQuery and I don't use jQuery because it has a lot of vulnerabilities 
const slider = tns({
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
      items: 1,
    },
    769: {
      edgePadding: 0,
      items: 1,
    }
  }
});

let scrollpos = window.scrollY;
let header = document.getElementById("header");

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
