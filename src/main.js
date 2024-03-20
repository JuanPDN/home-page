//cambiar tema
const theme = document.querySelector("#toogle");

theme.addEventListener("change", function () {
  const htmlElement = document.documentElement;
  const isChecked = theme.checked;
  const logo = document.querySelector(".logo");
  const imageTheme = document.querySelector("#imageTheme");
  const menu = document.querySelector(".ImageMenu");

  if (!isChecked) {
    htmlElement.classList.remove("dark");
    htmlElement.classList.add("light");
    logo.src = "./assets/alarado-icon-homepage.svg";
    imageTheme.src = "./assets/Sun_fill.svg";
  } else {
    htmlElement.classList.remove("light");
    htmlElement.classList.add("dark");
    logo.src = "./assets/alarado-icon-homepage-light.svg";
    imageTheme.src = "./assets/Moon_fill.svg";
  }
});

const menu = document.getElementById("main");
const close_menu = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
stroke-width="1.5" stroke="black" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>`;
const open_menu = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>`;

menu.addEventListener("change", function () {
  const imageMenu = document.querySelector(".imageMenu");
  const isChecked = menu.checked;
  if (isChecked) {
    imageMenu.innerHTML = close_menu;
  } else {
    imageMenu.innerHTML = open_menu;
  }
});
