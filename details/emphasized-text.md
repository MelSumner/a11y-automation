---
title: CSS for Visual Emphasis
tags: 
  - wcag-1-3-1
linting: couldexist
testing: exists
author: couldexist
manual: exists
---

## Point of Failure
CSS should not be used to visually emphasize a word or phrase without conveying that emphasis through semantic HTML.

## Automation

### Linting
Potentially automatable through a CSS linter. Ensure there are no classes that do the same thing the `<strong>` or `<em>` elements do.

### Testing
See `axe-core` library for `p-as-heading` rule.

### Developer Authored Test
TBD

### Manual Test
Inspect DOM where words have been given emphasis or boldness. Ensure that the appropriate HTML element has been used instead of CSS.