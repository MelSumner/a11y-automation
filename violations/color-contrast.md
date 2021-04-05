---
title: Color Contrast
tags: 
  - wcag-1-4-3
linting: couldexist
testing: exists
author: couldexist
manual: exists
---

## Point of Failure
Elements should have sufficient color contrast (4.5:1).

## Automation

### Linting
Potentially Automatable with a CSS linter.

### Testing
Automated testing exists. See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `color-contrast` rule.

### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.