# Troubleshooting — Stage 1: First Save Point

## Common Errors

### `git: command not found`

**Cause:** Git is not installed, or not in your shell's PATH.

**Fix:** Install Git from [git-scm.com](https://git-scm.com/). On macOS you can also run `xcode-select --install`. Open a fresh terminal after installing and try `git --version` again.

### `fatal: not a git repository`

**Cause:** You ran `git status` (or another Git command) from a folder that is not a Git repo. Usually you forgot to `cd box-runner` first, or you forgot to run `git init`.

**Fix:** Make sure you are inside the `box-runner` folder (`pwd` to check) and that you ran `git init` once inside it.

### `Author identity unknown` when committing

**Cause:** Git needs a name and email attached to every commit, and yours are not set.

**Fix:** Run these two commands once on your machine:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Then retry `git commit`.

### `nothing to commit, working tree clean` when you expected a commit

**Cause:** You never ran `git add`, so nothing is staged. A commit with nothing in the staging area does nothing.

**Fix:** Run `git add index.html`, then `git commit -m "..."` again.

## FAQ

### What is the difference between `git add` and `git commit`?

`git add` stages a file — it puts the file in the "ready to save" box. `git commit` actually saves everything in the box as a permanent save point with a message.

### Can I edit the commit message after committing?

Yes, for the most recent commit: `git commit --amend -m "new message"`. Avoid amending commits you have already shared with others — that is a topic for later.

### Do I need to `git init` every time I make a change?

No. `git init` runs exactly once per project, ever. After that, you just use `git add` and `git commit`.

### Why is the commit message in past tense in this tutorial?

The convention in this project is to describe what the commit does as a complete sentence: "Created basic Box Runner start screen." Many teams use present tense ("Create...") — either is fine. Pick one style and stick to it.
