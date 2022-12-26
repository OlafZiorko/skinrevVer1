const togglerMenu = document.querySelector(".toggler");
const mobileMenu = document.querySelector(".main__navigation");
const closeMenu = document.querySelector(".navbar__toggler--close");

togglerMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("visible");
});

let panelTitle = document.querySelectorAll(".panel--title");
let container = document.querySelectorAll(".panel__container");

panelTitle.forEach(function (header, index) {
  header.addEventListener("click", function () {
    container.forEach(function (panel) {
      panel.classList.remove("active");
    });
    panelTitle.forEach(function (header) {
      header.classList.remove("active");
    });
    panelTitle[index].classList.add("active");
    container[index].classList.add("active");
  });
});
