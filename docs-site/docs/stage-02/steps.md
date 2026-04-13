# Steps — Stage 2: Add Styling

> Every step is a file edit or a Git command run from inside `box-runner`.

## Prerequisites

Completed Stage 1. `git log --oneline` shows one commit.

## Steps

### 1. Create `style.css`

Inside the `box-runner` folder, create a new file called `style.css`:

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  text-align: center;
  margin-top: 80px;
}

h1 {
  color: #333333;
}

p {
  color: #555555;
}

button {
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
}
```

This centers the page, sets a light background, and gives the button a clean look.

### 2. Edit `index.html` to link the stylesheet

Add one line inside `<head>`, right after the `<title>` line:

```html
    <link rel="stylesheet" href="style.css">
```

The complete `index.html` now looks like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Box Runner</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Box Runner</h1>
    <p>Press Start to begin your adventure.</p>
    <button>Start Game</button>
  </body>
</html>
```

### 3. Reload the page in your browser

You should see the new gray background, centered layout, and green button. Do this **before** committing — the visible change is the reason you are committing.

### 4. Check the status

```bash
git status
```

You will see two different things:

- `style.css` under **Untracked files** — Git has never seen it before.
- `index.html` under **Changes not staged for commit** — Git knows this file, and it has been edited.

### 5. Stage both files

```bash
git add .
```

The `.` means "everything changed in the current folder." Both `style.css` and `index.html` are now staged.

### 6. Commit the save point

```bash
git commit -m "Added styling to the Box Runner screen"
```

One commit, two files.

## Verify

- `git log --oneline` shows two commits.
- `git status` prints clean.
- Reloading the browser still shows the styled page.
