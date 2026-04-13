# Steps — Stage 0: Create the Game Screen

> Follow these steps in order. Each step is either a command to run or a file to create.

## Prerequisites

A text editor and a browser. No Git yet.

## Steps

### 1. Create a project folder

```bash
mkdir box-runner
cd box-runner
```

This gives you a home for the project. From now on, every file you create lives inside this folder.

### 2. Create `index.html`

Inside the `box-runner` folder, create a new file called `index.html` with these exact contents:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Box Runner</title>
  </head>
  <body>
    <h1>Box Runner</h1>
    <p>Press Start to begin your adventure.</p>
    <button>Start Game</button>
  </body>
</html>
```

This is the smallest real HTML page you can build: a title, a heading, a paragraph, and a button.

### 3. Open the page in your browser

On macOS:

```bash
open index.html
```

On Linux:

```bash
xdg-open index.html
```

On Windows:

```bash
start index.html
```

Or just double-click the file in your file explorer.

## Verify

You should see a plain white page with:

- **Box Runner** as a big heading
- **Press Start to begin your adventure.** below it
- A **Start Game** button

If you click the button, nothing happens. That is correct — there is no JavaScript yet.
