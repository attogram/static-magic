# GitHub Pages Site

This repository is configured to use [GitHub Pages](https://pages.github.com/) to host a simple, clean website for the project.

## How It Works

The site is built and deployed by the `.github/workflows/pages.yml` workflow. Here's a summary of the process:

1.  **Trigger:** The workflow runs automatically on every push to the `main` branch.
2.  **Jekyll Build:** It uses the standard `jekyll-build-pages` GitHub Action to build a static website.
3.  **Homepage:** It is configured to use the root `README.md` file as the content for the homepage (`index.html`) of the site.
4.  **Styling:** The `_config.yml` file in the root of the repository specifies the `jekyll-theme-primer` theme, which gives the site the standard GitHub look and feel.
5.  **Deployment:** The built static site is then deployed to GitHub Pages.

## Accessing the Site

After the first push to `main`, the site will be available at a URL like:

`https://<your-username>.github.io/<your-repository-name>/`

You can also find the URL in the "Pages" section of your repository's settings.
