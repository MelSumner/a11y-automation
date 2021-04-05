---
title: Pseudo Content
tags: 
  - wcag-1-3-1
linting: couldexist
testing: couldexist
author: couldexist
manual: mustexist
---

## Point of Failure
Content should not be inserted by using the `:before` and `:after` pseudo-elements or the `content` property in CSS.

## Automation

### Linting
Potentially Automatable with a CSS linter.

### Testing
Potentially Automatable.

### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.