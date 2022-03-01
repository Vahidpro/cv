var mobileNav = document.querySelector(".mobile-nav");
var mobileNavMenu = document.querySelector(".mobile-nav-menu");
var mobileNavClose = document.querySelector(".mobile-nav-close");

mobileNavMenu.addEventListener("click", function () {
  mobileNav.style.display = "block";
});
mobileNavClose.addEventListener("click", function () {
  mobileNav.style.display = "none";
});
