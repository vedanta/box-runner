# Changelog — Stage 2: Add Styling

## Previous Stage

Stage 1: First Save Point (branch: `stage-1-first-commit`)

## Files Changed

| File | Change | What and Why |
|------|--------|--------------|
| `style.css` | added | Holds the page styling. New file — Git will see it as **untracked** until you `git add` it. |
| `index.html` | modified | Adds a single `<link>` tag so the browser loads `style.css`. Git will see this as **modified**. |

## Summary

This stage adds the first CSS file to the project and links it from the HTML. The two changes go into a single commit so you can see that `git add` and `git commit` can bundle a brand-new file and an edit to an existing file into one save point.
