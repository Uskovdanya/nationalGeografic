import "./swiper";
import "./style.css";
import "./media.css";

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".nav__menu");
  const menuItem = document.querySelectorAll(".nav__link");
  const hamburger = document.querySelector(".burger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("burger_active");
    menu.classList.toggle("nav__menu_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("burger_active");
      menu.classList.toggle("nav__menu_active");
    });
  });
});
