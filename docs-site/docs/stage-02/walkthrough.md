# Walkthrough — Stage 2: Add Styling

> Read the code first, then read the explanation.

## File: [`style.css`](https://github.com/vedanta/box-runner/blob/stage-2-add-styling/style.css)

### Lines 1–6: The body rule

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  text-align: center;
  margin-top: 80px;
}
```

**What's happening:**

CSS rules target HTML elements. This rule targets `<body>`, which means it affects the entire visible page.

- `font-family: Arial, sans-serif;` asks the browser to use Arial, and if Arial is not available, any sans-serif font.
- `background-color: #f4f4f4;` sets a very light gray. Hex colors are `#rrggbb`, two digits per color channel.
- `text-align: center;` centers all text inside the body.
- `margin-top: 80px;` pushes the whole page down 80 pixels so it does not sit flush against the top of the browser.

### Lines 8–10: The h1 rule

```css
h1 {
  color: #333333;
}
```

**What's happening:**

Every `<h1>` in the body gets a dark charcoal color instead of pure black. Subtle, but nicer to read.

### Lines 12–14: The p rule

```css
p {
  color: #555555;
}
```

**What's happening:**

A lighter gray for paragraphs, to create a gentle contrast with the heading.

### Lines 16–23: The button rule

```css
button {
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
}
```

**What's happening:**

This turns the default browser button into a clean green pill.

- `background-color: #4caf50;` is a friendly mid-green.
- `color: #ffffff;` makes the label white.
- `border: none;` removes the default border.
- `padding: 12px 24px;` adds space inside the button — 12 pixels top/bottom, 24 pixels left/right.
- `font-size: 16px;` makes the label larger.
- `cursor: pointer;` changes the mouse cursor to a hand when you hover, so the button feels clickable.

## File: [`index.html`](https://github.com/vedanta/box-runner/blob/stage-2-add-styling/index.html)

### Line 5: Linking the stylesheet

```html
    <link rel="stylesheet" href="style.css">
```

**What's happening:**

`<link>` tells the browser "go load this extra file and apply it to the page." `rel="stylesheet"` is the relationship — this file is a stylesheet. `href="style.css"` is the path — relative to the HTML file, so Git can see both files live in the same folder.

Without this one line, `style.css` would just sit on disk unused.
