# Walkthrough — Stage 1: First Save Point

> This stage has no code changes. The walkthrough explains each Git command you ran.

## Command: `git init`

```bash
git init
```

**What's happening:**

`git init` turns a normal folder into a Git repository. It creates a hidden folder called `.git` inside `box-runner`. Everything Git remembers — every file version, every commit message, every branch — lives in `.git`. You never edit `.git` directly.

Before `git init`: your folder is just a folder. After `git init`: Git is watching.

## Command: `git status`

```bash
git status
```

**What's happening:**

`git status` is the "what is going on right now?" command. At this point it tells you `index.html` is **untracked** — Git can see the file, but has not been told to care about it yet.

You will run `git status` constantly while learning Git. It is the safest command — it never changes anything, it just reports.

## Command: `git add index.html`

```bash
git add index.html
```

**What's happening:**

`git add` moves a file into the **staging area**. Think of the staging area as a cardboard box labeled "things to save next." The file is not saved yet — it is just packed into the box.

Running `git status` after this shows `index.html` under **Changes to be committed**.

## Command: `git commit -m "..."`

```bash
git commit -m "Created basic Box Runner start screen"
```

**What's happening:**

`git commit` takes everything in the staging area and writes it into the Git history as a permanent save point. The `-m` flag attaches a short message describing the save.

Good commit messages describe what this save represents: **Created basic Box Runner start screen**. Future you will read this line in `git log` and know exactly what is in that commit.

## Command: `git log`

```bash
git log
```

**What's happening:**

`git log` shows every save point in order, newest first. Right now there is one entry. After Stage 2 there will be two, and so on. `git log` is how you look backward in time.

Try `git log --oneline` for a shorter view — each commit becomes a single line.
