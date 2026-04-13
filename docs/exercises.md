# Exercises — Stage 7: Connect to GitHub

## Exercise 1: Inspect `.git/config`

**Goal:** See where the remote is actually stored.

**Steps:**
1. Run `cat .git/config`.
2. Look for a `[remote "origin"]` section.

**What happened:** The remote is just a few lines of text in `.git/config`. Nothing magical. If you wanted to, you could edit that file by hand — but use `git remote` commands instead so Git validates the input.

## Exercise 2: Remove and re-add the remote

**Goal:** Practice the full lifecycle of a remote.

**Steps:**
1. Run `git remote remove origin`.
2. Run `git remote -v` — no remotes listed.
3. Run `git remote add origin https://github.com/<your-username>/box-runner.git` again.
4. Run `git remote -v` — origin is back.

**What happened:** Removing a remote only deletes the local pointer. The GitHub repo is untouched. You can add and remove remotes freely.

## Exercise 3: Change the URL

**Goal:** Learn `git remote set-url`.

**Steps:**
1. Run `git remote set-url origin https://github.com/<your-username>/box-runner.git` (same URL — pretend it changed).
2. Run `git remote -v` to confirm.

**What happened:** `set-url` replaces the existing URL instead of adding a new one. Useful when you move a repo between accounts or migrate between hosts.

## Exercise 4: Peek at the empty repo on GitHub

**Goal:** Get familiar with the GitHub UI.

**Steps:**
1. Go to your repo page on github.com.
2. Find the "Quick setup" box.
3. Read the commands GitHub suggests — you will recognize most of them.

**What happened:** GitHub offers two flows: "create a new repository on the command line" and "push an existing repository." You are doing the second flow, manually.
