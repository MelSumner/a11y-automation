---
title: Missing element event handlers
tags: 
  - wcag-2-1-1
  - failure-54
linting: cannotexist
testing: cannotexist
author: shouldexist
manual: mustexist
---

## Point of Failure

A pointing-device-specific event handler should not be the only means of activating an event handler for a function.

## Automation

### Linting

Cannot Exist Yet. If you an idea about how this could be linted in an automated fashion, or are aware of an automated linting rule that already exists, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Testing

Cannot Exist Yet. If you an idea about how this could be tested in an automated fashion, or are aware of an automated test that already exists, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Developer Authored Test

Developers should ensure that their code does not violate this rule by ensuring that if a device-specific event handler invokes a function, a keyboard should also be able to invoke the same function. Write a test that prevents regressions in code if it is later changed.

### Manual Test

Review page and ensure the point of failure does not exist, inspecting the DOM where required.
