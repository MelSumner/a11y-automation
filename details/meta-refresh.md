---
title: Meta Refresh For Page Reload
tags: 
  - wcag-2-2-1
  - wcag-2-2-4
  - wcag-3-2-5
linting: exists
testing: exists
author: couldexist
manual: exists
---

## Point of Failure
A `meta` refresh should not be used to reload the page.

## Automation

### Linting
See the [`ember-template-lint`](https://github.com/ember-template-lint/ember-template-lint) library for the `no-invalid-meta` rule.

### Testing
See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `meta-refresh` rule.

### Developer Authored Test
TBD

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.