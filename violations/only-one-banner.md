---
title: Multiple banner landmarks exist
tags: 
  - wcag-1-3-1
linting: cannotexist
testing: exists
author: couldexist
manual: exists
---

## Point of Failure
A document must not have more than one banner landmark.

## Automation

### Linting
Cannot exist yet.

### Testing
See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `landmark-no-duplicate-banner` rule.

### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.