---
title: Abstract Role Use
tags:
  - wcag-1-3-1
linting: exists
testing: exists
author: couldexist
manual: exists
---

## Point of Failure

Abstract roles should not be used.

## Automation

### Linting

See the [`ember-template-lint`](https://github.com/ember-template-lint/ember-template-lint) library for the `no-abstract-roles` rule.

### Testing

See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the [`aria-allowed-role` rule](https://dequeuniversity.com/rules/axe/4.1/aria-allowed-role?application=RuleDescription).

### Developer Authored Test

Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test

Review page and ensure the point of failure does not exist, inspecting the DOM where required.
