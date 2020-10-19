---
title: Faux Lists
tags: 
  - wcag-1-3-1
linting: cannotexist
testing: exists
author: couldexist
manual: exists
---

## Point of Failure
Lists should use the HTML list (ul/li, ol/li).

## Automation

### Linting
How could we programmatically determine that it is a list without the required markup?

### Testing
See `axe-core` library for the `listitem` rule.

### Developer Authored Test
TBD

### Manual Test
Review the page for lists. Inspect the DOM and ensure that the appropriate markup is used.