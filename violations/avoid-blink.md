---
title: Blink Element Use
tags: 
  - failure-47
  - wcag-2-2-2
linting: exists
testing: couldexist
author: couldexist
manual: exists
---

## Point of Failure
The `<blink>` element is obsolete and should not be used.

## Automation

### Linting
See the [`ember-template-lint`](https://github.com/ember-template-lint/ember-template-lint) library for the `no-obsolete-elements` rule.

### Testing
Potentially automatable.

### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.