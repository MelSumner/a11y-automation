---
title: Text Look-Alikes Require An Alt Attribute
tags: 
  - wcag-1-1-1
linting: couldexist
testing: couldexist
author: couldexist
manual: mustexist
---

## Point of Failure
Text look-alikes such as glyphs or character entities should not be used to represent text without providing a text alternative.

## Automation

### Linting
Potentially automatable.

If you have any ideas about how this could be done, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Testing
Potentially automatable. 

If you have any ideas about how this could be done, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Developer Authored Test
Ensure that glyphs and character entities have a text alternative. Write a test to ensure that this code does not regress if changed.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.