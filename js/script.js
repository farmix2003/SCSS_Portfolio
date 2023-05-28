const menuBtn = document.querySelector(".menu-btn"),
  hamburger = document.querySelector(".menu-btn_burger"),
  nav = document.querySelector(".nav"),
  navMenu = document.querySelector(".menu-nav"),
  menuItem = document.querySelectorAll(".menu-nav_item");
let isOpen = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!isOpen) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    navMenu.classList.add("open");
    menuItem.forEach((item) => item.classList.add("open"));
    // menuItem.forEach((item) => item.classList.add("active"));

    isOpen = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    navMenu.classList.remove("open");
    menuItem.forEach((item) => item.classList.remove("open"));

    isOpen = false;
  }
}
