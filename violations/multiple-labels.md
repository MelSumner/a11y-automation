---
title: Multiple Labels for a Single Form Field
tags:
  - wcag-3-2-2
linting: exists
testing: exists
author: couldexist
manual: exists
---

## Point of Failure
An input field should not have multiple associated labels. For example, an `<input/>` element with an `aria-label` attribute plus an associated `<label>` element is considered multiple labels.

## Automation

### Linting
Automated linting exists. See the [`ember-template-lint`](https://github.com/ember-template-lint/ember-template-lint) library for the `require-input-label` rule.

### Testing
Automated testing exists. See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `form-field-multiple-labels` rule.

### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.
