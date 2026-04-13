# Troubleshooting — Stage 2: Add Styling

## Common Errors

### The page looks unstyled after reloading

**Cause:** The browser cannot find `style.css`. Either the filename is wrong, the `href` is wrong, or the file is in a different folder.

**Fix:** Make sure `style.css` is in the same folder as `index.html` and the `<link>` tag says `href="style.css"` — no leading slash, no subfolder.

### `git add .` complains "pathspec did not match"

**Cause:** You ran the command outside the `box-runner` folder.

**Fix:** `cd box-runner` and try again.

### The commit includes more files than I expected

**Cause:** `git add .` grabs everything that changed in the current folder, including editor backup files or `.DS_Store` on macOS.

**Fix:** Run `git status` **before** `git add` to see what will be staged. If you see files you did not mean to commit, stage them individually: `git add index.html style.css`.

### Browser still shows the old styles after editing `style.css`

**Cause:** The browser cached the old stylesheet.

**Fix:** Hard reload. On macOS: `Cmd+Shift+R`. On Windows/Linux: `Ctrl+Shift+R`.

## FAQ

### Why one commit instead of two?

Because the HTML edit and the new CSS file are part of the **same change** — "I added styling." A commit should represent a single logical change, not a single file. If you made two commits here you would have one broken commit ("linked a CSS file that does not exist") followed by one that fixes it.

### Can I split a commit into two later if I want to?

Yes — with `git reset` and re-staging, or with interactive rebase. That is advanced territory. For now, stage carefully before committing.

### Why does `git add .` include `style.css` if it was never tracked?

`git add` means "stage for the next commit." It does not care whether the file was tracked before. New files become tracked the moment you stage them.
