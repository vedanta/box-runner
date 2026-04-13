# Steps — Stage 8: Push to GitHub

## Prerequisites

Completed Stage 7. `git remote -v` shows `origin`. The GitHub page for `box-runner` is still empty.

## Steps

### 1. Check what branch you are on

```bash
git branch
```

The asterisk must be on `main`. If not, run `git checkout main`.

### 2. Push to GitHub

```bash
git push -u origin main
```

- `git push` — the action: upload commits.
- `-u` — short for `--set-upstream`. Tells Git "remember that my `main` tracks `origin/main` from now on."
- `origin` — the remote to push to.
- `main` — the branch to push.

The first time you push, GitHub will ask you to authenticate. See the walkthrough for notes on personal access tokens.

You should see output ending with something like:

```
To https://github.com/<your-username>/box-runner.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
```

### 3. Refresh the GitHub page

Go to `https://github.com/<your-username>/box-runner` in your browser and reload.

Now the repo shows:

- `index.html` and `style.css` in the file list
- A "4 commits" link near the top
- The contents of `index.html` rendered as raw HTML in the preview

Click the commits link. You see all four save points in order, with the exact messages you wrote.

### 4. Try a plain `git push`

```bash
git push
```

Because `-u` set up tracking, this works with no arguments now. Git responds with "Everything up-to-date." You do not need to repeat `-u origin main` — that was a one-time setup.

## Verify

- GitHub page shows your files.
- Commits page shows four entries.
- Running `git push` by itself responds "Everything up-to-date."
