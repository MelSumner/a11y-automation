---
title: Invalid input autocomplete values
tags: 
  - failure-107
  - wcag-1-3-5
linting: couldexist
testing: exists
author: couldexist
manual: exists
---

## Point of Failure

Autocomplete attribute values should have valid values.

## Automation

### Linting

Potentially automatable.

### Testing

See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `autocomplete-valid` rule.

### Developer Authored Test

Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test

Review page and ensure the point of failure does not exist, inspecting the DOM where required.
