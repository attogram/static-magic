document.addEventListener("DOMContentLoaded", () => {
  const themeSwitcher = document.getElementById("theme-switcher");
  const currentTheme = localStorage.getItem("theme");

  // Apply saved theme or OS preference
  if (currentTheme) {
    document.body.classList.toggle("dark-mode", currentTheme === "dark");
    if (themeSwitcher) {
      themeSwitcher.textContent =
        currentTheme === "dark" ? "Light Mode" : "Dark Mode";
    }
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.body.classList.add("dark-mode");
    if (themeSwitcher) {
      themeSwitcher.textContent = "Light Mode";
    }
  } else {
    if (themeSwitcher) {
      themeSwitcher.textContent = "Dark Mode";
    }
  }

  // Theme switcher button event listener
  if (themeSwitcher) {
    themeSwitcher.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      let theme = "light";
      if (document.body.classList.contains("dark-mode")) {
        theme = "dark";
      }
      localStorage.setItem("theme", theme);
      themeSwitcher.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
    });
  }
});
