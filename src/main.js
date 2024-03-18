//cambiar tema
const theme = document.querySelectorAll("#toogle, #toogle2");

theme.forEach((element) => {
  element.addEventListener("change", function () {
    const htmlElement = document.documentElement;
    const isChecked = element.checked;
    const logo = document.querySelector(".logo");
    const imageTheme = document.querySelectorAll("#imageTheme, #imageTheme2");

    if (!isChecked) {
      htmlElement.classList.remove("dark");
      htmlElement.classList.add("light");
      logo.src = "/public/assets/alarado-icon-homepage.svg";
      imageTheme.forEach((element) => {
        element.src = "/public/assets/Sun_fill.svg";
      });
    } else {
      htmlElement.classList.remove("light");
      htmlElement.classList.add("dark");
      logo.src = "/public/assets/alarado-icon-homepage-light.svg";
      imageTheme.forEach((element) => {
        element.src = "/public/assets/Moon_fill.svg";
      });
    }
  });
});

//Cerrar y abbrir menu
const open = document.getElementById("open");
const main = document.getElementById("main");
const close = document.getElementById("close");

open.addEventListener("click", function () {
  main.classList.remove("invisible");
});

close.addEventListener("click", function () {
  main.classList.add("invisible");
});
