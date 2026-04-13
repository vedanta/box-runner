# Tutorial Overview

**Box Runner** is a beginner-friendly tutorial that teaches **Git** and **GitHub** through small, visible changes to a webpage. You will build the start screen of an imaginary game called Box Runner using only HTML and CSS, and you will save every step with Git.

By the end you'll be fluent in the everyday Git workflow:

```
edit → view → add → commit → (branch / merge / push)
```

## The Mental Model

This tutorial uses one metaphor throughout, and it's worth memorizing up front:

| Real thing | In Git |
|---|---|
| Your project folder | the **repository** |
| A save point in a game | a **commit** |
| A separate route you're experimenting on | a **branch** |
| Bringing that experiment home | a **merge** |
| The cloud save server | **GitHub** (the remote) |
| Uploading your saves to the cloud | `git push` |

Every stage in the tutorial teaches one of these ideas — and only one.

## What You Need

- A computer with a terminal (macOS Terminal, Linux shell, or Windows PowerShell/Git Bash)
- A code editor (VS Code is recommended)
- **Git** installed — check with `git --version`
- A free **GitHub** account (you won't need it until Stage 7)
- A web browser

You do **not** need Node, Python, Docker, a framework, a server, or any package manager.

## The 10 Stages

| # | Stage | Concept | Visible Change |
|---|---|---|---|
| 0 | [Create the Game Screen](/stage-00/) | project setup | The webpage exists in your browser for the first time |
| 1 | [First Save Point](/stage-01/) | `git init`, `add`, `commit` | Same page, now tracked by Git |
| 2 | [Add Styling](/stage-02/) | commit new + edited files | Page becomes centered, gray, styled |
| 3 | [Add the Scoreboard](/stage-03/) | `git log` | Score and Lives appear below the button |
| 4 | [Try a Branch](/stage-04/) | `git checkout -b` | (No visible change — that's the lesson) |
| 5 | [Experiment on the Branch](/stage-05/) | commit on a non-main branch | Page goes dark with teal accents |
| 6 | [Merge the Branch](/stage-06/) | `git merge` | Dark theme arrives on main |
| 7 | [Connect to GitHub](/stage-07/) | `git remote add` | (No visible change — remote is wired up) |
| 8 | [Push to GitHub](/stage-08/) | `git push -u origin main` | Project appears on github.com |
| 9 | [Edit, Commit, Push Again](/stage-09/) | the everyday loop | High-score line on the page and on GitHub |

Each stage lives on its own branch and has its own tag, so you can jump to any point with:

```bash
git checkout stage-3-scoreboard
```

Stage pages will be published to the docs site as each stage is built with `@tutorial-turbo`.

## How to Work Through the Tutorial

1. **Read the stage page** in the docs.
2. **Do the step** in your own local `box-runner` folder (don't just read — actually type it).
3. **Open `index.html` in your browser** to see the change.
4. **Run the Git commands** the stage asks for.
5. **Try the exercises** at the bottom of the stage page.
6. **Move to the next stage.**

The tutorial is designed so every single stage leaves you with a working webpage. If something looks broken, you're almost certainly looking at an unsaved edit — compare with the stage's own branch.

## A Note on Mistakes

Git feels scary because it looks like mistakes are permanent. They usually aren't. Every exercise in this tutorial is reversible, and every commit you make is itself a safety net. Experiment freely.
