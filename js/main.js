const navBtn = document.querySelector(".nav-btn");
const mobileNav = document.querySelector(".mobile-nav");
const body = document.body;
const shop = document.querySelector(".shop");

// Клик по кнопке
navBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  mobileNav.classList.toggle("mobile-nav-active");
  navBtn.classList.toggle("nav-btn-close");
  body.classList.toggle("no-srcoll");
  shop.classList.toggle("none");
});

// Клик по окну за пределами
window.addEventListener("click", function () {
  if (mobileNav.classList.contains("mobile-nav-active")) {
    body.classList.toggle("no-srcoll");
    mobileNav.classList.toggle("mobile-nav-active");
    navBtn.classList.toggle("nav-btn-close");
  }
});

// Останавливаем клик внутри открытой мобильной навигации
mobileNav.addEventListener("click", function (event) {
  event.stopPropagation();
});

AOS.init();
