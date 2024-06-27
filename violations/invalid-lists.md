---
title: Malformed list element
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

Potentially automatable. Check for `ul` and `ol` elements, check that the role is not defined differently, and ensure the correct descendants.

### Testing

See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `list` rule.

### Developer Authored Test

Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test

Review page and ensure the point of failure does not exist, inspecting the DOM where required.
