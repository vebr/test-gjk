// Look for .hamburger
const hamburger = document.querySelector(".hamburger");
const sidebar = document.getElementById("mobile-navigation");
// On click
hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  if (hamburger.classList.contains("is-active")) {
    sidebar.style.width = "100%";
    sidebar.style.opacity = "1";
  } else {
    sidebar.style.width = "0px";
    sidebar.style.opacity = "0";
  }
  console.log(hamburger.classList)
  // Do something else, like open/close menu
});