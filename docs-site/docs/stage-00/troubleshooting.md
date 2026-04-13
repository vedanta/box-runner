# Troubleshooting — Stage 0: Create the Game Screen

## Common Errors

### The browser shows the raw HTML code instead of a page

**Cause:** You probably saved the file with the wrong extension, like `index.html.txt`. Some editors (TextEdit on macOS especially) add `.txt` silently.

**Fix:** Rename the file so it ends in `.html` and nothing else. On macOS, use Finder's Get Info panel or run `mv index.html.txt index.html` in the terminal.

### The browser says "file not found"

**Cause:** You opened a path that does not exist, or you are in the wrong folder.

**Fix:** Run `pwd` (macOS/Linux) or `cd` (Windows) to see where you are. Make sure you are inside the `box-runner` folder, then run `ls` (or `dir`) to confirm `index.html` is there before opening it.

### The page is blank

**Cause:** Usually a typo in the HTML — a missing angle bracket or a closing tag in the wrong place.

**Fix:** Compare your file byte-for-byte with the code block in `steps.md`. HTML is forgiving about whitespace but strict about `<` and `>`.

## FAQ

### Do I need a web server to view this?

No. Because there is no JavaScript, no images, and no external files, you can open `index.html` directly from your file system. The URL in your browser will start with `file://`, and that is fine.

### Why am I not using Git yet?

So you feel the "before" state. When you hit Stage 1 and create the first commit, you will already have a real webpage in front of you. That makes the "save point" idea concrete instead of abstract.

### Can I use VS Code, or do I need a specific editor?

Any text editor works. VS Code, Sublime, Atom, even Notepad. Avoid editors like Microsoft Word — those save their own special format, not plain text.

### Does the order of the elements in the body matter?

Yes. HTML renders top to bottom. If you swap `<h1>` and `<p>`, the paragraph appears above the heading. Try it in the exercises section if you are curious.
