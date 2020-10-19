---
title: Complementary Placement
tags: 
  - wcag-1-3-1
linting: cannotexist
testing: exists
author: couldexist
manual: exists
---

## Point of Failure
The complementary landmark (aside) should be a direct descendant of the body element.

## Automation

### Linting
Cannot exist yet.

### Testing
See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `landmark-complementary-is-top-level` rule.

### Developer Authored Test
TBD

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.