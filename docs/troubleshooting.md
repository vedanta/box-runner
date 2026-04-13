# Troubleshooting — Stage 5: Experiment on the Branch

## Common Errors

### The dark theme appeared on `main` instead of `dark-theme`

**Cause:** You edited and committed while standing on the wrong branch. Easy mistake — always check `git branch` before committing.

**Fix:** Hardest fix of this tutorial, but still short. On `main`:

```bash
git reset --hard HEAD~1   # removes the wrong commit from main
```

Then switch and redo:

```bash
git checkout dark-theme
```

Edit `style.css`, commit. Before committing, double-check `git branch`.

### `git commit` says "nothing to commit"

**Cause:** You did not save your file after editing, or you edited a different file than `style.css`.

**Fix:** Save the file in your editor, run `git status` to confirm `style.css` is listed under changes, then `git add style.css` and commit again.

### Switching back to `main` shows the dark theme

**Cause:** Either you did not commit on `dark-theme` first (so the change is "floating" and follows you), or you accidentally committed on `main`.

**Fix:** Run `git log --oneline` on each branch. `main` should have three commits, `dark-theme` four. If not, see the first error above.

### The teal color looks off

**Cause:** Hex colors are strict: `#00ffcc` is six characters after the `#`, and zero is the digit, not the letter O.

**Fix:** Copy the color directly from `steps.md`. No typing.

## FAQ

### Why does rewriting the whole file feel different from adding a few rules?

Because this is an experiment. A dark theme is a theme change, not a layering on top of the light theme. Rewriting makes the intent clear and the diff readable.

### Can I keep both themes at the same time?

Not in one file without extra tools. You could add a second CSS file, or use CSS classes on the body. Those are both valid approaches and would make a good follow-up project — but they are beyond this Git-focused tutorial.

### Is it okay to commit many small experiments on a branch?

Yes. Branches are cheap. Commit often, try wild things, and throw away the whole branch (`git branch -D dark-theme`) if you hate the result. You lose nothing on `main`.
