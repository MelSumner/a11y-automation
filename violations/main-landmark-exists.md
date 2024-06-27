---
title: Missing main element
tags:
  - wcag-1-3-1
linting: cannotexist
testing: exists
author: couldexist
manual: exists
---

## Point of Failure
Every page should have a `main` landmark element.

## Automation

### Linting
We would need a way to identify that a specific template was a page-level template vs a component template.

### Testing
See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `page-has-main` rule.

### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.