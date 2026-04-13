# Walkthrough — Stage 3: Add the Scoreboard

## File: [`index.html`](https://github.com/vedanta/box-runner/blob/stage-3-scoreboard/index.html)

### Lines 11–14: The scoreboard div

```html
    <div class="scoreboard">
      <p>Score: 0</p>
      <p>Lives: 3</p>
    </div>
```

**What's happening:**

A `<div>` is a generic container. You use it to group related pieces of content so you can style them together. This div holds two `<p>` tags — the score and the lives — and the `class="scoreboard"` attribute gives it a label that CSS can target.

The values "0" and "3" are just text. There is no game running, so nothing changes them yet. The point is to have a real, visible piece of the UI.

## File: [`style.css`](https://github.com/vedanta/box-runner/blob/stage-3-scoreboard/style.css)

### Lines 25–31: The scoreboard rule

```css
.scoreboard {
  margin-top: 40px;
  display: inline-block;
  padding: 16px 32px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
}
```

**What's happening:**

The `.scoreboard` selector matches any element with `class="scoreboard"`. In CSS, a dot prefix means "class."

- `margin-top: 40px;` pushes the panel down below the button so it does not crowd the button.
- `display: inline-block;` lets the panel shrink to fit its content instead of stretching across the whole page.
- `padding: 16px 32px;` gives breathing room inside the panel — 16 pixels top/bottom, 32 pixels left/right.
- `background-color: #ffffff;` makes it stand out against the gray body background.
- `border: 1px solid #dddddd;` draws a thin light gray outline.

## Command: `git log`

```bash
git log
```

**What's happening:**

`git log` prints every commit, newest first. For each commit you see the hash (a unique ID), the author, the date, and the message. The hash is what you would use to refer to a specific commit later — for example, `git show <hash>`.

## Command: `git log --oneline`

```bash
git log --oneline
```

**What's happening:**

Same history, one line per commit. The short hash plus the message. Once your project has twenty commits, `--oneline` is the only sane way to skim them.
