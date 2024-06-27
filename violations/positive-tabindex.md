---
title: Invalid element tabindex attribute value
tags:
  - wcag-2-4-3
  - failure-44
linting: exists
testing: couldexist
author: couldexist
manual: exists
---

## Point of Failure

The `tabindex` attribute should not be used to create a tab order that does not preserve meaning and operability

## Automation

### Linting

Automated linting exists. See the [`ember-template-lint`](https://github.com/ember-template-lint/ember-template-lint) library for the `no-positive-tabindex` rule.

### Testing

See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `tabindex` rule.

### Developer Authored Test

Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test

Review page and ensure the point of failure does not exist, inspecting the DOM where required.
