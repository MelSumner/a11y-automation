---
title: Contentinfo as Body Descendant
tags: 
  - wcag-1-3-1
linting: cannotexist
testing: exists
author: couldexist
manual: exists
---

## Point of Failure
the contentinfo landmark should be a direct descendant of the body element

## Automation

### Linting
Cannot exist yet.

### Testing
See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `landmark-contentinfo-is-top-level` rule.

### Developer Authored Test
TBD

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.