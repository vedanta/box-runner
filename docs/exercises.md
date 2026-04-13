# Exercises — Stage 6: Merge the Branch

## Exercise 1: Delete the merged branch

**Goal:** Clean up branches that have been merged.

**Steps:**
1. Run `git branch`. You still see `dark-theme`.
2. Run `git branch -d dark-theme`.
3. Run `git branch`. `dark-theme` is gone.

**What happened:** Once a branch is merged into `main`, the branch label has served its purpose. `git branch -d` refuses to delete unmerged branches — that is a safety net. The capital `-D` force-deletes, which you should only use when you know what you are doing.

## Exercise 2: Inspect the merge with `--graph`

**Goal:** See the merge visually.

**Steps:**
1. Run `git log --oneline --graph --all`.

**What happened:** You see all four commits on a single straight line. The fast-forward merge left no fork in the history — it is as if the dark theme commit was always on `main`.

## Exercise 3: Force a merge commit

**Goal:** See the other kind of merge.

**Steps:**
1. Recreate the branch: `git checkout -b dark-theme`.
2. Switch back to main: `git checkout main`.
3. Make a new tiny commit on `main` so the two branches actually diverge:
   ```bash
   echo "<!-- Box Runner -->" >> index.html
   git add index.html
   git commit -m "Added a comment to index.html"
   ```
4. Now merge: `git merge dark-theme --no-ff`.
5. Run `git log --oneline --graph --all`.
6. When you are done experimenting, undo: `git reset --hard HEAD~2` and optionally re-merge cleanly.

**What happened:** `--no-ff` forces Git to create a merge commit even when a fast-forward would be possible, so the history shows a visible fork and join. Many teams prefer this because it preserves the fact that a branch existed.

## Exercise 4: Count commits on each branch

**Goal:** Confirm the merge's effect.

**Steps:**
1. Run `git rev-list --count main`.
2. Run `git rev-list --count dark-theme` (if you still have the branch).

**What happened:** Both counts are 4. Both branches point at the same commit now, so they have the same number of commits reachable from them.
