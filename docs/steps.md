# Steps — Stage 6: Merge the Branch

## Prerequisites

Completed Stage 5. You are on `dark-theme` with four commits.

## Steps

### 1. Switch to `main`

```bash
git checkout main
```

Look at `git branch` — asterisk is on `main` now. Run `git log --oneline` — three commits, not four. The dark theme commit lives on `dark-theme` only.

### 2. Reload the page

Open `index.html` in the browser. **The light theme is back.**

This is the moment the whole branching concept clicks. You did real work on `dark-theme`, but `main` was completely unaffected. If you had committed the dark theme directly on `main` instead, you would have no escape route.

### 3. Merge `dark-theme` into `main`

```bash
git merge dark-theme
```

Git prints something like `Fast-forward` and lists the file change. This is a **fast-forward merge** — Git just moved the `main` label up to where `dark-theme` already was, because `main` had no newer commits of its own.

### 4. Reload the page

Refresh the browser. The dark theme is now on `main`. You have successfully promoted your experiment to the main version.

### 5. Confirm the history

```bash
git log --oneline
```

Four commits. `git log --oneline --graph --all` shows that `main` and `dark-theme` now point at the same commit.

## Verify

- You are on `main`.
- `git log --oneline` shows four commits, including the dark theme one.
- The page on `main` shows the dark theme.
- `git status` is clean.
