# Stage 5 — Experiment on the Branch

> Rewrite `style.css` with a dark theme while standing on the `dark-theme` branch. Commit. Watch `main` stay exactly the way it was.

## What You'll Learn

- How commits attach to the branch you are currently on
- That `main` is untouched while you experiment on another branch
- How to switch branches and see a completely different version of your files

## Prerequisites

You finished [Stage 4](../stage-4-create-branch/readme.md). `git branch` shows `main` and `* dark-theme`.

## What Changes

- `style.css` is rewritten with dark colors and teal accents.
- One new commit is added — but only on the `dark-theme` branch. The `main` branch is untouched.

## Outcome

- On `dark-theme`: the page has a charcoal background, teal heading and button, and a dark scoreboard panel with a teal border.
- On `main`: the page still has the light gray background from Stage 3. No changes.
- `git log --oneline` on `dark-theme` shows four commits. On `main`, still three.
