# Walkthrough — Stage 8: Push to GitHub

## Command: `git push -u origin main`

```bash
git push -u origin main
```

**What's happening:**

Four tokens, each with a job:

- **`git push`** — the command. It uploads commits from your local branch to a remote branch.
- **`-u`** — the "set upstream" flag. It tells Git to remember a default mapping between your local `main` and the remote's `main` on `origin`. After this one-time flag, you can just run `git push` or `git pull` with no arguments.
- **`origin`** — the remote to push to. This is the name you gave in Stage 7 when you ran `git remote add origin ...`.
- **`main`** — the local branch to push. You are pushing your `main` to the remote's `main`.

Everything you have ever committed to `main` now exists on GitHub.

## What the `-u` flag actually does

Without `-u`, Git has no default for `git push` or `git pull` on this branch — you would have to type the remote and branch every time. With `-u`, Git writes a small block to `.git/config`:

```
[branch "main"]
    remote = origin
    merge = refs/heads/main
```

From then on, Git knows that `main` is linked to `origin/main`. You only set this up once per branch, the first time you push it.

## Authentication on the first push

The first `git push` on a new machine triggers an authentication prompt. Modern GitHub does not accept account passwords over HTTPS — you need a **personal access token** (PAT).

**How to create one:**

1. On github.com, go to **Settings → Developer settings → Personal access tokens → Tokens (classic)**.
2. Click **Generate new token (classic)**.
3. Give it a name like "box-runner tutorial."
4. Check the **repo** scope.
5. Generate and copy the token (it starts with `ghp_`).
6. When Git asks for your password during push, paste the token.

Your operating system's credential helper usually caches the token, so you only do this once.

## Reading the push output

A successful push prints something like:

```
Enumerating objects: 12, done.
Counting objects: 100% (12/12), done.
...
To https://github.com/<your-username>/box-runner.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
```

The last two lines are the important ones:

- `[new branch] main -> main` — a brand-new branch was created on the remote.
- `branch 'main' set up to track 'origin/main'` — the `-u` flag did its job.
