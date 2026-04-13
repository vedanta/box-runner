# Walkthrough — Stage 4: Try a Branch

> No code changes. The walkthrough explains the two Git commands you ran.

## Command: `git branch`

```bash
git branch
```

**What's happening:**

`git branch` with no arguments lists every branch in your local repository. It also marks your current branch with an asterisk (`*`). Think of it as "where am I?" for Git.

Before Stage 4, there is only `main`. After Stage 4, there is `main` and `dark-theme`.

## Command: `git checkout -b dark-theme`

```bash
git checkout -b dark-theme
```

**What's happening:**

`git checkout -b <name>` is a two-for-one:

1. `git branch <name>` — create a branch called `<name>` pointing at the current commit.
2. `git checkout <name>` — switch to that branch so future commits land on it.

The `-b` flag is what adds the "create" step. Without `-b`, `git checkout` assumes the branch already exists.

## The mental model

A branch is a **label that moves**. It is not a folder, not a copy of your files, not a second version of the project on disk.

Right now, both `main` and `dark-theme` point at the same commit — the Stage 3 "Added scoreboard to the game screen" save point. When you make a new commit from `dark-theme`, that new commit becomes the latest on `dark-theme`, but `main` stays where it was.

That is why the files on disk do not change when you create a branch. There is nothing new yet. You just planted a second flag on the same hill.

## Command: `git status` (sanity check)

```bash
git status
```

**What's happening:**

Running `git status` after creating a branch is a useful habit. It should say `nothing to commit, working tree clean` — confirming that branching did not modify any files.
