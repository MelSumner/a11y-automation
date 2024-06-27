---
title: Hidden tooltip content
tags: 
  - wcag-1-3-1
linting: couldexist
testing: couldexist
author: couldexist
manual: mustexist
---

## Point of Failure
Tooltip content must not be hidden from screen readers.

## Automation

### Linting
Potentially automatable to some extent. Look for tooltips and ensure that they do not have any hidden attributes on them.

### Testing
Potentially automatable to some extent. Look for tooltips and ensure that they do not have any hidden attributes on them.

### Developer Authored Test
Developer must ensure that tooltips can be accessed via keyboard only, and must not hide tooltip content from assistive technology.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.