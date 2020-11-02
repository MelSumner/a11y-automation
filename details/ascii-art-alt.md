---
title: ASCII Art Must Have Text Alternative
tags: 
  - wcag-1-1-1
linting: cannotexist 
testing: cannotexist
author: couldexist
manual: mustexist
---

## Point of Failure
ASCII art should not be used without providing a text alternative

## Automation

### Linting
There is no programmatic way to determine if something is ASCII art. Cannot Exist Yet. If you think it can, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Testing
There is no programmatic way to determine if something is ASCII art. Cannot Exist Yet. If you think it can, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Developer Authored Test
Developers should provide alt text if ASCII art is used, and write a test to ensure that this code does not regress if changed.

### Manual Test
A manual test must exist. Review the page, and determine if ASCII art exists. If it does, inspect the DOM and look for an appropriate `alt` attribute.