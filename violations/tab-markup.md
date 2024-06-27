---
title: Incorrect tab component roles
tags: 
  - wcag-1-3-1
linting: cannotexist
testing: cannotexist
author: couldexist
manual: mustexist
---

## Point of Failure

Elements used as tabs should be marked with the correct roles

## Automation

### Linting

How could we programmatically determine that a UI component is being used as a tab, unless it already had the correct roles to indicate such?

### Testing

See above.

### Developer Authored Test

Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test

Review page and ensure the point of failure does not exist, inspecting the DOM where required.
