---
title: Multiple Landmarks
tags: 
  - wcag-1-3-1
linting: exists
testing: exists
author: couldexist
manual: exists
---

## Point of Failure
Page has multiple landmark elements of the same type but the `aria-label` or `aria-labelledby` attributes are missing on each.

## Automation

### Linting
Automated linting exists. See the [`ember-template-lint`](https://github.com/ember-template-lint/ember-template-lint) library for the `no-duplicate-landmark-elements` rule.

### Testing
Automated testing exists. See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `landmark-unique` rule.

### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.