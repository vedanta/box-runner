# Box Runner: A Simple Story-Based Git and GitHub Tutorial for Beginners

## Goal

Help a student who is brand new to web development learn the basics of **Git** and **GitHub** using a short, simple, game-themed project made with only **HTML** and **CSS**.

This tutorial keeps the focus on:
- saving work
- tracking changes
- trying new ideas safely
- sharing a project online

No JavaScript is needed.

---

## The Story

Imagine you are building the start screen for a simple game called **Box Runner**.

Each time you improve the game screen, you save your progress using **Git**.

Think of it like this:

- Your project folder is your **game project**
- Git is your **save system**
- A commit is a **save point**
- GitHub is your **online backup and sharing space**
- A branch is a **separate path** where you can try a new idea safely
- A merge is bringing that new idea back into the main version

This way, Git does not feel like a technical tool first.
It feels like a way to save and improve your game.

---

## What the Student Will Learn

By the end of this tutorial, the student will understand how to:

1. create a small web project
2. initialize Git
3. add and commit files
4. make visible improvements to a webpage
5. create a branch
6. merge changes back into the main version
7. push the project to GitHub

---

## Project Structure

At the end, the project will look like this:

```bash
box-runner/
├── index.html
└── style.css
```

---

## Before You Start

The student should have:

- a computer
- a code editor like VS Code
- Git installed
- a GitHub account

---

## Teaching Approach

This works best when taught as a sequence of small wins.

Each step should follow this pattern:

1. change the webpage
2. view the result in the browser
3. save the result with Git
4. explain what just happened in simple words

The student should always see a visible difference in the webpage after each step.

---

# Part 1: Create the Project

## Step 1: Make the project folder

Create a new folder called:

```bash
box-runner
```

Open that folder in your code editor.

---

## Step 2: Create the first file

Create a file named `index.html`.

Add this code:

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

### What this does

This creates a very simple game start screen with:
- a title
- a short message
- a button

### What to tell the student

“You just created version 1 of your game screen.”

Open the file in a browser and let the student see it.

---

# Part 2: Start Tracking the Project with Git

## Step 3: Initialize Git

In the terminal, inside the `box-runner` folder, run:

```bash
git init
```

### What this means

This tells Git:

> “Start tracking this project.”

---

## Step 4: Save the first version

Run:

```bash
git add index.html
git commit -m "Created basic Box Runner start screen"
```

### What this means

- `git add` prepares the file to be saved
- `git commit` creates a save point

### What to tell the student

“This is like saving your game progress for the first time.”

---

# Part 3: Add Styling

## Step 5: Create a CSS file

Create a new file named `style.css`.

Add this code:

```css
body {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #f4f4f4;
  margin-top: 100px;
}

h1 {
  color: #333333;
}

button {
  padding: 10px 20px;
  font-size: 16px;
}
```

---

## Step 6: Connect the CSS file

Now update `index.html` so it looks like this:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Box Runner</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Box Runner</h1>
  <p>Press Start to begin your adventure.</p>
  <button>Start Game</button>
</body>
</html>
```

### What this does

Now the page:
- uses a cleaner font
- centers the content
- adds spacing
- makes the button look better

### What to tell the student

“You improved the appearance of the game screen.”

Open the file in the browser again and let the student compare it with the first version.

---

## Step 7: Save the styled version

Run:

```bash
git add .
git commit -m "Added styling to the Box Runner screen"
```

### What to tell the student

“Now you have another save point. Git remembers both versions.”

---

# Part 4: Add a Scoreboard

## Step 8: Improve the HTML

Update `index.html` to this:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Box Runner</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Box Runner</h1>
  <p>Press Start to begin your adventure.</p>
  <button>Start Game</button>

  <div class="scoreboard">
    <p>Score: 0</p>
    <p>Lives: 3</p>
  </div>
</body>
</html>
```

---

## Step 9: Improve the CSS

Update `style.css` to this:

```css
body {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #f4f4f4;
  margin-top: 100px;
}

h1 {
  color: #333333;
}

button {
  padding: 10px 20px;
  font-size: 16px;
}

.scoreboard {
  margin-top: 30px;
  font-weight: bold;
}
```

### What this does

Now the game screen has:
- a score display
- a lives display

### What to tell the student

“You added more game information to the screen.”

---

## Step 10: Save this version

Run:

```bash
git add .
git commit -m "Added scoreboard to the game screen"
```

### Teaching point

Now the student has multiple saved versions:
1. the basic screen
2. the styled screen
3. the screen with a scoreboard

This is where Git starts to make sense.

---

# Part 5: Try a New Idea Safely with a Branch

## Step 11: Create a new branch

Run:

```bash
git checkout -b dark-theme
```

### What this means

This creates a new branch called `dark-theme`.

### What to tell the student

“This is like making a copy of your game so you can experiment without breaking the main version.”

---

## Step 12: Change the design

Update `style.css` to this dark version:

```css
body {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #222222;
  color: white;
  margin-top: 100px;
}

h1 {
  color: #00ffcc;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #00ffcc;
  border: none;
}

.scoreboard {
  margin-top: 30px;
  font-weight: bold;
}
```

### What this does

The page now has:
- a dark background
- light text
- a brighter title
- a colored button

### What to tell the student

“You are testing a new theme in a safe place.”

Open it in the browser so the student can see the difference.

---

## Step 13: Save the branch work

Run:

```bash
git add style.css
git commit -m "Tried a dark theme for Box Runner"
```

---

# Part 6: Merge the New Idea Back

## Step 14: Go back to the main branch

Run:

```bash
git checkout main
```

### What to explain

Now the student is back on the original version of the project.

They should open the page again and notice that the dark theme is gone on `main`.

This is a very important teaching moment.

---

## Step 15: Merge the dark theme into main

Run:

```bash
git merge dark-theme
```

### What this means

You are bringing the successful experiment back into the main project.

### What to tell the student

“You tested a new design safely, liked it, and added it to the main version.”

---

# Part 7: Send the Project to GitHub

## Step 16: Create a repository on GitHub

On GitHub:

1. sign in
2. click **New repository**
3. name it `box-runner`
4. create the repository

Do not add a README if you want the cleanest first push flow.

---

## Step 17: Connect the local project to GitHub

Copy the repository URL and run:

```bash
git remote add origin YOUR_REPOSITORY_URL
```

Example:

```bash
git remote add origin https://github.com/yourname/box-runner.git
```

---

## Step 18: Push the project

Run:

```bash
git push -u origin main
```

### What this means

Now the project is:
- backed up online
- shareable
- visible in GitHub

### What to tell the student

“Git saves your work on your computer. GitHub stores and shares it online.”

---

# Part 8: Simple Review of Concepts

## Quick memory guide

### Git
Git tracks and saves changes in your project.

### GitHub
GitHub stores your Git project online.

### Commit
A commit is a save point.

### Branch
A branch is a safe place to try changes.

### Merge
A merge brings branch changes back into the main version.

---

# Final File Versions

## Final `index.html`

```html
<!DOCTYPE html>
<html>
<head>
  <title>Box Runner</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Box Runner</h1>
  <p>Press Start to begin your adventure.</p>
  <button>Start Game</button>

  <div class="scoreboard">
    <p>Score: 0</p>
    <p>Lives: 3</p>
  </div>
</body>
</html>
```

## Final `style.css`

```css
body {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #222222;
  color: white;
  margin-top: 100px;
}

h1 {
  color: #00ffcc;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #00ffcc;
  border: none;
}

.scoreboard {
  margin-top: 30px;
  font-weight: bold;
}
```

---

# Suggested Teaching Script

Here is a short way to explain the whole lesson:

> We are going to build a tiny game screen called Box Runner.
> Every time we improve it, we will save our progress with Git.
> That helps us track versions of our project.
> Then we will use GitHub to store and share the project online.
> We will also try a new theme using a branch, which is like testing an idea safely on a copy of the project.

---

# Why This Tutorial Works

This approach works well for beginners because:

- the project is small
- the webpage visibly changes at each step
- Git feels useful immediately
- the game story keeps it interesting
- the student learns by doing, not by memorizing commands

---

# Optional Extension Ideas

Once the student understands the basics, you can extend the project by adding:

- a game character box using a `<div>`
- a background panel
- a high score section
- a second branch with a different color theme
- a README file for GitHub

---

# One-Line Summary for the Student

**Git helps you save versions of your project. GitHub helps you store and share those versions online.**

