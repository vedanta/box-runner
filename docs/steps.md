# Steps — Stage 5: Experiment on the Branch

## Prerequisites

Completed Stage 4. You are standing on `dark-theme` (`git branch` shows `* dark-theme`).

## Steps

### 1. Confirm you are on the right branch

```bash
git branch
```

The asterisk must be next to `dark-theme`. If it is next to `main`, run `git checkout dark-theme` first. This matters — if you edit on the wrong branch, the dark theme will end up on `main` and break the lesson.

### 2. Rewrite `style.css`

Replace the entire contents of `style.css` with:

```css
body {
  font-family: Arial, sans-serif;
  background-color: #222222;
  color: #ffffff;
  text-align: center;
  margin-top: 80px;
}

h1 {
  color: #00ffcc;
}

p {
  color: #cccccc;
}

button {
  background-color: #00ffcc;
  color: #222222;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
}

.scoreboard {
  margin-top: 40px;
  display: inline-block;
  padding: 16px 32px;
  background-color: #333333;
  border: 1px solid #00ffcc;
}
```

### 3. Reload the page

The page is now dark with teal accents. The scoreboard panel has a thin teal border.

### 4. Stage and commit on `dark-theme`

```bash
git add style.css
git commit -m "Tried a dark theme for Box Runner"
```

`git log --oneline` now shows four commits.

### 5. Prove that `main` is untouched (sneak peek)

You will do this for real in Stage 6, but run these commands now to confirm:

```bash
git checkout main
```

Reload `index.html` — the page is light again. The dark theme did not follow you.

```bash
git checkout dark-theme
```

Reload — dark theme is back.

## Verify

- On `dark-theme`, the page is dark with teal accents.
- On `main`, the page is light.
- `git log --oneline` on `dark-theme` shows four commits; on `main` shows three.
