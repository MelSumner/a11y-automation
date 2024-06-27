---
title: Invalid required or error field indicators
tags: 
  - wcag-1-4-1
  - failure-81
linting: couldexist
testing: cannotexist
author: shouldexist
manual: mustexist
---

## Point of Failure

Required or error fields should not be identified only using color differences.

## Automation

### Linting

Potentially Automatable.

### Testing

Cannot Exist Yet.

### Developer Authored Test

Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test

Review page and ensure the point of failure does not exist, inspecting the DOM where required.
