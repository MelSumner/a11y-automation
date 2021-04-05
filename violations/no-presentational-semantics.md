---
title: Presentational Semantic Elements
tags: 
  - wcag-1-3-1
linting: exists
testing: couldexist
author: couldexist
manual: exists
---

## Point of Failure
The `role="presentation"` or `"none"` should not be used on content that conveys semantic information. 

## Automation

### Linting
See the `ember-template-lint` library for the `no-invalid-role` rule.

### Testing
Potentially Automatable. Review linting rule and adapt rule for test suite.

### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Inspect DOM. Ensure that semantic html elements do not have `role` of presentation or none.