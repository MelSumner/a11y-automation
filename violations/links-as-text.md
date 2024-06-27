---
title: Incorrect link styling
tags: 
  - wcag-1-4-1
linting: couldexist
testing: exists
author: couldexist
manual: exists
---

## Point of Failure
Links should not look the same as the text. Links should not have the underline removed or should be distinguishable from text in a way that does not rely on color.

## Automation

### Linting
Potentially automatable with a CSS linter.

### Testing
See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `link-in-text-block` rule.

### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.