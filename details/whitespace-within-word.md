---
title: Whitespace Within Word
tags: 
  - wcag-1-3-2
linting: exists
testing: exists
author: couldexist
manual: exists
---

## Point of Failure
Whitespace should not be used to control spacing within a word.

## Automation

### Linting
See the [`ember-template-lint`](https://github.com/ember-template-lint/ember-template-lint) library for the `no-whitespace-within-word` rule.

### Testing
See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `avoid-inline-spacing` rule.

### Developer Authored Test
TBD

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.