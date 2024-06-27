---
title: Hidden interactive elements
tags: 
  - wcag-1-3-1
  - wcag-4-1-2
linting: couldexist
testing: exists
author: couldexist
manual: exists
---

## Point of Failure
Elements with the `aria-hidden` attribute should not contain focusable (interactive) elements.

## Automation

### Linting
Potentially automatable.

### Testing
See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `aria-hidden-focus` rule.

### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.