---
title: Missing table header text
tags: 
  - wcag-1-3-1
  - wcag-4-2-1
linting: couldexist
testing: couldexist
author: couldexist
manual: mustexist
---

## Point of Failure

A table should not have any blank `<th>` elements.

## Automation

### Linting

Potentially Automatable.

### Testing

See the [axe-core](https://github.com/dequelabs/axe-core) library for the [empty-table-header](https://dequeuniversity.com/rules/axe/4.9/empty-table-header?application=RuleDescription) rule.

### Developer Authored Test

Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test

Review page and ensure the point of failure does not exist, inspecting the DOM where required.
