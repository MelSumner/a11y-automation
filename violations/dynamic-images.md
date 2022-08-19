---
title: Dynamic Images Missing Dynamic Alts
tags: 
  - wcag-1-1-1
  - wcag-4-1-2
linting: couldexist
testing: cannotexist
author: shouldexist
manual: mustexist
---

## Point of Failure

If an image is updated dynamically, the `alt` attribute value must be updated as well.

## Automation

### Linting

Potentially automatable.

### Testing

How could you determine that an image was being updated dynamically?

If you have any thoughts on how to solve this problem, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Developer Authored Test

If the developer knows that images will be updated dynamically, write a test to ensure that the alt text is also updated dynamically.

### Manual Test

Observe the page and see if any images are being updated dynamically. If they are, inspect each one to ensure that the `alt` attribute values are being updated as well.
