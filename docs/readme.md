# Stage 6 — Merge the Branch

> Switch back to `main`, see the light theme return, then merge `dark-theme` into `main` to adopt the experiment.

## What You'll Learn

- How `git checkout main` brings back the version on `main`
- How `git merge dark-theme` pulls commits from another branch onto your current branch
- What a fast-forward merge is

## Prerequisites

You finished [Stage 5](../stage-5-dark-theme/readme.md). `git log --oneline` on `dark-theme` shows four commits. On `main`, three.

## What Changes

- You switch to `main`. For a moment, the webpage looks like Stage 3 again (light theme). **This is the "aha" moment.**
- You run `git merge dark-theme`. The dark theme is now on `main`.

## Outcome

- `main` now has four commits.
- The page on `main` looks identical to the page on `dark-theme`.
- `dark-theme` still exists. You can delete it later if you want, but merging does not destroy it.
