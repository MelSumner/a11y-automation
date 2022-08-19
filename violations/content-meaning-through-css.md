---
title: CSS Positioning Changes Content Meaning
tags: 
  - wcag-1-3-2
  - failure-1
linting: couldexist
testing: couldexist
author: shouldexist
manual: mustexist
---

## Point of Failure

Content meaning should not be changed through CSS positioning.

## Automation

### Linting

Potentially Automatable through CSS linting.

### Testing

Potentially Automatable.

### Developer Authored Test

Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test

Review page and ensure the point of failure does not exist, inspecting the DOM where required.
