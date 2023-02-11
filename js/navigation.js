addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".header__nav-toggle");
  const primaryNav = document.querySelector(".header__nav-navigation");
  const talkBtn = document.querySelector(".header__nav-talk");

  navToggle.addEventListener("click", () => {
    primaryNav.hasAttribute("data-visible") ? navToggle.setAttribute("aria-expanded", false) : navToggle.setAttribute("aria-expanded", true);
    primaryNav.toggleAttribute("data-visible");
    talkBtn.toggleAttribute("data-visible");
  });
});
