---
title: Character Shortcuts
tags:
  - wcag-2-1-4
linting: couldexist
testing: cannotexist
author: couldexist
manual: mustexist
---

## Point of Failure
Character key shortcuts should not be implemented in such a way that they can not be turned off or remapped.

## Automation

### Linting
Potentially Automatable.

### Testing
Cannot Exist Yet. If you an idea about how this could be tested in an automated fashion, or are aware of an automated test that already exists, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.