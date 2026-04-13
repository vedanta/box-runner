# Walkthrough — Stage 6: Merge the Branch

> This stage is about Git commands, not code.

## Command: `git checkout main`

```bash
git checkout main
```

**What's happening:**

Switches your current branch to `main`. Git updates `HEAD` to point at `main` and rewrites any files on disk that differ between the two branches. In this case, `style.css` gets replaced with the light-theme version (because that is what the Stage 3 commit contains), and `index.html` stays the same (it never changed on `dark-theme`).

This is what lets you try something on a branch without risk — `main` is preserved, and you can return to it exactly as it was.

## Command: `git merge dark-theme`

```bash
git merge dark-theme
```

**What's happening:**

`git merge <branch>` brings the commits from `<branch>` into your current branch. Because `main` had no new commits since `dark-theme` branched off, Git does the simplest possible merge: it moves the `main` label forward to the same commit `dark-theme` points at.

This is called a **fast-forward** merge. No merge commit is created — the history stays linear.

If `main` had gained its own commits in the meantime, Git would have created a **merge commit** with two parents. You do not hit that case here because nothing else touched `main`.

## The result

After the merge:

- `main` points at the same commit as `dark-theme`.
- `style.css` on `main` is now the dark version.
- `dark-theme` still exists as a label. You could delete it with `git branch -d dark-theme`, but you do not have to.

## Why this matters

Every real project uses branches for features and fixes, then merges them back to a main line. The mental picture you just built — "a branch is a safe place to try things, and merging brings it home" — is the entire mental model for team Git workflows.
