---
title: Faux Links
tags: 
  - wcag-1-3-1
  - wcag-2-1-1
  - wcag-2-1-3
  - wcag-4-1-2
linting: exists
testing: couldexist
author: couldexist
manual: exists
---

## Point of Failure
Scripted event handling should not be used to make a faux link out of a different element (like a `div`, `span`, or `img`) even if it also includes keyboard support

## Automation

### Linting
See the [`ember-template-lint`](https://github.com/ember-template-lint/ember-template-lint) library for the `no-invalid-interactive` rule.

### Testing
Potentially automatable. Evaluate the existing linting rule to see if an automated testing rule could be adapted from it.

If you have any ideas about how this could be done, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.