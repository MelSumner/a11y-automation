---
title: Nested interactive elements
tags:
  - wcag-4-1-2
linting: exists
testing: exists
author: couldexist
manual: exists
---

## Point of Failure

Interactive elements must not have focusable descendants. Example: if there's a link inside of a button, it will be ignored by assistive technology; all child elements of buttons are considered presentational (per the spec).

## Automation

### Linting

Automated linting exists in some JS frameworks:

* Ember: See the [`ember-template-lint`](https://github.com/ember-template-lint/ember-template-lint) library for the `no-nested-interactive` rule.

### Testing

Automated testing exists. See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `nested-interactive` rule.

### Developer Authored Test

Developers should ensure that their code does not violate this rule. If using a linter or automated testing library is not possible, then write a test to ensure that the code throws an error if this potential violation occurs.

### Manual Test

Review page and ensure the point of failure does not exist, inspecting the DOM where required.
