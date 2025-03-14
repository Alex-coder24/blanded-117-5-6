console.log("js add!");
document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.querySelector(".burger-btn");
  const mobileMenu = document.querySelector(".mob-menu");
  const darkModeBtn = document.querySelector(".dark-mode-btn");
  const body = document.querySelector(".body");

  // Проверяем сохранённую тему в localStorage
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-body-mode");
    darkModeBtn.classList.add("btn-active");
  }

  // Функционал бургер-меню
  burgerBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("is-open");
    burgerBtn.classList.toggle("active");
    darkModeBtn.classList.toggle("visible");
  });

  // Функционал переключения темной темы
  darkModeBtn.addEventListener("click", function () {
    body.classList.toggle("dark-body-mode");
    darkModeBtn.classList.toggle("btn-active");

    // Сохраняем тему в localStorage
    if (body.classList.contains("dark-body-mode")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });
});
