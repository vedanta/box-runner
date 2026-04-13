# Exercises — Stage 3: Add the Scoreboard

## Exercise 1: View history in different formats

**Goal:** Get comfortable flipping between log views.

**Steps:**
1. Run `git log`.
2. Run `git log --oneline`.
3. Run `git log --oneline --graph`.
4. Run `git log --stat`.

**What happened:** Each flag gives you a different angle on the same three commits. `--oneline` is compact, `--graph` draws a line between commits, `--stat` adds a summary of which files changed in each commit.

## Exercise 2: Inspect one commit

**Goal:** See exactly what changed in a single save point.

**Steps:**
1. Run `git log --oneline` and copy the short hash of the Stage 2 commit.
2. Run `git show <hash>`.

**What happened:** `git show` prints the commit message and the full diff of what that commit changed. This is how you audit old changes.

## Exercise 3: Change the starting lives

**Goal:** Practice the edit-commit loop.

**Steps:**
1. Change `<p>Lives: 3</p>` to `<p>Lives: 5</p>`.
2. Reload the browser to see 5 lives.
3. Run `git diff` to review your change.
4. Revert with `git restore index.html` (no commit needed).
5. Reload the browser — back to 3 lives.

**What happened:** `git restore <file>` throws away unsaved changes and brings the file back to the last committed version. Editing is risk-free when Git has your back.

## Exercise 4: Count your commits

**Goal:** Learn how to count history programmatically.

**Steps:**
1. Run `git rev-list --count HEAD`.

**What happened:** `rev-list --count HEAD` prints the number of commits reachable from the current position. You should see `3`. This is handy in scripts and CI systems.
