# Troubleshooting — Stage 6: Merge the Branch

## Common Errors

### `fatal: refusing to merge unrelated histories`

**Cause:** Very rare here, but it happens if the branches were initialized separately. Not expected in this tutorial.

**Fix:** If you really need to merge them, add `--allow-unrelated-histories`. You should not need this in Box Runner.

### Merge created a conflict

**Cause:** Something changed on `main` between the branch point and now. In this tutorial you did nothing on `main` after Stage 3, so a conflict here means you went off-script.

**Fix:** Run `git status` to see which file is conflicted. Open it, find the `<<<<<<<` and `>>>>>>>` markers, choose the version you want, save, then `git add <file>` and `git commit`. If it feels overwhelming, run `git merge --abort` to cancel the merge and try again.

### `git merge dark-theme` says "Already up to date"

**Cause:** You are already on the same commit as `dark-theme`. Probably you forgot to run `git checkout main` first and tried to merge while standing on `dark-theme`.

**Fix:** `git checkout main`, then `git merge dark-theme`.

### After the merge the page still looks light

**Cause:** Browser cache.

**Fix:** Hard reload — `Cmd+Shift+R` or `Ctrl+Shift+R`.

## FAQ

### What is a fast-forward merge?

A merge where your current branch has no commits of its own since it branched. Git can just slide the branch label forward to match the other branch — no merging actually happens. It is the simplest possible outcome.

### Should I delete merged branches?

Usually yes, once you are sure the work landed. Old merged branches clutter `git branch` output. Use `git branch -d <name>` to delete — the lowercase `-d` only deletes fully merged branches, so it is a safe habit.

### Can I merge `main` into `dark-theme` instead?

Yes. `git merge` goes "into the branch you are currently on." That is a common workflow — keeping your feature branch up to date with `main` while you work on it.

### What if I change my mind after merging?

If you have not pushed yet, `git reset --hard HEAD~1` undoes a merge commit, or you can use the reflog (`git reflog`) to find the previous state. Once you push a merge, undoing it gets socially tricky — talk to your team first.
