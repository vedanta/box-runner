# Exercises — Stage 9: Edit, Commit, Push Again

## Exercise 1: Run the loop again

**Goal:** Feel how quick the loop becomes once you know it.

**Steps:**
1. Change the tagline in `index.html` from "Press Start to begin your adventure." to "Press Start. Dodge the boxes.".
2. `git add index.html`.
3. `git commit -m "Updated tagline"`.
4. `git push`.
5. Refresh GitHub.

**What happened:** One short loop. No new commands. This is everyday Git.

## Exercise 2: Commit multiple small changes in a row

**Goal:** Practice making many small commits.

**Steps:**
1. Change the High Score value to 250. Commit and push.
2. Change the Lives to 5. Commit and push.
3. Run `git log --oneline` — you see each change as a separate save point.

**What happened:** Small, focused commits are good. Each commit describes one change. Future you can revert any single step without losing the others.

## Exercise 3: Edit directly on GitHub

**Goal:** See that GitHub can also commit for you.

**Steps:**
1. On github.com, open `index.html` in your repo.
2. Click the pencil icon (edit).
3. Change the `<h1>` text.
4. Scroll down, write a commit message, click **Commit changes**.
5. Back in your terminal, run `git pull`. Your local repo updates.

**What happened:** GitHub's web editor makes its own commit on your remote `main`. `git pull` fetches remote commits and merges them into your local branch. Edits can go either way — local-then-push, or remote-then-pull.

## Exercise 4: Look at the reflog

**Goal:** See Git's internal log of everything you did.

**Steps:**
1. Run `git reflog`.

**What happened:** Every commit, checkout, reset, and merge you did is logged here. The reflog is your safety net — even if you accidentally delete something, you can usually find it in `git reflog` and recover.
