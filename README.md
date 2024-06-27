# a11y-automation

[![Netlify Status](https://api.netlify.com/api/v1/badges/f7a9f162-0916-4ff3-8ecd-2047e26a6923/deploy-status)](https://app.netlify.com/sites/a11y-automation-tracker/deploys)

## Table of Contents

* [Introduction](#introduction)
* [Getting Started](#getting-started)
* [Contributing](#contributing)
* [Questions, Suggestions, or Concerns](#questions-suggestions-or-concerns)

This app is a work in progress; improvements and collaboration are welcome.

## Introduction

The app aims to track a few things:
* potential violations; that is, specific ways an app could fail digital accessibility success criteria (called `violations` in this app)
* automated linting methods available for each violation
* automated testing methods available for each violation
* manual testing methods, if they are required
* The styles in this app are primarily provided by Tailwind.

**This is an Ember app**, which  means you'll need to have Ember installed (`npm install -g ember-cli`) to contribute. Contributions are welcome, and come in many different flavors:

* filing bugs
* filing new feature requests
* submitting a PR to resolve an issue, improve the styling, or add a new feature
* improving the README or other documentation
* adding art/graphics

Issues that have been evaluated for ease of contribution will have the label `pr-welcome`, but if you feel confident to participate as a professional, then please do so! PRs that align with the goals of the project will be reviewed.

## Getting Started

To work on this app locally, follow these steps:

1. Clone the repository: `git clone https://github.com/MelSumner/a11y-automation.git`
2. Switch to the app's directory: `cd a11y-automation`
3. Install missing dependencies: `yarn`
4. Build the app: `yarn start`.
5. it'll be available at `http://localhost:4200/` in your browser of choice.

## Contributing

To contribute to this project, please follow our [contributing guidelines](CODE_OF_CONDUCT.md).

To add assets (such as images or fonts) to the app, place them in the appropriate sub-folder in the `public` folder.

### Adding Data

The data in this app is stored as individual `.md` files, which are then converted (automatically!) into `.json` for use in the application. This makes it fairly straightforward to add a new rule item or tag- it's done by adding a single `.md` file! Additionally, some generators have been created to streamline this process. (Want to see the automatic conversion in action? After you start the app locally, visit <http://localhost:4200/violations/all.json> to see the compiled JSON output! Neat, huh?)

### Add a new violation

To add a new file to track a potential a11y violation, you can add one manually to the `violations` folder, or you can use the generator to generate the file and put it in the correct location- `ember generate violations rule-name` where `rule-name` is the name of the rule to be added. **Note: Only ONE new file should be submitted per pull request unless previously coordinated.**

### Add a new tag

To add a new tag file, you can add one manually to the `tags` folder, or you can use the generator file from the command line: `ember generate tags tag-name` where `tag-name` is a dasherized version of the criterion. For example, WCAG 1.1.1 becomes `wcag-1-1-1` and the entire command would look like this: `ember generate tags wcag-1-1-1`. Only ONE tag file should be generated per pull request unless previously coordinated.

## Questions, Suggestions, or Concerns

If you have any questions, suggestions or concerns, the best way to resolve them is to file an issue on this repo and I'll respond ASAP. I'll also try to list questions I've already been asked, in case you are wondering about it as well.

## Inclusion in Documentation

Although this app currently tracks linting from ember-template-lint and testing from axe-core, we have expanded support to include linting for other JavaScript frameworks. If you want to contribute linting support for other frameworks, please follow the format in the existing violations to allow your PR to be accepted/merged more readily.
