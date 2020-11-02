---
title: Sound Automatically Played for Longer Than Three Seconds
tags: 
  - wcag-1-4-2
  - failure-23
linting: cannotexist
testing: exists
author: shouldexist
manual: shouldexist
---

## Point of Failure
Any sound automatically played for longer than three seconds requires a mechanism for the user to turn it off.

## Automation

### Linting
Cannot Exist Yet. If you an idea about how this could be linted in an automated fashion, or are aware of an automated linting rule that already exists, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Testing
Automated testing exists. See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `no-autoplay-audio` rule.

### Developer Authored Test
Ideally, do not autoplay any media of any type. It is inconsiderate of users who may already have screen readers operating, or users who have noise sensitivity issues. Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.