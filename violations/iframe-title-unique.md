---
title: Iframes Without Unique Titles
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

Potentially automatable, but the test covers it rather well.

### Testing

See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `frame-title-unique` rule.

### Developer Authored Test

Developers should try to not use iframes in general; if you must, then ensure that the code does not violate this rule. Write a test to check for this if you do not use any form of automated accessibility testing.

### Manual Test

Review page and ensure the point of failure does not exist, inspecting the DOM where required.
