---
title: Orientation Lock
tags: 
  - wcag-1-3-4
linting: couldexist
testing: exists
author: couldexist
manual: exists
---

## Point of Failure
Content should not have its orientation locked to portrait or landscape view.

## Automation

### Linting
Potentially automatable with a CSS linter.

### Testing
See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `css-orientation-lock` rule.

### Developer Authored Test
TBD

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.