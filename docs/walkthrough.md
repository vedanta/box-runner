# Walkthrough — Stage 0: Create the Game Screen

> Read the code first, then read the explanation.

## File: [`index.html`](https://github.com/vedanta/box-runner/blob/stage-0-create-screen/index.html)

### Lines 1–3: The doctype and html tag

```html
<!DOCTYPE html>
<html>
  <head>
```

**What's happening:**

`<!DOCTYPE html>` tells the browser "this is an HTML5 document." Every modern HTML file starts with this line. The `<html>` tag wraps the entire page — everything else goes inside it.

### Lines 4–5: The head

```html
    <title>Box Runner</title>
  </head>
```

**What's happening:**

The `<head>` is for information about the page that is not shown on the page itself. The `<title>` sets the text in your browser tab. Open the page and look at the tab — it says "Box Runner."

### Lines 6–10: The body

```html
  <body>
    <h1>Box Runner</h1>
    <p>Press Start to begin your adventure.</p>
    <button>Start Game</button>
  </body>
```

**What's happening:**

The `<body>` holds everything the visitor sees. Three elements live inside it:

- `<h1>` is a top-level heading. Browsers render it big and bold by default.
- `<p>` is a paragraph. It is the tagline under the heading.
- `<button>` is a clickable button. It does nothing yet because there is no JavaScript — that is intentional.

### Line 11: Closing the html tag

```html
</html>
```

**What's happening:**

Every opening tag needs a closing tag. `</html>` is the final character of the file.
