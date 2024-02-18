document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu ul");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("open");
  });
});
