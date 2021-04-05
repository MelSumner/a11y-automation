---
title: Unique Iframe Titles
tags:
  - wcag-2-4-1
  - wcag-4-1-2
linting: couldexist
testing: exists
author: couldexist
manual: exists
---

## Point of Failure
If there are multiple iframe elements on the page, they should each have a unique title.

## Automation

### Linting
Potentially automatable.

### Testing
See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `frame-title-unique` rule.

### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.