# Merging `base` Into an Existing Repository

This guide explains how to merge the `attogram/base` repository into your existing project. This is useful for incorporating the `base` features, such as the Docker environment and GitHub Actions, into a project that has already been started.

There are two ways to do this: an easy method using the GitHub web interface, and an advanced method using the command line on your local machine.

---

## Easy Method: Using GitHub Codespaces (Web-Based)

This method is recommended if you are not familiar with the command line or do not have Git installed on your machine. It uses GitHub Codespaces, which provides a development environment that runs in your browser.

1.  **Navigate to Your Repository:**
    Go to the main page of your own existing repository on GitHub.

2.  **Launch a New Codespace:**
    - Click the **"<> Code"** button.
    - Go to the **"Codespaces"** tab.
    - Click **"Create codespace on [your-branch-name]"**. This will create a new development environment and open it in a new browser tab.

3.  **Open the Terminal:**
    Once the Codespace has loaded, you will see a code editor and a file browser. You need to open the terminal:
    - Click the "hamburger" menu (☰) in the top-left corner.
    - Go to **"Terminal" > "New Terminal"**.

4.  **Run the Merge Commands:**
    In the terminal, you will now run a series of Git commands. These are the same commands as the advanced method, but you are running them in the browser instead of on your local machine.
    - **Add `base` as a remote:** This tells Git where to find the `attogram/base` repository.
      ```bash
      git remote add base https://github.com/attogram/base.git
      ```
    - **Fetch and merge `base`:** This downloads the `base` repository and merges it into your project.
      ```bash
      git fetch base
      git merge base/main --allow-unrelated-histories
      ```

5.  **Handle Merge Conflicts:**
    If there are any merge conflicts, the Codespace will highlight the affected files in the file browser.
    - Click on a conflicted file to open it.
    - The editor will show you the conflicting changes with markers (`<<<<<<<`, `=======`, `>>>>>>>`).
    - You can use the buttons provided by the editor (**"Accept Current Change"**, **"Accept Incoming Change"**, etc.) to resolve the conflicts.
    - Once you have resolved the conflicts in a file, save it.

6.  **Commit and Push the Changes:**
    - Go to the **"Source Control"** tab on the left-hand side (it looks like a branching icon).
    - Enter a commit message (e.g., "Merge attogram/base").
    - Click the checkmark icon to commit the changes.
    - Click the **"Sync Changes"** button to push the changes to your repository on GitHub.

7.  **Create a Pull Request:**
    - Go back to your repository's main page on GitHub.
    - You will see a notification to create a Pull Request from your recently pushed changes. Click on it, review the details, and create the PR.

---

## Advanced Method: Using the Command Line

This method is for users who are comfortable with the command line and have Git installed on their local machine.

### 1. Add `base` as a Remote

First, you need to add the `base` repository as a remote to your local Git repository. This allows you to fetch its branches and history.

Open your terminal, navigate to your project's root directory, and run the following command:

```bash
git remote add base https://github.com/attogram/base.git
```

### 2. Fetch and Merge `base`

Next, fetch the `base` repository's history and merge its `main` branch into your project's main branch.

```bash
git fetch base
git merge base/main --allow-unrelated-histories
```

### 3. Handle Merge Conflicts

It is highly likely that you will encounter merge conflicts. To resolve them:

1.  **Identify Conflicting Files:** Run `git status` to see a list of files with conflicts.
2.  **Open the Files:** Open each conflicting file in your code editor and resolve the conflicts by editing the file and removing the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).
3.  **Stage the Resolved Files:** After resolving the conflicts, stage the files using `git add`.
    ```bash
    git add .
    ```
4.  **Commit the Merge:** Once all conflicts are resolved, commit the merge.
    ```bash
    git commit
    ```

### 4. Create a Pull Request

After the merge is complete, push the changes to your repository and create a Pull Request.

1.  **Push Your Branch:**
    ```bash
    git push origin your-branch-name
    ```
2.  **Open a Pull Request:** Go to your repository on GitHub. You will see a prompt to create a new Pull Request. Click on it, fill out the details, and create the PR.
