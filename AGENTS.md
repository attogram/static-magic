# AGENTS.md: A Guide for AI Assistants

Hello, AI assistant! This file is your guide to understanding and working with the `base` repository. Please read it carefully before making any changes.

## Core Philosophy

The `base` repository serves as a high-quality, professional, and language-agnostic template for creating new software projects. Its core principles are:

1.  **Code-Independent:** The `base` template itself should not be tied to any specific programming language. The included Docker environment is based on Ubuntu and NGINX to be as generic as possible.
2.  **Well-Documented:** Every feature, configuration file, and workflow should have corresponding documentation in the `/docs` directory. The goal is to leave no part of the repository unexplained.
3.  **Guidance over Prescription:** For files like `CONTRIBUTING.md` or `LICENSE`, the template provides sensible defaults and guides the end-user on how to customize them, rather than enforcing a single choice.
4.  **Automation:** The repository leverages GitHub Actions for CI, deployment, and releases to automate common developer tasks.

## Repository Structure

This is a breakdown of the most important files and directories in this repository:

- **`.github/`**: Contains all GitHub-specific configurations.
  - `workflows/`: Houses the GitHub Actions workflows.
    - `ci.yml`: Lints configuration files for syntax and style.
    - `pages.yml`: Deploys the documentation to GitHub Pages.
    - `release-on-tag.yml`: Automates the creation of GitHub Releases from a git tag.
  - `ISSUE_TEMPLATE/` & `PULL_REQUEST_TEMPLATE.md`: Templates for contributors.
  - `RELEASE_TITLE.txt` & `RELEASE_BODY.md`: User-editable files for customizing release notes.
  - `SECURITY.md`: A template for the user's security policy.

- **`docs/`**: Contains all documentation for the project. Each major feature or component has its own corresponding `.md` file in this directory.

- **`docker/`**: Contains the development environment.
  - `Dockerfile`: Builds a generic Ubuntu + NGINX environment.
  - `nginx.conf` & `html/index.html`: A simple web server that acts as a health check.

- **`.devcontainer/`**: Configuration for GitHub Codespaces, making it easy to spin up the development environment in the cloud.

- **Root Files**:
  - `AGENTS.md`: This file!
  - `README.md`: The main entry point, which links to the documentation.
  - `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `LICENSE`: Standard community files, designed as templates for the end-user.
  - `.gitignore`, `.editorconfig`, `.gitattributes`, `.prettierrc`: Configuration files for git and code styling.
  - `docker-compose.yml`: Used to build and run the Docker-based development environment.
  - `render.yaml`: Infrastructure-as-code for deploying the application to Render.com.
  - `_config.yml`: Configuration for the Jekyll build for GitHub Pages.

## Guidelines for Modification

- **Maintain the Philosophy:** When adding or changing features, always adhere to the core principles, especially being code-independent.
- **Update Documentation:** If you change a feature, you **must** update its corresponding documentation in the `docs/` directory. If you add a new feature, you **must** create a new documentation file for it.
- **Verify Your Work:** After creating or modifying a file, use a read-only tool like `read_file` or `ls` to confirm your changes were applied correctly before marking a step as complete.

Thank you for your help in maintaining and improving this repository!
