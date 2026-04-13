# Steps — Stage 4: Try a Branch

## Prerequisites

Completed Stage 3. `git log --oneline` shows three commits. `git branch` shows only `main`.

## Steps

### 1. List your branches

```bash
git branch
```

You see one line: `* main`. The asterisk means "this is your current branch."

### 2. Create and switch to a new branch

```bash
git checkout -b dark-theme
```

This does two things in one command:

1. Creates a new branch called `dark-theme`.
2. Switches to it.

You will see a message like `Switched to a new branch 'dark-theme'`.

### 3. List branches again

```bash
git branch
```

Now you see two lines:

```
  main
* dark-theme
```

The asterisk has moved. You are on `dark-theme`.

### 4. Confirm nothing changed

Open `index.html` in the browser. It looks exactly the same as Stage 3. Run `git status` — clean. Run `git log --oneline` — still three commits.

This is important: a new branch by itself changes nothing visible. It just puts a new label on the current commit.

## Verify

- `git branch` lists `main` and `* dark-theme`.
- `git status` says clean.
- `git log --oneline` shows three commits — the same three.
- The browser shows the same styled page with the scoreboard.
