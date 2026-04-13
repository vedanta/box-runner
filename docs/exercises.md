# Exercises — Stage 0: Create the Game Screen

## Exercise 1: Change the heading

**Goal:** See how editing the HTML file instantly changes what the browser shows.

**Steps:**
1. Open `index.html` in your editor.
2. Change `<h1>Box Runner</h1>` to `<h1>Cube Dash</h1>`.
3. Save the file.
4. Go back to your browser tab and reload the page.

**What happened:** The heading updated. The browser reads the file from disk each time you reload, so any change you save shows up immediately. Change it back to `Box Runner` before moving on.

## Exercise 2: Break the page on purpose

**Goal:** Learn what happens when HTML is malformed.

**Steps:**
1. Remove the closing `</h1>` tag.
2. Save and reload the page.
3. Observe that the tagline and the button look weird — they may render as part of the heading.
4. Put `</h1>` back and reload.

**What happened:** Browsers try very hard to render broken HTML, but they guess. Closing tags matter. This is why a "save point" system (Git, coming in Stage 1) is helpful — you can always get back to a working version.

## Exercise 3: Peek at the browser tab

**Goal:** Understand what `<title>` does.

**Steps:**
1. Change `<title>Box Runner</title>` to `<title>My First Page</title>`.
2. Save and reload.
3. Look at the browser tab — not the page, the tab itself at the top.

**What happened:** The tab label changed, but the page content did not. `<title>` only controls the tab. Change it back to `Box Runner`.

## Exercise 4: Click the button

**Goal:** Confirm the button is just a button for now.

**Steps:**
1. Click the Start Game button a few times.
2. Notice that nothing happens beyond a tiny visual press effect.

**What happened:** A `<button>` element is clickable, but without JavaScript it has no behavior attached. This tutorial never adds JavaScript — the button is a visual prop so Git commits have something to show.
