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

  // Function to load HTML components
  const loadComponent = async (url, elementId) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
      }
      const text = await response.text();
      const element = document.getElementById(elementId);
      if (element) {
        element.innerHTML = text;
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Load shared components and then initialize dependent scripts
  const initializePage = async () => {
    // Define components to load
    const components = [
      { url: "/header.html", id: "main-header" },
      { url: "/nav.html", id: "main-nav" },
      { url: "/footer.html", id: "main-footer" },
    ];

    // Load all components in parallel
    await Promise.all(components.map((c) => loadComponent(c.url, c.id)));

    // Once components are loaded, initialize scripts that depend on them
    // Hamburger menu toggle
    const navToggle = document.getElementById("nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (navToggle && navLinks) {
      navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        navToggle.classList.toggle("active");
      });
    }
  };

  // Initialize the page
  initializePage();
});
