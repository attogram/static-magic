# GitHub Codespaces

This repository is configured to use [GitHub Codespaces](https://github.com/features/codespaces) to provide a complete, cloud-based development environment.

## How It Works

The configuration is defined in the `.devcontainer/devcontainer.json` file. This file instructs GitHub Codespaces to:

1.  **Use the Docker Environment:** It references our `docker-compose.yml` file to spin up the same development environment that you would use locally.
2.  **Install VS Code Extensions:** It automatically installs a few recommended Visual Studio Code extensions (Docker and GitLens) to enhance the development experience.

## Getting Started

To get started with Codespaces:

1.  Click the **"Code"** button at the top of the repository page.
2.  Select the **"Codespaces"** tab.
3.  Click **"Create codespace on main"**.

GitHub will prepare your cloud environment, and you will be taken to a web-based version of VS Code, fully configured and ready to go. The terminal within VS Code will be inside the running development container.
