# Walkthrough — Stage 7: Connect to GitHub

> No code changes. This stage is about one Git concept: the remote.

## Concept: What is a remote?

A **remote** is a named pointer to another copy of your repository. That copy usually lives on a server — GitHub, GitLab, a company server — but it could even be another folder on your own machine.

Remotes do two things:

- **Fetch:** you can download commits from them.
- **Push:** you can upload commits to them.

You can have many remotes per repo, but most projects have just one, and it is conventionally named `origin`.

## Command: `git remote add origin <url>`

```bash
git remote add origin https://github.com/<your-username>/box-runner.git
```

**What's happening:**

`git remote add` creates a new remote. Three parts:

1. `add` — the action.
2. `origin` — the name you want to give this remote. `origin` is the convention for "the primary place."
3. `https://github.com/...` — the URL Git should use when fetching from or pushing to this remote.

All this command does is write a few lines to `.git/config`. No network traffic. Nothing is uploaded. The remote is a bookmark, not a sync.

## Command: `git remote -v`

```bash
git remote -v
```

**What's happening:**

Lists every remote you have, with the URLs it uses for fetch and push. The `-v` stands for "verbose" — without it, you get just the names. With it, you see the actual URLs, which is what you usually want.

## Why an empty GitHub repo?

Because you want your local history to become the starting history on GitHub. If you checked "Add a README file" when creating the repo, GitHub would make its own first commit, and your local `main` would not match. You would have to resolve that mismatch before pushing. Leaving the new repo completely empty avoids all of that.

## The HTTPS URL and authentication

The first time you push (in Stage 8), GitHub will ask you to authenticate. Modern GitHub expects a **personal access token** (PAT) instead of your password. If you see a password prompt during push:

- Generate a PAT in your GitHub settings (Developer settings → Personal access tokens → Tokens (classic)).
- Give it the `repo` scope.
- Paste the token when Git asks for your "password."

You only do this setup once per machine.
