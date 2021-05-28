---
title: Positive Tabindex
tags:
  - wcag-2-4-3
  - failure-44
linting: exists
testing: couldexist
author: couldexist
manual: exists
---

## Point of Failure


## Automation

### Linting
Automated linting exists. See the [`ember-template-lint`](https://github.com/ember-template-lint/ember-template-lint) library for the `no-positive-tabindex` rule.

### Testing
Potentially Automatable.

### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.
