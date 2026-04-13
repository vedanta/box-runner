# Stage 4 — Try a Branch

> Create a new branch called `dark-theme`. No files change yet — the lesson is what a branch actually is.

## What You'll Learn

- What a branch is (a movable label, not a copy of files)
- `git branch` — list branches and see which one you are on
- `git checkout -b <name>` — create and switch to a new branch

## Prerequisites

You finished [Stage 3](../stage-03/). Running `git log --oneline` shows three commits, all on `main`.

## What Changes

The project files do **not** change. No HTML edit, no CSS edit, no new file, no new commit. You create a new branch and switch to it.

## Outcome

- `git branch` lists two branches: `main` and `dark-theme`.
- The asterisk in the output points to `dark-theme` — that is your current branch.
- The webpage looks exactly the same.

This is the stage where the mental model matters more than the result. A branch is not a copy of your project — it is a label that marks your place in the history.
