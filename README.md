# a11y-automation
[![Netlify Status](https://api.netlify.com/api/v1/badges/f7a9f162-0916-4ff3-8ecd-2047e26a6923/deploy-status)](https://app.netlify.com/sites/a11y-automation-tracker/deploys)

This app is a work in progress; improvements and collaboration are welcome.

The app aims to track a few things: 
- specific ways an app could fail digital accessibility success criteria (called `details` in this app)
- automated linting methods available for each detail
- automated testing methods available for each detail
- manual testing methods, if they are required

This is an Ember app, which  means you'll need to have Ember installed (`npm install -g ember-cli`) to contribute. Contributions are welcome, and come in many different flavors: 

- filing bugs
- filing new feature requests (such as a new rule)
- submitting a PR to resolve an issue
- improving the README or other files of this type

Issues that have been evaluated for ease of contribution will have the label `pr-welcome`. 

## Adding Data

The data in this app is stored as individual `.md` files, which are then converted (automatically!) into `.json` for use in the application. This makes it easy to add a new rule item or tag- it's just adding a single `.md` file! Additionally, some generators have been created to make it even easier. 

### Add a new detail

To add a new rule file, you can add one manually to the `details` folder, or you can use the generator to generate the file and put it in the correct location- `ember generate details rule-name` where `rule-name` is the name of the rule to be added. **Note: Only ONE new rule file should be submitted per pull request unless previously coordinated.**

### Add a new tag

To add a new tag file, you can add one manually to the `tags` folder, or you can use the generator file from the command line: `ember generate tags tag-name` where `tag-name` is a dasherized version of the criterion. For example, WCAG 1.1.1 becomes `wcag-1-1-1` and the entire command would look like this: `ember generate tags wcag-1-1-1`. Only ONE tag file should be generated per pull request unless previously coordinated.