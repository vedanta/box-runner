# Walkthrough — Stage 5: Experiment on the Branch

## File: [`style.css`](https://github.com/vedanta/box-runner/blob/stage-5-dark-theme/style.css)

### Lines 1–7: Dark body

```css
body {
  font-family: Arial, sans-serif;
  background-color: #222222;
  color: #ffffff;
  text-align: center;
  margin-top: 80px;
}
```

**What's happening:**

The background flips from `#f4f4f4` (light gray) to `#222222` (dark charcoal). A new line, `color: #ffffff;`, sets the default text color to white so everything inside the body is legible on the dark background without being re-declared per element.

### Lines 9–11: Teal heading

```css
h1 {
  color: #00ffcc;
}
```

**What's happening:**

`#00ffcc` is a bright teal. On a dark background it almost glows — exactly the look you want for a game title.

### Lines 13–15: Softer paragraph text

```css
p {
  color: #cccccc;
}
```

**What's happening:**

The body color is pure white, but paragraphs get a slightly dimmed `#cccccc` so the heading stands out as more prominent than the supporting text.

### Lines 17–24: Teal button

```css
button {
  background-color: #00ffcc;
  color: #222222;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
}
```

**What's happening:**

The button swaps colors — teal background with dark text. The padding and cursor rules are identical to Stage 2 because those are layout, not theme.

### Lines 26–32: Dark scoreboard panel

```css
.scoreboard {
  margin-top: 40px;
  display: inline-block;
  padding: 16px 32px;
  background-color: #333333;
  border: 1px solid #00ffcc;
}
```

**What's happening:**

The scoreboard keeps its layout (`margin-top`, `display`, `padding`) and only changes its theme. The background goes slightly lighter than the body (`#333333`) so the panel pops against the page, and the border turns teal to match the accent.

## Command: `git commit -m "Tried a dark theme for Box Runner"`

```bash
git commit -m "Tried a dark theme for Box Runner"
```

**What's happening:**

This is a normal commit — there is nothing special about the syntax. What matters is **where** this commit lands. Because `HEAD` points at `dark-theme`, the new commit becomes the tip of the `dark-theme` branch. `main` does not move at all.

Branch labels update only when you commit **while standing on them**.
