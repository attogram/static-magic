# Frontend Architecture

The frontend of this website is built with vanilla HTML, CSS, and JavaScript, with a focus on simplicity and maintainability.

## Shared Components

To avoid code duplication and make site-wide updates easier, the website uses a shared component system for the header, navigation, and footer.

- **`/_header.html`**: The main site header.
- **`/_nav.html`**: The main site navigation.
- **`/_footer.html`**: The main site footer.

These HTML "fragments" are dynamically loaded into each page by the main JavaScript file, `script.js`. The script fetches the content of these files and injects them into placeholder elements (`<header id="main-header">`, `<nav id="main-nav">`, and `<footer id="main-footer">`) in the main HTML files.

## Mobile Navigation

The navigation includes a mobile-friendly "hamburger" menu. The CSS in `style.css` handles the layout changes for mobile devices, and the JavaScript in `script.js` handles the toggle functionality.
