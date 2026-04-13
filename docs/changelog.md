# Changelog — Stage 7: Connect to GitHub

## Previous Stage

Stage 6: Merge the Branch (branch: `stage-6-merge`)

## Files Changed

No files changed. A new Git **remote** is added to the repository configuration.

| Change | What and Why |
|--------|--------------|
| `.git/config` | Gains a `[remote "origin"]` section with the URL of your new GitHub repo. |

## Summary

You create an empty repository on GitHub and connect it to the local project. Nothing is uploaded yet — a remote is a pointer, not a sync. Stage 8 does the actual upload.
