---
title: Icon Only
tags: 
  - wcag-1-3-3
linting: couldexist
testing: couldexist
author: couldexist
manual: mustexist
---

## Point of Failure
An icon should not be the only thing that conveys information to the user.

## Automation

### Linting
Potentially automatable. Search template for text nodes where the only item is an icon.

### Testing
Potentially automatable. Search text nodes for icons and determine if they are the only item in the node.

### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.