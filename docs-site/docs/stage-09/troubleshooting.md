# Troubleshooting — Stage 9: Edit, Commit, Push Again

## Common Errors

### `error: failed to push some refs`

**Cause:** Someone (or some process, or you via the GitHub web editor) added a commit to `origin/main` that you do not have locally.

**Fix:** Run `git pull` first, resolve any conflicts if they come up, then `git push`. This is why teams pull before they push.

### The new line is not visible after reload

**Cause:** Browser cache, or the HTML was added outside the `<div class="scoreboard">` and got styled differently.

**Fix:** Hard reload (`Cmd+Shift+R` / `Ctrl+Shift+R`). Check that the new `<p>High Score: 120</p>` sits between the Lives line and the closing `</div>`.

### `git push` asks for authentication again

**Cause:** Your credential helper did not cache the personal access token, or it expired.

**Fix:** Paste the token again when asked. On macOS, check Keychain for an old "github.com" entry — deleting it lets you save a fresh one.

### `nothing to commit` when I expected a commit

**Cause:** You edited the file but did not save it, or you saved it with no real change.

**Fix:** Save the file in your editor, run `git status` to confirm it is listed, then re-run `git add` and `git commit`.

## FAQ

### Is the tutorial over?

Yes. You know the everyday Git workflow. From here on, you just repeat this loop on your own projects. For more advanced topics like rebasing, pull requests, and conflict resolution, GitHub's own docs and sites like [Pro Git](https://git-scm.com/book/en/v2) are great next steps.

### Should I always push after every commit?

Not necessarily. Some people commit many small changes locally and push them in a batch. Pushing more often gives you an online backup sooner — that is the main tradeoff.

### How do I undo a pushed commit?

If no one else has pulled it yet: `git reset --hard HEAD~1` locally, then `git push --force-with-lease`. If others have pulled it, use `git revert <hash>` instead — that makes a new commit that undoes the old one, which is safer for teammates.

### What should I learn next?

In order of usefulness for a beginner:
1. `.gitignore` — telling Git which files to ignore
2. Pull requests — how teams review changes on GitHub
3. Conflict resolution — what to do when a merge conflicts
4. Rebasing — a different way to combine branches
