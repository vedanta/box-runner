# Stage 2 — Add Styling

> Style the game screen with CSS and save the new file plus the edited HTML in a single commit.

## What You'll Learn

- How to link a CSS file from an HTML file
- That one commit can contain both a new file and an edited file
- How `git status` tells the difference between **untracked** and **modified**

## Prerequisites

You finished [Stage 1](../stage-01/). Running `git log --oneline` in your `box-runner` folder shows one commit.

## What Changes

- `style.css` is added. It centers the page, gives it a soft gray background, and styles the button.
- `index.html` is edited to `<link>` the new stylesheet.
- One commit records both changes together.

## Outcome

Open `index.html`. The page now has:

- A light gray background
- Centered content with a bit of space at the top
- A friendlier green button

`git log --oneline` shows two commits. `git status` is clean.
