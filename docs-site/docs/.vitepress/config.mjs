import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid({
  title: 'Box Runner',
  description: 'Learn Git and GitHub by building a tiny HTML+CSS game screen.',
  base: '/box-runner/',
  appearance: 'dark',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Overview', link: '/overview' },
      { text: 'Stage 0', link: '/stage-00/' },
      { text: 'Stage 1', link: '/stage-01/' },
      { text: 'Stage 2', link: '/stage-02/' },
      { text: 'Stage 3', link: '/stage-03/' },
      { text: 'Stage 4', link: '/stage-04/' },
      { text: 'Stage 5', link: '/stage-05/' },
      { text: 'Stage 6', link: '/stage-06/' },
      { text: 'Stage 7', link: '/stage-07/' },
      { text: 'Stage 8', link: '/stage-08/' },
      { text: 'Stage 9', link: '/stage-09/' },
      { text: 'GitHub', link: 'https://github.com/vedanta/box-runner' },
    ],

    sidebar: [
      { text: 'Tutorial Overview', link: '/overview' },
      {
        text: 'The First Save',
        collapsed: true,
        items: [
          {
            text: 'Stage 0 — Create the Game Screen',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/stage-00/' },
              { text: 'Changelog', link: '/stage-00/changelog' },
              { text: 'Steps', link: '/stage-00/steps' },
              { text: 'Walkthrough', link: '/stage-00/walkthrough' },
              { text: 'Architecture', link: '/stage-00/architecture' },
              { text: 'Exercises', link: '/stage-00/exercises' },
              { text: 'Troubleshooting', link: '/stage-00/troubleshooting' },
            ],
          },
          {
            text: 'Stage 1 — First Save Point',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/stage-01/' },
              { text: 'Changelog', link: '/stage-01/changelog' },
              { text: 'Steps', link: '/stage-01/steps' },
              { text: 'Walkthrough', link: '/stage-01/walkthrough' },
              { text: 'Architecture', link: '/stage-01/architecture' },
              { text: 'Exercises', link: '/stage-01/exercises' },
              { text: 'Troubleshooting', link: '/stage-01/troubleshooting' },
            ],
          },
        ],
      },
      {
        text: 'Building the Game Screen',
        collapsed: true,
        items: [
          {
            text: 'Stage 2 — Add Styling',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/stage-02/' },
              { text: 'Changelog', link: '/stage-02/changelog' },
              { text: 'Steps', link: '/stage-02/steps' },
              { text: 'Walkthrough', link: '/stage-02/walkthrough' },
              { text: 'Architecture', link: '/stage-02/architecture' },
              { text: 'Exercises', link: '/stage-02/exercises' },
              { text: 'Troubleshooting', link: '/stage-02/troubleshooting' },
            ],
          },
          {
            text: 'Stage 3 — Add the Scoreboard',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/stage-03/' },
              { text: 'Changelog', link: '/stage-03/changelog' },
              { text: 'Steps', link: '/stage-03/steps' },
              { text: 'Walkthrough', link: '/stage-03/walkthrough' },
              { text: 'Architecture', link: '/stage-03/architecture' },
              { text: 'Exercises', link: '/stage-03/exercises' },
              { text: 'Troubleshooting', link: '/stage-03/troubleshooting' },
            ],
          },
        ],
      },
      {
        text: 'Branching and Merging',
        collapsed: true,
        items: [
          {
            text: 'Stage 4 — Try a Branch',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/stage-04/' },
              { text: 'Changelog', link: '/stage-04/changelog' },
              { text: 'Steps', link: '/stage-04/steps' },
              { text: 'Walkthrough', link: '/stage-04/walkthrough' },
              { text: 'Architecture', link: '/stage-04/architecture' },
              { text: 'Exercises', link: '/stage-04/exercises' },
              { text: 'Troubleshooting', link: '/stage-04/troubleshooting' },
            ],
          },
          {
            text: 'Stage 5 — Experiment on the Branch',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/stage-05/' },
              { text: 'Changelog', link: '/stage-05/changelog' },
              { text: 'Steps', link: '/stage-05/steps' },
              { text: 'Walkthrough', link: '/stage-05/walkthrough' },
              { text: 'Architecture', link: '/stage-05/architecture' },
              { text: 'Exercises', link: '/stage-05/exercises' },
              { text: 'Troubleshooting', link: '/stage-05/troubleshooting' },
            ],
          },
          {
            text: 'Stage 6 — Merge the Branch',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/stage-06/' },
              { text: 'Changelog', link: '/stage-06/changelog' },
              { text: 'Steps', link: '/stage-06/steps' },
              { text: 'Walkthrough', link: '/stage-06/walkthrough' },
              { text: 'Architecture', link: '/stage-06/architecture' },
              { text: 'Exercises', link: '/stage-06/exercises' },
              { text: 'Troubleshooting', link: '/stage-06/troubleshooting' },
            ],
          },
        ],
      },
      {
        text: 'Sharing on GitHub',
        collapsed: true,
        items: [
          {
            text: 'Stage 7 — Connect to GitHub',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/stage-07/' },
              { text: 'Changelog', link: '/stage-07/changelog' },
              { text: 'Steps', link: '/stage-07/steps' },
              { text: 'Walkthrough', link: '/stage-07/walkthrough' },
              { text: 'Architecture', link: '/stage-07/architecture' },
              { text: 'Exercises', link: '/stage-07/exercises' },
              { text: 'Troubleshooting', link: '/stage-07/troubleshooting' },
            ],
          },
          {
            text: 'Stage 8 — Push to GitHub',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/stage-08/' },
              { text: 'Changelog', link: '/stage-08/changelog' },
              { text: 'Steps', link: '/stage-08/steps' },
              { text: 'Walkthrough', link: '/stage-08/walkthrough' },
              { text: 'Architecture', link: '/stage-08/architecture' },
              { text: 'Exercises', link: '/stage-08/exercises' },
              { text: 'Troubleshooting', link: '/stage-08/troubleshooting' },
            ],
          },
          {
            text: 'Stage 9 — Edit, Commit, Push Again',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/stage-09/' },
              { text: 'Changelog', link: '/stage-09/changelog' },
              { text: 'Steps', link: '/stage-09/steps' },
              { text: 'Walkthrough', link: '/stage-09/walkthrough' },
              { text: 'Architecture', link: '/stage-09/architecture' },
              { text: 'Exercises', link: '/stage-09/exercises' },
              { text: 'Troubleshooting', link: '/stage-09/troubleshooting' },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vedanta/box-runner' },
    ],

    outline: 'deep',
  },

  mermaid: {
    theme: 'dark',
  },
})
