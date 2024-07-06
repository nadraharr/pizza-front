const menu = document.querySelector(".header__nav-menu");
const button = document.querySelector(".header__menu-btn");
const links = document.querySelectorAll("li");
button.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  menu.classList.toggle("mobile");
  document.body.classList.toggle("mobile");
  if (menu.classList.contains("mobile")) {
    links.forEach((link) => {
      link.addEventListener("click", toggleMobileMenu);
    });
  } else {
    links.forEach((link) => {
      link.removeEventListener("click", toggleMobileMenu);
    });
  }
}
