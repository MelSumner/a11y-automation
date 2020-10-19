---
title: Meta Redirect with Time Limit
tags: 
  - wcag-2-2-1
  - wcag-2-2-4
  - wcag-3-2-5
linting: exists
testing: couldexist
author: couldexist
manual: exists
---

## Point of Failure
A `meta` redirect with a time limit should not be used.

## Automation

### Linting
See the [`ember-template-lint`](https://github.com/ember-template-lint/ember-template-lint) library for the `no-invalid-meta` rule.

### Testing
Potentially automatable. Review linting rule and see if it's adaptable.

### Developer Authored Test
TBD

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.