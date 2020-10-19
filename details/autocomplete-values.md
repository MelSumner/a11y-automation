---
title: Autocomplete Values
tags: 
  - wcag-1-3-5
linting: couldexist
testing: exists
author: couldexist
manual: couldexist
---

## Point of Failure
Autocomplete attribute values should have valid values.

## Automation

### Linting
Potentially automatable.

### Testing
See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `autocomplete-valid` rule. 

### Developer Authored Test
TBD

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.