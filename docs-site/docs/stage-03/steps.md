# Steps — Stage 3: Add the Scoreboard

## Prerequisites

Completed Stage 2. Running `git log --oneline` shows two commits.

## Steps

### 1. Edit `index.html` to add the scoreboard

Add a new `<div>` right after the button, before the closing `</body>` tag:

```html
    <div class="scoreboard">
      <p>Score: 0</p>
      <p>Lives: 3</p>
    </div>
```

The complete `index.html`:

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
    <div class="scoreboard">
      <p>Score: 0</p>
      <p>Lives: 3</p>
    </div>
  </body>
</html>
```

### 2. Edit `style.css` to style the scoreboard

Add this new rule at the bottom of `style.css`:

```css
.scoreboard {
  margin-top: 40px;
  display: inline-block;
  padding: 16px 32px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
}
```

The dot in `.scoreboard` means "apply this rule to any element with `class="scoreboard"`."

### 3. Reload the page

You should see a small white panel below the button showing **Score: 0** and **Lives: 3**.

### 4. Stage and commit

```bash
git add .
git commit -m "Added scoreboard to the game screen"
```

### 5. Read your history

```bash
git log
```

You see three entries, newest first. Each has a hash, an author, a date, and a message.

Try the compact view too:

```bash
git log --oneline
```

Three lines. Three save points.

## Verify

- The browser shows a scoreboard panel.
- `git log --oneline` lists three commits.
- `git status` is clean.
