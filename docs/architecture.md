# Architecture — Stage 2: Add Styling

## Current Structure

```
box-runner/
├── .git/
├── index.html
└── style.css
```

Two visible files now. The HTML loads the CSS with a `<link>` tag, so opening `index.html` automatically pulls in `style.css`.

## Data Flow

```mermaid
flowchart LR
  A[Browser opens index.html] --> B[Reads link tag]
  B --> C[Loads style.css]
  C --> D[Applies styles and renders the page]
```

## What Changed

The project now has two visible files instead of one. From Git's perspective this stage shows something important: a single commit can include a **new** file (`style.css`) and a **modified** file (`index.html`) at the same time. You do not need a separate commit per file.
