# Steps — Stage 9: Edit, Commit, Push Again

## Prerequisites

Completed Stage 8. Your GitHub repo has four commits. You are on `main`.

## Steps

### 1. Edit `index.html`

Inside the `<div class="scoreboard">`, add a third paragraph **after** the Lives line:

```html
      <p>High Score: 120</p>
```

The full scoreboard now looks like this:

```html
    <div class="scoreboard">
      <p>Score: 0</p>
      <p>Lives: 3</p>
      <p>High Score: 120</p>
    </div>
```

### 2. Reload the page

The scoreboard now shows three lines instead of two. Confirm the visible change before you commit.

### 3. Stage, commit, push

```bash
git add index.html
git commit -m "Added high score display"
git push
```

Notice `git push` has no arguments. Because Stage 8 used `-u`, Git already knows where to send this commit.

### 4. Refresh GitHub

Reload your repo page on github.com. The new commit appears:

- The commits count went from 4 to 5.
- The top commit in the list is **Added high score display**.
- Viewing `index.html` on GitHub shows the new `<p>High Score: 120</p>` line.

## Verify

- The local browser shows three scoreboard lines.
- `git log --oneline` shows five commits.
- GitHub shows five commits and the latest `index.html` content.

## The loop, one more time

You just did the everyday Git loop:

1. **Edit** a file to make a visible change.
2. **`git add`** to stage the change.
3. **`git commit -m "..."`** to create a save point.
4. **`git push`** to share it.

That is it. That is the job. Everything else (branches, merges, remotes) is support for this core rhythm.
