---
title: Grouped Form Controls
tags: 
  - wcag-1-3-1
linting: couldexist
testing: couldexist
author: couldexist
manual: mustexist
---

## Point of Failure
Grouped `form` controls should use `fieldset` and `legend` elements

## Automation

### Linting
Potentially Automatable. Look for groups of checkboxes and radiobuttons and ensure that they are contained in `fieldset` elements that contain a `legend` element. 

### Testing
See above. 

### Developer Authored Test
TBD

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.