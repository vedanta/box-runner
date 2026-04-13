# Exercises — Stage 1: First Save Point

## Exercise 1: Run `git status` in different states

**Goal:** Build a reflex for using `git status`.

**Steps:**
1. Run `git status`. It says clean.
2. Open `index.html` and add a space somewhere. Save.
3. Run `git status`. Now it says `index.html` is **modified**.
4. Undo the change and save again.
5. Run `git status`. It says clean once more.

**What happened:** `git status` compares your working folder against the most recent commit. When they match, it says clean. When they do not, it tells you exactly which files differ.

## Exercise 2: Stage and unstage

**Goal:** See how `git add` moves a file into the staging area — and how to take it back out.

**Steps:**
1. Change `<h1>Box Runner</h1>` to `<h1>Box Runner!</h1>` and save.
2. Run `git status`. `index.html` is modified but not staged.
3. Run `git add index.html`. Run `git status` — it is now staged.
4. Run `git restore --staged index.html`. Run `git status` — it is modified again, but not staged.
5. Undo your edit in the file and save to get back to clean.

**What happened:** `git add` moves changes into the staging area, and `git restore --staged` moves them back out. Your actual file is never touched by either command — only Git's "ready to save" box changes.

## Exercise 3: Read your history

**Goal:** Get comfortable with `git log`.

**Steps:**
1. Run `git log`.
2. Run `git log --oneline`.
3. Run `git log --oneline --decorate`.

**What happened:** Each variation shows the same one commit in a different format. Later, when you have many commits, `--oneline` is the fastest way to see your whole history at a glance.

## Exercise 4: Peek inside `.git`

**Goal:** Confirm that the Git repo is just files on disk.

**Steps:**
1. Run `ls -a` inside `box-runner`. You see `.git` listed.
2. Run `ls .git`. You see folders like `objects`, `refs`, and a file called `HEAD`.
3. Do **not** edit anything inside `.git`.

**What happened:** The entire Git repository is a folder. That is why cloning a repo means copying files — there is no hidden database somewhere. If you deleted `.git`, you would go right back to Stage 0 (a plain folder with no history).
