---
title: Incorrectly Structured Lists
tags: 
  - wcag-1-3-1
linting: couldexist
testing: exists
author: couldexist
manual: exists
---

## Point of Failure
Lists should be structured correctly (only contain `<li>`, `<script>` or template elements -- where the script or template elements exist to generate the `li` elements).

## Automation

### Linting
Potentially automatable. Check for `ul` and `ol` elements, and ensure the correct descendants.

### Testing
See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `list` rule.

### Developer Authored Test
TBD

### Manual Test
TBD