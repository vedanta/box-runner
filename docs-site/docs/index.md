---
layout: home

hero:
  name: Box Runner
  text: Learn Git and GitHub by building a game screen
  tagline: "Ten tiny stages. One webpage that visibly changes. Every Git concept you need, with nothing you don't."
  actions:
    - theme: brand
      text: Start the Tutorial
      link: /box-runner/overview
    - theme: alt
      text: View on GitHub
      link: https://github.com/vedanta/box-runner

features:
  - title: One Concept Per Stage
    details: "Each of the 10 stages introduces exactly one Git idea — init, commit, branch, merge, push. You never juggle two new things at once."
    icon: 🎯
  - title: Always a Working Webpage
    details: Every stage ends with an index.html you can open in your browser. Nothing half-built, nothing broken.
    icon: ✅
  - title: Read the Code, Not Just About It
    details: Every HTML and CSS file gets a line-by-line walkthrough. You learn by reading real files, not slides.
    icon: 📖
  - title: Break Things on Purpose
    details: Each stage has hands-on exercises — change a color, rewrite a commit message, experiment on the branch.
    icon: 🔧
---

<div class="home-content">

## What You'll Build

You'll build the start screen of a fictional game called **Box Runner** — a title, a tagline, a Start button, and a score panel — using only HTML and CSS. The webpage is the **prop**. The real thing you're learning is the Git workflow underneath it: every visible change becomes a save point you can return to, branch from, merge into, or publish.

<div class="data-flow-visual">
  <div class="flow-step">
    <div class="flow-icon">✏️</div>
    <div class="flow-label">Edit</div>
  </div>
  <div class="flow-arrow">→</div>
  <div class="flow-step">
    <div class="flow-icon">👀</div>
    <div class="flow-label">View</div>
  </div>
  <div class="flow-arrow">→</div>
  <div class="flow-step">
    <div class="flow-icon">💾</div>
    <div class="flow-label">Commit</div>
  </div>
  <div class="flow-arrow">→</div>
  <div class="flow-step">
    <div class="flow-icon">🌿</div>
    <div class="flow-label">Branch</div>
  </div>
  <div class="flow-arrow">→</div>
  <div class="flow-step">
    <div class="flow-icon">🔀</div>
    <div class="flow-label">Merge</div>
  </div>
  <div class="flow-arrow">→</div>
  <div class="flow-step">
    <div class="flow-icon">🚀</div>
    <div class="flow-label">Push</div>
  </div>
</div>
<p class="flow-caption">The everyday Git loop — learned through a webpage you can see.</p>

## The Stages

<div class="stage-grid">

<div class="stage-group">
<h3>💾 The First Save</h3>
<p class="group-desc">Build a webpage and learn what a commit is.</p>

<a href="/box-runner/stage-00/" class="stage-card available">
  <span class="stage-num">0</span>
  <div>
    <strong>Create the Game Screen</strong>
    <p>Make index.html and see a real webpage in the browser.</p>
  </div>
</a>

<a href="/box-runner/stage-01/" class="stage-card available">
  <span class="stage-num">1</span>
  <div>
    <strong>First Save Point</strong>
    <p>git init, add, commit — your first save.</p>
  </div>
</a>
</div>

<div class="stage-group">
<h3>🎨 Building the Game Screen</h3>
<p class="group-desc">Make visible improvements and stack up save points.</p>

<a href="/box-runner/stage-02/" class="stage-card available">
  <span class="stage-num">2</span>
  <div>
    <strong>Add Styling</strong>
    <p>Create style.css and commit new + edited files together.</p>
  </div>
</a>

<a href="/box-runner/stage-03/" class="stage-card available">
  <span class="stage-num">3</span>
  <div>
    <strong>Add the Scoreboard</strong>
    <p>Add score and lives, then explore git log.</p>
  </div>
</a>
</div>

<div class="stage-group">
<h3>🌿 Branching and Merging</h3>
<p class="group-desc">Try a new idea safely, then bring it back.</p>

<a href="/box-runner/stage-04/" class="stage-card available">
  <span class="stage-num">4</span>
  <div>
    <strong>Try a Branch</strong>
    <p>Create a dark-theme branch. See what a branch really is.</p>
  </div>
</a>

<a href="/box-runner/stage-05/" class="stage-card available">
  <span class="stage-num">5</span>
  <div>
    <strong>Experiment on the Branch</strong>
    <p>Rewrite the CSS in dark mode — safely, on the branch.</p>
  </div>
</a>

<a href="/box-runner/stage-06/" class="stage-card available">
  <span class="stage-num">6</span>
  <div>
    <strong>Merge the Branch</strong>
    <p>Switch back to main and merge the dark theme home.</p>
  </div>
</a>
</div>

<div class="stage-group">
<h3>🚀 Sharing on GitHub</h3>
<p class="group-desc">Put your project online and keep improving it.</p>

<a href="/box-runner/stage-07/" class="stage-card available">
  <span class="stage-num">7</span>
  <div>
    <strong>Connect to GitHub</strong>
    <p>Create a repo and add it as a remote.</p>
  </div>
</a>

<a href="/box-runner/stage-08/" class="stage-card available">
  <span class="stage-num">8</span>
  <div>
    <strong>Push to GitHub</strong>
    <p>Upload every commit so far with git push.</p>
  </div>
</a>

<a href="/box-runner/stage-09/" class="stage-card available">
  <span class="stage-num">9</span>
  <div>
    <strong>Edit, Commit, Push Again</strong>
    <p>Cement the everyday edit → commit → push loop.</p>
  </div>
</a>
</div>

</div>

## The Stack

<div class="stack-cards">
  <div class="stack-card">
    <div class="stack-icon">📄</div>
    <h4>HTML 5</h4>
    <p>Just enough markup to put a title, a button, and a scoreboard on the page.</p>
  </div>
  <div class="stack-card">
    <div class="stack-icon">🎨</div>
    <h4>CSS 3</h4>
    <p>Plain stylesheet — no preprocessors, no variables, no build step.</p>
  </div>
  <div class="stack-card">
    <div class="stack-icon">🔧</div>
    <h4>Git</h4>
    <p>The save system you'll actually learn. Every stage is a commit.</p>
  </div>
  <div class="stack-card">
    <div class="stack-icon">🐙</div>
    <h4>GitHub</h4>
    <p>Where your project goes when you're ready to share it with the world.</p>
  </div>
</div>

## Who This Is For

<div class="audience-list">
<p><strong>You'll get the most out of this if you:</strong></p>

- Have never used Git before, or tried once and got lost
- Know a little HTML and CSS (or are learning them now)
- Want to actually _see_ what commits, branches, and merges do
- Prefer learning by making a real thing over reading theory

<p><strong>You don't need:</strong></p>

- Any JavaScript knowledge
- A framework, build tool, or package manager
- A server or hosting account (beyond a free GitHub account for the final stages)
- Previous command-line experience beyond `cd` and `ls`
</div>

<div class="cta-section">
  <a href="/box-runner/overview" class="cta-button">Start with the Overview →</a>
</div>

</div>

<style>
.home-content {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}

.home-content h2 {
  font-size: 1.6rem;
  margin-top: 3rem;
  margin-bottom: 1.2rem;
  border-bottom: 2px solid var(--vp-c-brand-1);
  padding-bottom: 0.5rem;
  display: inline-block;
}

/* Data flow visual */
.data-flow-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 2rem 0 0.5rem;
  flex-wrap: wrap;
}

.flow-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  padding: 0.8rem 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 10px;
  border: 1px solid var(--vp-c-divider);
  min-width: 80px;
}

.flow-icon { font-size: 1.8rem; }
.flow-label { font-size: 0.8rem; font-weight: 600; color: var(--vp-c-text-2); }
.flow-arrow { font-size: 1.4rem; color: var(--vp-c-brand-1); font-weight: bold; }
.flow-caption { text-align: center; color: var(--vp-c-text-2); font-style: italic; margin-top: 0.5rem; font-size: 0.95rem; }

/* Stage grid */
.stage-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.stage-group h3 { margin-bottom: 0.2rem; font-size: 1.1rem; }
.group-desc { margin: 0 0 0.6rem; font-size: 0.85rem; color: var(--vp-c-text-3); line-height: 1.4; }

.stage-card {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  margin-bottom: 0.5rem;
  opacity: 0.55;
}

.stage-card.available {
  opacity: 1;
  border-color: var(--vp-c-brand-soft);
  background: var(--vp-c-brand-soft);
}

a.stage-card {
  text-decoration: none !important;
  color: inherit !important;
  cursor: pointer;
  transition: border-color 0.2s, transform 0.15s;
}

a.stage-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-1px);
}

.stage-card strong { display: block; font-size: 0.95rem; }
.stage-card p { margin: 0.15rem 0 0; font-size: 0.85rem; color: var(--vp-c-text-2); }

.stage-num {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  color: var(--vp-c-bg);
  font-weight: 700;
  font-size: 0.85rem;
  flex-shrink: 0;
}

.stage-card:not(.available) .stage-num {
  background: var(--vp-c-divider);
  color: var(--vp-c-text-3);
}

/* Stack cards */
.stack-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.stack-card {
  padding: 1.2rem;
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  text-align: center;
}

.stack-icon { font-size: 2rem; margin-bottom: 0.5rem; }
.stack-card h4 { margin: 0 0 0.4rem; font-size: 1rem; }
.stack-card p { margin: 0; font-size: 0.9rem; color: var(--vp-c-text-2); }

/* Audience */
.audience-list {
  background: var(--vp-c-bg-soft);
  border-radius: 10px;
  padding: 1.5rem 2rem;
  border: 1px solid var(--vp-c-divider);
}

.audience-list p { margin-bottom: 0.5rem; }
.audience-list ul { margin-bottom: 1rem; }

/* CTA */
.cta-section { text-align: center; margin-top: 3rem; }

.cta-button {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: var(--vp-c-brand-1);
  color: var(--vp-c-bg) !important;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none !important;
  transition: background 0.2s;
}

.cta-button:hover { background: var(--vp-c-brand-2); }

/* Mobile */
@media (max-width: 640px) {
  .data-flow-visual { gap: 0.3rem; }
  .flow-step { padding: 0.5rem; min-width: 60px; }
  .flow-icon { font-size: 1.4rem; }
  .flow-label { font-size: 0.7rem; }
  .stage-grid { grid-template-columns: 1fr; }
}
</style>
