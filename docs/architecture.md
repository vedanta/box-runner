# Architecture — Stage 1: First Save Point

## Current Structure

```
box-runner/
├── .git/          # the Git repository (hidden)
└── index.html
```

The visible part of the project is still one file. The new thing is the hidden `.git` folder, which holds the entire save history.

## Data Flow

```mermaid
flowchart LR
  A[index.html on disk] -->|git add| B[Staging area]
  B -->|git commit| C[Git history in .git/]
```

Files go from the **working tree** (your folder) to the **staging area** (when you `git add`) to the **history** (when you `git commit`). Every Git workflow is some version of this three-step flow.

## What Changed

A `.git` folder now exists. The project has a linear history that currently contains one commit. From this point forward, every stage adds to that history instead of starting from scratch.
