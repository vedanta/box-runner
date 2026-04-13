# Steps — Stage 1: First Save Point

> Follow these steps in order. Every step is a terminal command run from inside the `box-runner` folder.

## Prerequisites

Completed Stage 0. You have a `box-runner` folder with `index.html` inside it. Git is installed.

## Steps

### 1. Move into the project folder

```bash
cd box-runner
```

Every Git command in this tutorial runs from inside this folder.

### 2. Initialize the Git repository

```bash
git init
```

This creates a hidden `.git` folder inside `box-runner`. That hidden folder is the entire Git repository — every save point will eventually live there.

You may see a message like `Initialized empty Git repository in /.../.git/`. That is the confirmation.

### 3. Check the status

```bash
git status
```

You will see `index.html` listed under **Untracked files**. Untracked means Git can see it, but is not yet tracking its history.

### 4. Stage `index.html`

```bash
git add index.html
```

Staging is "getting ready to save." The file is now lined up to be included in the next commit, but the commit has not happened yet.

Run `git status` again. `index.html` has moved to **Changes to be committed**.

### 5. Make the first commit

```bash
git commit -m "Created basic Box Runner start screen"
```

This is the save point. The `-m` flag is short for "message" — the text in quotes is a note describing what you saved.

### 6. View your history

```bash
git log
```

You see one commit with the message you just wrote, your name, and the date. That is your first save point.

## Verify

- `git status` prints `nothing to commit, working tree clean`.
- `git log --oneline` prints one line ending in `Created basic Box Runner start screen`.
- Opening `index.html` in the browser still shows the same page from Stage 0.
