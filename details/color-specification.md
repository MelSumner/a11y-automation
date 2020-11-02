---
title: Color Specification
tags: 
  - wcag-1-4-3
  - wcag-1-4-6
  - wcag-1-4-8
  - failure-24
linting: couldexist
testing: couldexist
author: shouldexist
manual: mustexist
---

## Point of Failure
If the `color` property is specified; the `background-color` must also be specified, and vice-versa.

## Automation

### Linting
Potentially Automatable with CSS linting.

### Testing
Potentially Automatable.

### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.