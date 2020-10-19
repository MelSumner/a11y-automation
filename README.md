# a11y-automation
[![Netlify Status](https://api.netlify.com/api/v1/badges/f7a9f162-0916-4ff3-8ecd-2047e26a6923/deploy-status)](https://app.netlify.com/sites/a11y-automation-tracker/deploys)

This app is a work in progress; improvements and collaboration are welcome.

The app aims to track a few things: 
- specific ways an app could fail digital accessibility success criteria (called `details` in this app)
- automated linting methods available for each detail
- automated testing methods available for each detail
- manual testing methods, if they are required

**This is an Ember app**, which  means you'll need to have Ember installed (`npm install -g ember-cli`) to contribute. Contributions are welcome, and come in many different flavors: 

- filing bugs
- filing new feature requests
- submitting a PR to resolve an issue, improve the styling, or add a new feature
- improving the README or other documentation
- adding art

Issues that have been evaluated for ease of contribution will have the label `pr-welcome`, but if you feel confident to participate as a professional, then please do so! PRs that align with the goals of the project will be reviewed.

## Contributing
To work on this app locally, follow these steps: 

1. clone this repository -- `git clone https://github.com/MelSumner/a11y-automation.git`
2. switch to this app's directory -- `cd a11y-automation` 
3. run `npm install` to install missing dependencies
4. run `ember s` to build the app. If it all works, it'll be available at `http://localhost:4200/` in your browser of choice.

The styles in this app are in the `app/styles/app.scss` file.

To add assets (such as images or fonts) to the app, place them in the `public` folder.

### Adding Data

The data in this app is stored as individual `.md` files, which are then converted (automatically!) into `.json` for use in the application. This makes it fairly straightforward to add a new rule item or tag- it's done by adding a single `.md` file! Additionally, some generators have been created to streamline this process. (Want to see the automatic conversion in action? After you start the app locally, visit http://localhost:4200/details/all.json to see the compiled JSON output! Neat, huh?) 

#### Add a new detail

To add a new rule file, you can add one manually to the `details` folder, or you can use the generator to generate the file and put it in the correct location- `ember generate details rule-name` where `rule-name` is the name of the rule to be added. **Note: Only ONE new rule file should be submitted per pull request unless previously coordinated.**

#### Add a new tag

To add a new tag file, you can add one manually to the `tags` folder, or you can use the generator file from the command line: `ember generate tags tag-name` where `tag-name` is a dasherized version of the criterion. For example, WCAG 1.1.1 becomes `wcag-1-1-1` and the entire command would look like this: `ember generate tags wcag-1-1-1`. Only ONE tag file should be generated per pull request unless previously coordinated.

## Questions, Suggestions, or Concerns

If you have any questions, suggestions or concerns, the best way to resolve them is to file an issue on this repo and I'll respond ASAP.

### Why not make a spreadsheet?

1. It's depressing to work with Excel and way more interesting to work with code
2. It's faster for me to make this in an Ember app
3. I wanted an excuse to work with `broccoli-static-site-json` because it's an interesting lib to me
4. Making this an open source repo means other people can contribute to it
5. Making this an open source repo means other people can be inspired by the work that still needs to be done and maybe have some interesting ideas for how to solve them
6. I prefer to do my work in the open where other people can learn from it and also contribute to it