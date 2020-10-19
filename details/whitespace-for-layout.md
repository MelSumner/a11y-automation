---
title: Whitespace For Layout
tags: 
  - wcag-1-3-1
  - wcag-1-3-2
linting: exists
testing: couldexist
author: couldexist
manual: exists
---

## Point of Failure
Whitespace should not be used for layout.

## Automation

### Linting
See the [`ember-template-lint`](https://github.com/ember-template-lint/ember-template-lint) library for the `no-whitespace-for-layout` rule.

### Testing
Potentially Automatable. Review the linting rule and adapt for automated test purposes.

### Developer Authored Test
TBD

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.