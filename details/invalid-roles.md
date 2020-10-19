---
title: Invalid Roles
tags: 
  - wcag-1-3-1
linting: exists
testing: exists
author: couldexist
manual: exists
---

## Point of Failure
Elements must have valid roles.

## Automation

### Linting
See the [`ember-template-lint`](https://github.com/ember-template-lint/ember-template-lint) library for the `no-invalid-role` rule.

### Testing
See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `aria-allowed-role` rule.

### Developer Authored Test
TBD

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.