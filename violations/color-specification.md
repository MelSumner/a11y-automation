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

Ideally, developers can train themselves to always declare a color and a background color in their CSS.

### Manual Test

Review page and ensure the point of failure does not exist, inspecting the DOM where required.
