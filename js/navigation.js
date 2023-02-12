addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".navigation__toggle");
  const primaryNav = document.querySelector(".navigation__navigation");
  const talkBtn = document.querySelector(".navigation__talk");

  navToggle.addEventListener("click", () => {
    if (talkBtn.hasAttribute("data-visible")) {
      
      primaryNav.toggleAttribute("data-invisible");
      talkBtn.toggleAttribute("data-invisible");
      
      primaryNav.removeAttribute("data-visible");
      talkBtn.removeAttribute("data-visible");
      
      navToggle.setAttribute("aria-expanded", false);
    }
    else {
      primaryNav.toggleAttribute("data-visible");
      talkBtn.toggleAttribute("data-visible");

      primaryNav.removeAttribute("data-invisible");
      talkBtn.removeAttribute("data-invisible");
      
      navToggle.setAttribute("aria-expanded", true);
    } 
  });
});
