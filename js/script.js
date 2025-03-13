console.log("js add!");
document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.querySelector(".burger-btn");
  const mobileMenu = document.querySelector(".mob-menu");
  const darkModeCont = document.querySelector(".dark-mode-cont");

  burgerBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("is-open");

    burgerBtn.classList.toggle("active");
    darkModeCont.classList.toggle("visible");
  });

  document.addEventListener("click", function (event) {
    const isClickInside =
      burgerBtn.contains(event.target) || mobileMenu.contains(event.target);

    if (!isClickInside) {
      mobileMenu.classList.remove("is-open");
      burgerBtn.classList.remove("active");
      darkModeCont.classList.remove("visible");
    }
  });
});
