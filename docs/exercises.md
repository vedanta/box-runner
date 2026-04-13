# Exercises — Stage 2: Add Styling

## Exercise 1: Change the background color

**Goal:** See a visible change, feel the Git workflow for a one-file edit.

**Steps:**
1. Change `background-color: #f4f4f4;` to `background-color: #ffe4b5;` (light peach).
2. Save and reload the page.
3. Run `git status`. Notice `style.css` is now modified.
4. Change it back to `#f4f4f4` and save.
5. Run `git status` again — clean.

**What happened:** Git compares file contents, not just file names. Editing and un-editing leaves you back where you started, so Git reports the working tree as clean.

## Exercise 2: Commit only one file

**Goal:** Understand that `git add file.css` is more precise than `git add .`.

**Steps:**
1. Edit `style.css` (change the button color to `#ff5722`).
2. Edit `index.html` (change the paragraph text to "Ready to run?").
3. Run `git status` — both are modified.
4. Run `git add style.css`. Run `git status` — only `style.css` is staged.
5. Run `git restore --staged style.css` and revert both files to get back to clean.

**What happened:** `git add` accepts a file, a folder, or `.` for "everything." You can stage exactly the files you want to put in the next commit, which matters when you have changes you are not ready to save.

## Exercise 3: Break the link

**Goal:** Prove that the `<link>` tag is what connects HTML to CSS.

**Steps:**
1. In `index.html`, change `href="style.css"` to `href="style.cssx"` (a bad path).
2. Save and reload the page.
3. See the page revert to the unstyled Stage 0 look.
4. Fix the path and reload.

**What happened:** The browser tried to load `style.cssx`, could not find it, and silently rendered the page with only default styles. The HTML is still correct — the connection to CSS was what broke.

## Exercise 4: Look at the diff before committing

**Goal:** Learn `git diff`, which shows exactly what changed.

**Steps:**
1. Edit `style.css`: change the h1 color to `#0000ff`.
2. Before running `git add`, run `git diff`.
3. Observe the red line (old) and green line (new) for the change.
4. Revert the change and save.

**What happened:** `git diff` shows unstaged changes as a line-by-line comparison. It is the easiest way to review your work before committing. Use it often.
