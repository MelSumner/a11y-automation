---
title: Missing modal keyboard support
tags: 
  - wcag-2-1-1
linting: cannotexist
testing: couldexist
author: shouldexist
manual: mustexist
---

## Point of Failure

Any element that appears OVER the primary window should be able to be opened/closed by a keyboard user.

## Automation

### Linting

Cannot Exist Yet. If you an idea about how this could be linted in an automated fashion, or are aware of an automated linting rule that already exists, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Testing

Potentially Automatable.

### Developer Authored Test

Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test

Review page and ensure the point of failure does not exist, inspecting the DOM where required.
