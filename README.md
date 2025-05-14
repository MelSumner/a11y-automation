# A11y Automation

[![Netlify Status](https://api.netlify.com/api/v1/badges/f7a9f162-0916-4ff3-8ecd-2047e26a6923/deploy-status)](https://app.netlify.com/sites/a11y-automation-tracker/deploys)

You are welcome to use and/or reference this project in any derivative work.
Please include a reference to this project's repository if you do that.

## Table of Contents

- [Introduction](#introduction)
- [Contributing](#contributing)
  - [How to add data](#how-to-add-data)
  - [Styling Conventions](#styling-conventions)
- [Getting Started](#getting-started)
- [Questions, Suggestions, or Concerns](#questions-suggestions-or-concerns)

## Introduction

The app aims to track a few things:

- potential violations; that is, specific ways an app could fail digital accessibility success criteria (called `violations` in this app)
- automated linting methods available for each violation
- automated testing methods available for each violation
- whether or not an author-provided test should be written
- manual testing methods, if they are required

We track these things through the sources we have found and know about:

- [axe-core](https://github.com/dequelabs/axe-core)
- Ember: [ember-template-lint](https://github.com/ember-template-lint/ember-template-lint)
- Lit: [eslint-plugin-lit-a11y](https://github.com/open-wc/open-wc/blob/master/docs/docs/linting/eslint-plugin-lit-a11y/)
- React (JSX): [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- Vue: [eslint-plugin-vuejs-accessibility](https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility)

Do you know about other automation tools that could be reviewed for inclusion?
Please let us know by filing an issue.

## Contributing

First and foremost, be kind. Please read through our [code of conduct](CODE_OF_CONDUCT.md) just so there is no misunderstanding.

Contributions are welcome in this open-source project. There are many different ways that anyone can contribute:

- filing issues to report bugs
- filing issues to request new features
- filing issues to let us know about libraries that have automated rule checks that we don't already know about
- opening a PR to resolve an issue
- opening a PR to add a test
- opening a PR to improve documentation (maybe something is worded incorrectly, incompletely, or just awkwardly)
- opening a PR to add information about a non-overlay, automated tool that we haven't included yet

### How to add data

The data in this app is stored as individual `.md` files.
This makes it fairly straightforward to add a new rule item or tag-- it's done by adding a single `.md` file to the appropriate folder.

There are three places where data can be added:

1. Violations (`violations`)
2. Tags (`tags`)
3. Automated Tools (`automated-tools`)

Look at the existing markup in the respective folders and imitate the patterns found there.

### Styling Conventions

CSS Declarations should be grouped and written in the following order:

1. Base styles
2. Modifier styles
3. State styles
4. Media Query / Responsive styles, in ascending order of breakpoint

Example:

```css
.base-selector {
  /* base styles */
}

.base-selector--modifier {
  /* modifier styles */
}

.base-selector:element-state {
  /* state styles */
}

@media (min-width: 640px) {
  .base-selector {
    /* responsive styles */
  }
}

@media (min-width: 960px) {
  .base-selector {
    /* responsive styles */
  }
}

```

## Getting Started

This site uses:

- [VitePress](https://vitepress.dev/)
- The default VitePress theme with options for customizations
- `pnpm`

To work on this app locally, follow these steps:

1. Clone the repository: `git clone https://github.com/MelSumner/a11y-automation.git`
2. Switch to the app's directory: `cd a11y-automation`
3. Install missing dependencies: `pnpm install`
4. Start the app locally: `pnpm vitepress dev .`.
5. it'll be available at `http://localhost:5173/` in your browser of choice.

If these instructions don't work for you, please let us know by filing an issue.

P.S. We used to use Tailwind CSS but found that it was a blocker for some contributors. As such, any issue or PR that suggests or adds it will be closed with this explanation.

## Questions, Suggestions, or Concerns

If you have any questions, suggestions or concerns, the best way to resolve them is to file an issue on this repo and I'll respond as soon as I am able.

Finally, it is highly unlikely that _any_ overlay tool will ever be included in this site.
Please see the [Overlay Fact Sheet](https://overlayfactsheet.com/en/) for more information.
