---
title: Malformed dt/dd elements
tags: 
  - wcag-1-3-1
linting: couldexist
testing: exists
author: couldexist
manual: exists
---

## Point of Failure

All `<dd>` and `<dt>` elements must be contained by a `<dl>` element.

## Automation

### Linting

Potentially Automatable.

### Testing

See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `dlitem` rule.

### Developer Authored Test

Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test

Review page and ensure the point of failure does not exist, inspecting the DOM where required.
