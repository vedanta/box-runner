# Steps — Stage 7: Connect to GitHub

> This stage uses the GitHub website and a single Git command.

## Prerequisites

Completed Stage 6. You have a GitHub account.

## Steps

### 1. Create an empty repository on GitHub

1. Go to [github.com/new](https://github.com/new).
2. Set **Repository name** to `box-runner`.
3. Leave **Description** blank (or write anything you like).
4. Choose **Public**. Private also works.
5. **Very important:** leave all three of these **unchecked**:
   - Add a README file
   - Add .gitignore
   - Choose a license

   If you check any of them, GitHub creates a first commit on the remote and pushing becomes more complicated.
6. Click **Create repository**.

### 2. Copy the repository URL

On the next page, GitHub shows a "Quick setup" block with a URL. Use the **HTTPS** URL — it looks like:

```
https://github.com/<your-username>/box-runner.git
```

Copy it.

### 3. Add the remote locally

In your terminal, inside the `box-runner` folder:

```bash
git remote add origin https://github.com/<your-username>/box-runner.git
```

Replace `<your-username>` with your actual GitHub username. `origin` is just a name — it is the conventional name for "the main place I push to."

### 4. Verify the remote

```bash
git remote -v
```

You should see two lines:

```
origin  https://github.com/<your-username>/box-runner.git (fetch)
origin  https://github.com/<your-username>/box-runner.git (push)
```

Fetch is for pulling changes down. Push is for uploading changes up. Both point at the same URL.

### 5. Confirm nothing is uploaded yet

Refresh the GitHub page for your repo. It still says it is empty, with instructions for how to "push an existing repository." That confirms that `git remote add` did not send anything — it only stored the address.

## Verify

- `git remote -v` prints the two origin lines.
- The GitHub page for `box-runner` shows an empty repository.
- Your local `git log --oneline` still shows four commits.
