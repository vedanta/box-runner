# Exercises — Stage 5: Experiment on the Branch

## Exercise 1: Flip between themes

**Goal:** Feel that a branch checkout swaps your files.

**Steps:**
1. `git checkout main`. Reload the browser — light theme.
2. `git checkout dark-theme`. Reload — dark theme.
3. Repeat a few times.

**What happened:** Git rewrites `style.css` on disk each time you switch. The file literally has different content depending on which branch is checked out. This is safe because the commits on both branches preserve the version Git cares about.

## Exercise 2: See both histories

**Goal:** Learn `git log --all --graph`.

**Steps:**
1. Run `git log --all --oneline --graph`.

**What happened:** You see every commit from every branch drawn as a small ASCII graph. The fork is visible: `main` and `dark-theme` share commits 1–3, then `dark-theme` has its own fourth commit.

## Exercise 3: Tweak the accent color

**Goal:** Make one more change on the branch and verify `main` still does not care.

**Steps:**
1. On `dark-theme`, change `#00ffcc` to `#ff0088` (hot pink) everywhere in `style.css`.
2. Save, reload — pink dark theme.
3. `git checkout main` — back to light theme, which never had any pink.
4. `git checkout dark-theme` — pink is still there because you never committed the change. Run `git status` to see it as uncommitted.
5. Run `git restore style.css` to undo the pink edit.

**What happened:** Uncommitted changes hang around between branch switches in some cases, but committed work is fully isolated. Experiment, and when you hate the result, throw it away with `git restore`.

## Exercise 4: Compare the two branches

**Goal:** Learn `git diff main..dark-theme`.

**Steps:**
1. Run `git diff main..dark-theme -- style.css`.

**What happened:** Git prints a diff of `style.css` between `main` and `dark-theme`. Red lines are the light theme, green lines are the dark theme. This is how you ask "what does my experiment actually change?" without switching branches.
