---
title: No Faux Headings
tags: 
  - wcag-1-3-1
linting: couldexist
testing: exists
author: couldexist
manual: exists
---

## Point of Failure
CSS should not be used to make a paragraph or other plain text look like a heading.

## Automation

### Linting
Potentially automatable with a CSS linter.

### Testing
See rule `p-as-heading` in the `axe-core` a11y testing library.

### Developer Authored Test
TBD

### Manual Test
Inspect headings and ensure that they are using the appropriate semantic equivalent (h1-h6).