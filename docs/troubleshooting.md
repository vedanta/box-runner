# Troubleshooting — Stage 4: Try a Branch

## Common Errors

### `fatal: A branch named 'dark-theme' already exists`

**Cause:** You already created the branch (maybe in an earlier attempt) and are trying to create it again.

**Fix:** Just switch to it: `git checkout dark-theme`. Or delete and recreate: `git branch -D dark-theme && git checkout -b dark-theme`.

### `error: Your local changes to the following files would be overwritten by checkout`

**Cause:** You have uncommitted changes and Git is protecting them. Switching branches could destroy those changes.

**Fix:** Either commit the changes first (`git add . && git commit -m "..."`) or temporarily stash them (`git stash`). You can restore stashed changes later with `git stash pop`.

### I created the branch on the wrong commit

**Cause:** You ran `git checkout -b dark-theme` before finishing Stage 3, so the new branch is rooted somewhere earlier in the history.

**Fix:** Delete and recreate: `git checkout main`, `git branch -D dark-theme`, then make sure `git log --oneline` on `main` shows all three commits. Now run `git checkout -b dark-theme`.

## FAQ

### Do I have to name it `dark-theme`?

For this tutorial, yes — so the rest of the instructions make sense. In real projects, branch names follow your team's convention. Common patterns are `feature/foo`, `fix/bar`, or just a short word.

### Is there a difference between `git checkout -b` and `git switch -c`?

No, they do the same thing for creating and switching to a branch. `git switch` is a newer command introduced to separate "switch branches" from the many other things `git checkout` can do. Both work.

### Can two people have branches with the same name?

Yes — branches are local until you push them. We cover pushing in Stage 8. For now, your `dark-theme` lives only on your computer.

### Why does the tutorial check out a branch if nothing changes?

Because the concept is subtle. If you immediately made a visible change, you would conflate "creating a branch" with "committing on a branch." Splitting them into two stages makes each idea stand on its own.
