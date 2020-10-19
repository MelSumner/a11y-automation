---
title: Blink Element Use
tags: 
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
TBD

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.