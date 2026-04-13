---
title: "Box Runner: Learn Git and GitHub"
repo: "vedanta/box-runner"
base: "/box-runner/"
accent: "green"
stack:
  frontend:
    html: "5"
    css: "3"
  tools:
    git: "2.40+"
    github: "account"
groups:
  - name: "The First Save"
    icon: "💾"
    desc: "Build a webpage and learn what a commit is."
    stages: [0, 1]
  - name: "Building the Game Screen"
    icon: "🎨"
    desc: "Make visible improvements and stack up save points."
    stages: [2, 3]
  - name: "Branching and Merging"
    icon: "🌿"
    desc: "Try a new idea safely, then bring it back."
    stages: [4, 5, 6]
  - name: "Sharing on GitHub"
    icon: "🚀"
    desc: "Put your project online and keep improving it."
    stages: [7, 8, 9]
stages:
  - number: 0
    title: "Create the Game Screen"
    branch: "stage-0-create-screen"
    tag: "v0-create-screen"
    concept: "project setup"
    summary: "Make a box-runner folder and write the first index.html so the student sees a real webpage in the browser. No Git yet."
  - number: 1
    title: "First Save Point"
    branch: "stage-1-first-commit"
    tag: "v1-first-commit"
    concept: "git init, add, commit"
    summary: "Initialize Git in the folder and create the very first commit — a save point for the starter screen."
  - number: 2
    title: "Add Styling"
    branch: "stage-2-add-styling"
    tag: "v2-add-styling"
    concept: "tracking a new file + a change together"
    summary: "Create style.css, link it from index.html, and make one commit that covers both a new file and an edited file."
  - number: 3
    title: "Add the Scoreboard"
    branch: "stage-3-scoreboard"
    tag: "v3-scoreboard"
    concept: "git log — seeing history"
    summary: "Add score and lives to the HTML and CSS, commit it, then use git log to look back at every save point so far."
  - number: 4
    title: "Try a Branch"
    branch: "stage-4-create-branch"
    tag: "v4-create-branch"
    concept: "git branch / checkout -b"
    summary: "Create a dark-theme branch. Nothing visually changes yet — the point is understanding what a branch is."
  - number: 5
    title: "Experiment on the Branch"
    branch: "stage-5-dark-theme"
    tag: "v5-dark-theme"
    concept: "committing on a non-main branch"
    summary: "Rewrite style.css with a dark background on the dark-theme branch, then commit. See how main is untouched."
  - number: 6
    title: "Merge the Branch"
    branch: "stage-6-merge"
    tag: "v6-merge"
    concept: "git checkout main + git merge"
    summary: "Switch back to main, confirm the dark theme is gone, then merge dark-theme into main to bring the new look home."
  - number: 7
    title: "Connect to GitHub"
    branch: "stage-7-remote"
    tag: "v7-remote"
    concept: "creating a repo and adding a remote"
    summary: "Create an empty repository on GitHub and connect it to the local project with git remote add origin."
  - number: 8
    title: "Push to GitHub"
    branch: "stage-8-push"
    tag: "v8-push"
    concept: "git push -u origin main"
    summary: "Upload every commit so far to GitHub. The webpage and its full history are now online."
  - number: 9
    title: "Edit, Commit, Push Again"
    branch: "stage-9-next-change"
    tag: "v9-next-change"
    concept: "the everyday git loop"
    summary: "Add a small high-score line, commit, and push. This cements the everyday edit → commit → push workflow."
---

# Box Runner: Learn Git and GitHub

A hands-on, beginner-friendly tutorial that teaches Git and GitHub by building the start screen of a tiny game called **Box Runner** — using only HTML and CSS.

Every stage changes the webpage in a way you can **see in your browser**, and every stage uses Git to save that change. By the end you'll be comfortable with the everyday Git workflow: edit, add, commit, branch, merge, push.

---

## Teaching Principles

1. **One concept per stage.** Each stage introduces exactly one Git idea.
2. **Always a working webpage.** You open `index.html` in the browser after every stage.
3. **Visible change drives the save.** We never commit something the student can't see on screen.
4. **The game-save metaphor sticks.** Commits = save points, branches = safe experiments, GitHub = online backup.

---

## Stage Details

### Stage 0 — Create the Game Screen
**Concept:** project setup (no Git yet)

Make a folder called `box-runner` and create `index.html` with a title, a tagline, and a Start Game button. Open it in the browser.

**You see:** A plain white page with "Box Runner", "Press Start to begin your adventure.", and a button.

**Why no Git yet?** So the student feels the _before_ state. They'll appreciate the save system once they have something worth saving.

---

### Stage 1 — First Save Point
**Concept:** `git init`, `git add`, `git commit`

Run `git init` inside the folder, then `git add index.html` and `git commit -m "Created basic Box Runner start screen"`.

**You see:** The same webpage — but now Git is tracking it. `git status` is clean, `git log` shows one commit.

**Teaching moment:** "This is your first save point. Git remembers this exact version forever."

---

### Stage 2 — Add Styling
**Concept:** committing a new file and an edited file in one save

Create `style.css` (centered layout, soft gray background, Arial font, styled button). Update `index.html` to `<link>` the stylesheet. Run `git add .` and commit with message `"Added styling to the Box Runner screen"`.

**You see:** The page is now centered, has a light gray background, and the button looks cleaner.

**Teaching moment:** One commit can include new files _and_ edits. `git status` shows both before the commit.

---

### Stage 3 — Add the Scoreboard
**Concept:** `git log` — reading your history

Add a `<div class="scoreboard">` with "Score: 0" and "Lives: 3" in `index.html`, and a `.scoreboard` rule in `style.css`. Commit with `"Added scoreboard to the game screen"`.

**You see:** A small score/lives panel below the button.

**Teaching moment:** Run `git log --oneline`. Three save points now exist. Explain that Git lets you _walk back_ through the history at any time.

---

### Stage 4 — Try a Branch
**Concept:** what a branch is

Run `git checkout -b dark-theme`. Nothing in the files changes. Show `git branch` — now there are two branches (`main` and `dark-theme`), and the student is on `dark-theme`.

**You see:** The page looks the same. This is intentional.

**Teaching moment:** A branch is a _label_ that moves as you commit. Starting a branch doesn't change your code — it just gives you a safe place to try things.

---

### Stage 5 — Experiment on the Branch
**Concept:** committing on a non-main branch

While on `dark-theme`, rewrite `style.css` with a dark background (`#222`), teal accents (`#00ffcc`), and a colored button. Commit with `"Tried a dark theme for Box Runner"`.

**You see:** A slick dark-mode version of the game screen.

**Teaching moment:** The commit lives on `dark-theme`. `main` still has the light theme, untouched.

---

### Stage 6 — Merge the Branch
**Concept:** `git merge`

Run `git checkout main`. Open the browser — the light theme is back! That surprise is the lesson. Then run `git merge dark-theme`.

**You see:** After the merge, the main branch now has the dark theme.

**Teaching moment:** "You tested an idea safely, liked it, and pulled it into the main version." This is the whole point of branching.

---

### Stage 7 — Connect to GitHub
**Concept:** creating a GitHub repo and adding a remote

Create a new empty repo on github.com named `box-runner` (no README, no gitignore). Copy the URL. Run `git remote add origin https://github.com/<user>/box-runner.git` and verify with `git remote -v`.

**You see:** No webpage change. The local project now knows where "online" is.

**Teaching moment:** A remote is a bookmark pointing at a copy of your project somewhere else. Adding a remote doesn't upload anything yet.

---

### Stage 8 — Push to GitHub
**Concept:** `git push -u origin main`

Run `git push -u origin main`. Refresh the GitHub page. Every commit so far is now visible in the repo's commit history.

**You see:** The project and its entire history on github.com.

**Teaching moment:** "Git saves your work on your computer. GitHub stores and shares it online." The `-u` flag sets up tracking so future pushes are just `git push`.

---

### Stage 9 — Edit, Commit, Push Again
**Concept:** the everyday Git loop

Add a new line to the scoreboard — `<p>High Score: 120</p>` — and commit with `"Added high score display"`. Then `git push`. Refresh GitHub and watch the new commit appear.

**You see:** The updated scoreboard on the local page, and the new commit on GitHub.

**Teaching moment:** This is the loop you'll use forever: **edit → add → commit → push**. Everything else (branches, merges, remotes) just supports this rhythm.

---

## What the Student Can Do After This

- Save versions of any project with Git
- Create branches to try risky ideas without breaking main
- Merge successful experiments back into main
- Publish a project to GitHub and push updates to it
- Read their own project history with `git log`
- Explain commits, branches, merges, remotes, and pushes in plain English
