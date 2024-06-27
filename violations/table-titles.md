---
title: Malformed table elements
tags: 
  - wcag-1-3-1
linting: couldexist
testing: couldexist
author: couldexist
manual: mustexist
---

## Point of Failure
Tables should be used for tabular data, and should have titles.

## Automation

### Linting
Potentially Automatable.

### Testing
Potentially Automatable.

### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.