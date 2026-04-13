# Exercises — Stage 8: Push to GitHub

## Exercise 1: Browse your commits on GitHub

**Goal:** Get comfortable reading history in the GitHub UI.

**Steps:**
1. Go to your repo page on GitHub.
2. Click the **commits** link (usually shows "4 commits" near the top).
3. Click any commit to see the diff for that save point.

**What happened:** GitHub's commit view is the web version of `git show <hash>`. Every commit message you typed in Stages 1–5 is visible here, in order.

## Exercise 2: View a specific file at a specific commit

**Goal:** Learn to jump through history on GitHub.

**Steps:**
1. On the commits page, click the commit titled "Added scoreboard to the game screen."
2. Click the `style.css` link in that commit.
3. Notice you are seeing `style.css` as it looked at that commit — **before** the dark theme.

**What happened:** GitHub lets you browse any file at any point in history. This is the online version of `git show <hash>:style.css`.

## Exercise 3: Run `git push` with no arguments

**Goal:** Confirm that `-u` set up tracking.

**Steps:**
1. Run `git push`.

**What happened:** You see "Everything up-to-date." Because `-u` linked `main` to `origin/main`, Git now knows exactly where to push with no arguments.

## Exercise 4: Look at the remote tracking branch

**Goal:** Understand `origin/main`.

**Steps:**
1. Run `git branch -r`.
2. Run `git log --oneline origin/main`.

**What happened:** `git branch -r` lists **remote-tracking branches** — your local copy of what the remote looks like. `origin/main` is your cached snapshot of the `main` branch on GitHub. It updates when you push or fetch.
