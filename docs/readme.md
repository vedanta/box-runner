# Stage 8 — Push to GitHub

> Upload every commit in your local `main` branch to GitHub in one command.

## What You'll Learn

- `git push -u origin main`
- What the `-u` flag does (sets upstream tracking)
- How to verify a push worked by reloading the GitHub page

## Prerequisites

You finished [Stage 7](../stage-7-remote/readme.md). `git remote -v` shows `origin` pointing at your GitHub repo, and the GitHub page still shows an empty repository.

## What Changes

No local files change. What changes is **GitHub** — your four commits appear online.

## Outcome

- The GitHub repo page now shows `index.html` and `style.css` with the dark theme.
- The "commits" link in the GitHub UI shows all four save points.
- Running `git push` by itself (no arguments) in the future will push to `origin/main`, because `-u` set up tracking.
