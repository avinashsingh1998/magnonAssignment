const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const menuMobile = document.querySelector("#mobileMenu");

function toggleMenu() {
  menuMobile.classList.remove("hidden");
}
function removeMenu() {
  menuMobile.classList.add("hidden");
}
