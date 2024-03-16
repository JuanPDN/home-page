document.addEventListener("DOMContentLoaded", function () {
  const theme = document.getElementById("toogle");

  theme.addEventListener("change", function () {
    const htmlElement = document.documentElement;
    const isChecked = theme.checked;
    const logo = document.getElementById("logo");
    const imageTheme = document.getElementById("imageTheme");

    if (!isChecked) {
      htmlElement.classList.remove("dark");
      htmlElement.classList.add("light");
      logo.src = "/public/assets/alarado-icon-homepage.svg";
      imageTheme.src = "/public/assets/sun_fill.svg";
    } else {
      htmlElement.classList.remove("light");
      htmlElement.classList.add("dark");
      logo.src = "/public/assets/alarado-icon-homepage-light.svg";
      imageTheme.src = "/public/assets/Moon_fill.svg";
    }
  });
  
});
