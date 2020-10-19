---
title: Presentational Interactive
tags: 
  - wcag-1-3-1
linting: couldexist
testing: couldexist
author: couldexist
manual: mustexist
---

## Point of Failure
Interactive elements should not have role="presentation" or role="none"

## Automation

### Linting
Potentially automatable. Check interactive elements for the role of presentation or the role of none.

### Testing
See above

### Developer Authored Test
TBD

### Manual Test
Inspect DOM for instances of `role="presentation"` and `role="none"` and ensure that they are not attached to interactive elements.