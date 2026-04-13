# Troubleshooting — Stage 3: Add the Scoreboard

## Common Errors

### The scoreboard panel stretches across the whole page

**Cause:** A `<div>` defaults to `display: block`, which makes it take the full width. The CSS rule uses `display: inline-block` to fix this, so you probably forgot that line.

**Fix:** Add `display: inline-block;` to the `.scoreboard` rule in `style.css`.

### The scoreboard styles do not apply

**Cause:** Usually a typo between `class="scoreboard"` in HTML and `.scoreboard` in CSS. They must match exactly, and CSS class selectors start with a `.` — the HTML does not.

**Fix:** Compare the two. HTML: `class="scoreboard"`. CSS: `.scoreboard { }`.

### `git log` shows too much output and fills the screen

**Cause:** `git log` is paged — it uses `less` under the hood.

**Fix:** Press `q` to quit the pager. Or use `git log --oneline` for a shorter view. Or pipe: `git log --oneline | head`.

## FAQ

### Why is the scoreboard inside a div instead of just two paragraphs?

Because you want to style the score and lives as a **group** — one white panel with a border around both. A div gives you a single box to target with CSS.

### What is the difference between a class and an id?

Classes can be reused — many elements can share `class="scoreboard"`. IDs must be unique — only one element per page can have `id="scoreboard"`. Classes use `.` in CSS; ids use `#`. Start with classes and only reach for ids when you truly have a one-of-a-kind element.

### Does `git log` show commits from other branches?

By default, `git log` shows commits reachable from your current branch. To see all branches: `git log --all --oneline --graph`. That command will matter more starting in Stage 4.

### Is the commit hash the same for everyone?

No. Every commit hash depends on the contents, the author, the timestamp, and the parent. Your hashes will be different from anyone else's even if you follow the same steps.
