# Box Runner

> Learn **Git** and **GitHub** by building the start screen of a tiny HTML+CSS game.

![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![Git](https://img.shields.io/badge/Git-2.40%2B-f05032)
![Stages](https://img.shields.io/badge/stages-10-green)

A hands-on beginner tutorial that teaches the everyday Git workflow — `init`, `add`, `commit`, `branch`, `merge`, `push` — by making small, visible changes to a webpage called **Box Runner**.

Every stage changes the page in a way you can **see in your browser**, and every stage uses Git to save that change. No JavaScript, no build tools, no frameworks.

## What You'll Learn

- Saving versions of your work with `git commit`
- Tracking what changed with `git status` and `git log`
- Trying new ideas safely with branches
- Bringing successful experiments home with `git merge`
- Publishing your project online with GitHub

## Quick Start

```bash
# Clone the tutorial
git clone https://github.com/vedanta/box-runner.git
cd box-runner

# Check out stage 0 (the starting point)
git checkout stage-0-create-screen

# Open the webpage
open index.html    # macOS
# xdg-open index.html   # Linux
# start index.html      # Windows

# Read the docs
make docs
```

## Documentation

- **Roadmap:** [docs/ROADMAP.md](docs/ROADMAP.md)
- **Overview:** [docs/overview.md](docs/overview.md)
- **Live site:** https://vedanta.github.io/box-runner/

## The 10 Stages

| # | Stage | Git Concept |
|---|-------|-------------|
| 0 | Create the Game Screen | project setup |
| 1 | First Save Point | `git init`, `add`, `commit` |
| 2 | Add Styling | commit new + edited files |
| 3 | Add the Scoreboard | `git log` |
| 4 | Try a Branch | `git checkout -b` |
| 5 | Experiment on the Branch | commit on a branch |
| 6 | Merge the Branch | `git merge` |
| 7 | Connect to GitHub | `git remote add` |
| 8 | Push to GitHub | `git push -u origin main` |
| 9 | Edit, Commit, Push Again | the everyday loop |

## Who This Is For

- Brand-new web developers who have never used Git
- Students who know a little HTML/CSS and want to start saving their work
- Anyone who tried a "Git tutorial" before and felt lost in abstract diagrams

## License

MIT
