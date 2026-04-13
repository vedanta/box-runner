# Walkthrough — Stage 9: Edit, Commit, Push Again

## File: [`index.html`](https://github.com/vedanta/box-runner/blob/stage-9-next-change/index.html)

### Line 13: New scoreboard row

```html
      <p>High Score: 120</p>
```

**What's happening:**

One more `<p>` inside the scoreboard div. It inherits the same styles as the existing lines because it is the same element type inside the same container. No CSS change is needed — the `.scoreboard` padding and background already account for extra rows.

The value `120` is hardcoded. A real game would track this in JavaScript and update it when the player beat their record, but this tutorial never adds JavaScript, so 120 is fine.

## Command: `git add index.html`

```bash
git add index.html
```

**What's happening:**

Same as Stage 2 — stage one file for the next commit. Nothing new, and that is the point. You are repeating the everyday flow.

## Command: `git commit -m "Added high score display"`

```bash
git commit -m "Added high score display"
```

**What's happening:**

A one-line commit message that describes the change. Short, present-state, no ceremony.

## Command: `git push`

```bash
git push
```

**What's happening:**

No `-u`, no `origin`, no `main`. Git figured out all three from the tracking set up in Stage 8. That is what `-u` bought you — simpler commands forever after.

The push sends only the new commit to GitHub. The four earlier commits are already there, so Git does not re-upload them.

## The everyday Git loop

What you just did is the default rhythm of working on any Git project:

1. Edit a file.
2. Run `git status` (habit — always know what is changed).
3. `git add <file>`.
4. `git commit -m "<what you changed>"`.
5. `git push`.

Branches, merges, and remotes are support structures for this core loop. You do not need to learn anything new to keep using Git — you just repeat this cycle as many times as you want.
