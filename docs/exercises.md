# Exercises — Stage 4: Try a Branch

## Exercise 1: Switch back and forth

**Goal:** Feel what "switching branches" actually does.

**Steps:**
1. Run `git checkout main`. Check `git branch` — asterisk is on `main`.
2. Reload `index.html` in your browser. Exactly the same.
3. Run `git checkout dark-theme`. Check `git branch` — asterisk is on `dark-theme`.
4. Reload again. Still exactly the same.

**What happened:** Because both branches point at the same commit, switching between them changes nothing on disk. Branches diverge only after you commit something new on one of them.

## Exercise 2: Peek at the branch label files

**Goal:** Prove that a branch is literally just a file pointing at a commit hash.

**Steps:**
1. Run `cat .git/refs/heads/main`.
2. Run `cat .git/refs/heads/dark-theme`.

**What happened:** Both commands print the same 40-character commit hash. That is the entire mechanism of branching — two small files holding the same hash. When you commit on `dark-theme`, only that file updates.

## Exercise 3: Create and delete a throwaway branch

**Goal:** Learn how to clean up experimental branches.

**Steps:**
1. Run `git checkout -b scratch`.
2. Run `git branch` — you now have three branches.
3. Run `git checkout dark-theme`.
4. Run `git branch -d scratch`.
5. Run `git branch` — `scratch` is gone.

**What happened:** `git branch -d <name>` deletes a branch label. It is safe here because `scratch` had no unique commits. Git refuses to delete a branch with commits that are not merged anywhere — it uses capital `-D` for that.

## Exercise 4: See where HEAD points

**Goal:** Understand the `HEAD` concept.

**Steps:**
1. Run `cat .git/HEAD`.

**What happened:** You see something like `ref: refs/heads/dark-theme`. `HEAD` is Git's note-to-self about which branch you currently have checked out. When you switch branches, Git updates this one file.
