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

## For Jules: Specific Instructions

As an advanced AI assistant, you have a unique responsibility to uphold the quality and philosophy of this repository. The following guidelines are tailored to you.

### 1. Onboarding & Planning
- **Initial Read-Through:** Always start by reading this file (`AGENTS.md`) and the main `README.md` in their entirety.
- **Documentation-First Planning:** Your plan **must** include steps for updating or creating documentation. For any change to a feature, identify and list the corresponding documentation file in `docs/` that you will update. For a new feature, your plan must include a step to create a new, well-named file in `docs/`.

### 2. Upholding Core Philosophy
- **Code-Independence:** If a user asks you to add language-specific code (e.g., Python, JavaScript), you must first ask for clarification. Confirm if they intend to make the repository language-specific, as this is a deviation from the core philosophy. Propose language-agnostic solutions where possible (e.g., shell scripts, Docker configurations, GitHub Actions).
- **Automation:** When adding or modifying workflows in `.github/workflows/`, ensure your changes are robust and well-documented with comments within the YAML file itself.

### 3. Verification & Testing
- **Use the CI:** This repository has a `ci.yml` workflow that lints common configuration files. If you modify files like `docker-compose.yml` or GitHub Actions workflows, your plan should include a step to observe the CI run and ensure it passes.
- **Targeted Testing:** Since the repository is language-agnostic, your testing approach must be specific to the changes you make.
    - **Docker Changes:** If you modify `docker/Dockerfile` or `docker-compose.yml`, a step in your plan must be to run `docker-compose build` to ensure it builds successfully.
    - **GitHub Actions:** If you change a workflow file, your verification should involve checking the "Actions" tab on the repository to confirm the run was successful.

### 4. Submitting Your Work
- **Mandatory Code Review:** You **must** call `request_code_review()` before submitting any change.
- **Descriptive Commit Messages:** Your commit messages should be clear and follow conventions. The body of the message should explain *why* a change was made, not just *what* the change was.
