---
title: Dynamic Images, Dynamic Alts
tags: 
  - wcag-1-1-1
  - wcag-4-1-2
linting: couldexist
testing: cannotexist
author: couldexist
manual: exists
---

## Point of Failure
If an image is updated dynamically, the `alt` attribute value must be updated as well.

## Automation

### Linting
Potentially automatable. Update require-valid-alt-text to include this scenario.

### Testing
How could you determine that an image was being updated dynamically? 

### Developer Authored Test
TBD

### Manual Test
Observe the page and see if any images are being updated dynamically. If they are, inspect each one to ensure that the `alt` attribute values are being updated as well.