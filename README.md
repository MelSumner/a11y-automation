# a11y-automation

This app is a work in progress.

It aims to track a few things: 
- specific ways an app could fail digital accessibility success criteria (called `details` in this app)
- automated linting methods available for each detail
- automated testing methods available for each detail
- manual testing methods, if they are required

This is an Ember app, which  means you'll need to have Ember installed (`npm install -g ember-cli`) to contribute. Contributions are welcome, and come in many different flavors: 

- filing bugs
- filing new feature requests (such as a new rule)
- submitting a PR to resolve an issue
- improving the README or other files of this type


## Add a new detail

To add a new rule file, you can add one manually, or you can use the generator to generate the file and put it in the correct location- `ember generate details rule-name`.