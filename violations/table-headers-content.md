---
title: Incorrect table header & content association
tags: 
  - wcag-1-3-1
linting: couldexist
testing: exists
author: couldexist
manual: exists
---

## Point of Failure
Table headers and content should not be incorrectly associated.

## Automation

### Linting
Potentially Automatable.

### Testing
Automated testing exists. See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `th-has-data-cells` rule.

### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.