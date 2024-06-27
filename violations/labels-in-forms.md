---
title: Missing form element label
tags: 
  - wcag-1-3-1
  - wcag-4-1-2
linting: exists
testing: exists
author: couldexist
manual: exists
---

## Point of Failure
All form elements should have a `label`.

## Automation

### Linting
See the [`ember-template-lint`](https://github.com/ember-template-lint/ember-template-lint) library for the `require-input-label` rule.

### Testing
See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `label` rule.

### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.