# Changelog — Stage 6: Merge the Branch

## Previous Stage

Stage 5: Experiment on the Branch (branch: `stage-5-dark-theme`)

## Files Changed

No edits to project files. The merge moves commits between branches.

| Change | What and Why |
|--------|--------------|
| `main` branch advanced | `main` now points at the same commit as `dark-theme` (the Stage 5 commit). |
| `style.css` on main | Updated to the dark theme version because that is what the Stage 5 commit contains. |

## Summary

Stage 6 is about `git merge`. You switch to `main`, confirm the light theme is still there (untouched since Stage 3), and then merge `dark-theme` into `main`. Git does a fast-forward merge because `main` was an ancestor of `dark-theme` — no merge commit, no conflicts.
