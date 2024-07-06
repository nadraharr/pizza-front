const menu = document.querySelector(".header__nav-menu");
const button = document.querySelector(".header__menu-btn");
const links = document.querySelectorAll("li");
button.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  menu.classList.toggle("burger-open");
  document.body.classList.toggle("burger-open");
  if (menu.classList.contains("burger-open")) {
    links.forEach((link) => {
      link.addEventListener("click", toggleMobileMenu);
    });
  } else {
    links.forEach((link) => {
      link.removeEventListener("click", toggleMobileMenu);
    });
  }
}
