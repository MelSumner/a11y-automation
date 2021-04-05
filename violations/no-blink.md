---
title: Use of Blink
tags:
  - wcag-2-2-2
  - failure-4
linting: couldexist
testing: couldexist
author: couldexist
manual: mustexist
---

## Point of Failure
The `text-decoration: blink` should not be used.

## Automation

### Linting
Potentially Automatable.

### Testing
Potentially Automatable.

### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.