# Stage 1 — First Save Point

> Turn your folder into a Git repository and make the very first save point.

## What You'll Learn

- What a Git repository is
- `git init` — how to start tracking a folder
- `git status` — how to see what Git knows
- `git add` — how to stage a file for the next save
- `git commit` — how to make a save point

## Prerequisites

You finished [Stage 0](../stage-0-create-screen/readme.md) and can open `index.html` in your browser. You also need Git installed. Check with:

```bash
git --version
```

If that prints a version number like `git version 2.40.0`, you are ready.

## What Changes

The webpage does not change. `index.html` stays exactly the same. What changes is that your folder becomes a **Git repository** and gains its first commit.

## Outcome

After this stage:

- Your `box-runner` folder contains a hidden `.git` directory (that is the Git repo).
- `git log` shows one commit with the message **Created basic Box Runner start screen**.
- `git status` reports `nothing to commit, working tree clean`.

You now have a save point. Even if you deleted `index.html` by accident, Git could bring it back exactly as it is right now.
