---
title: Non-unique landmark elements
tags: 
  - wcag-1-3-1
linting: exists
testing: exists
author: couldexist
manual: exists
---

## Point of Failure

Landmarks should be unique (if more than one of the same landmark on the page, a label/title should be provided for each)

## Automation

### Linting

See `ember-template-lint` library for [`no-duplicate-landmark-elements`](https://github.com/ember-template-lint/ember-template-lint/blob/master/docs/rule/no-duplicate-landmark-elements.md) rule.

### Testing

See `axe-core` library for `landmark-unique` rule.

### Developer Authored Test

Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test

When inspecting the DOM, review for duplicate landmark elements. If there are duplicates, ensure that unique labels have been provided for each.
