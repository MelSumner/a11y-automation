---
title: Keyboard trap due to multiple content formats
tags: 
  - wcag-2-1-2
  - failure-10
linting: cannotexist
testing: cannotexist
author: shouldexist
manual: mustexist
---

## Point of Failure

When multiple content formats are used, the user must not become trapped in any of the content.

## Automation

### Linting

Cannot Exist Yet. If you an idea about how this could be linted in an automated fashion, or are aware of an automated linting rule that already exists, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Testing

Cannot Exist Yet. If you an idea about how this could be tested in an automated fashion, or are aware of an automated test that already exists, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Developer Authored Test

Developers should avoid using multiple content formats- it increases the chance that something will go terribly wrong and will take weeks to debug. But if developers choose to engage in risky behavior, they should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test

Review page and ensure the point of failure does not exist, inspecting the DOM where required.
