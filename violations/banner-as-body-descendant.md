---
title: Banner Element With Incorrect Parent
tags: 
  - wcag-1-3-1
linting: cannotexist
testing: exists
author: couldexist
manual: exists
---

## Point of Failure

An element with the role of `banner` should only be a direct descendant of the body element.

## Automation

### Linting

Does not exist yet. If you have any ideas about how this could be done, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Testing

See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `landmark-banner-is-top-level` rule.

### Developer Authored Test

Developers should ensure that their code does not violate this rule, and, if possible, write a test that prevents regressions in code if it is later changed.

### Manual Test

Review page and ensure the point of failure does not exist, inspecting the DOM where required.
