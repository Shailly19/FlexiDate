const darkModeToggle = document.getElementById("darkModeToggle");
const lightModeStylesheet = document.getElementById("lightModeStylesheet");
const darkModeStylesheet = document.getElementById("darkModeStylesheet");
const toggleText = document.querySelector(".toggle-label");

darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    darkModeStylesheet.removeAttribute("disabled");
    lightModeStylesheet.setAttribute("disabled", true);
    toggleText.textContent = "Dark";
  } else {
    lightModeStylesheet.removeAttribute("disabled");
    darkModeStylesheet.setAttribute("disabled", true);
    toggleText.textContent = "Light";
  }
});

  