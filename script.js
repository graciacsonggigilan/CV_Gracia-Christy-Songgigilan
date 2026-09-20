const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", function () {
  const open = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});