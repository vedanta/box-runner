# Changelog — Stage 8: Push to GitHub

## Previous Stage

Stage 7: Connect to GitHub (branch: `stage-7-remote`)

## Files Changed

No project files changed.

| Change | What and Why |
|--------|--------------|
| GitHub repo populated | All four local commits uploaded to `origin/main`. |
| `.git/config` gains `branch.main.remote = origin` | Set up by the `-u` flag so future `git push` calls know where to go. |

## Summary

A single command uploads your entire history to GitHub: `git push -u origin main`. After this, the project (and every save point that got it there) is visible online.
