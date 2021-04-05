---
title: No Image of Text as Heading
tags:
  - wcag-1-3-1
linting: couldexist
testing: couldexist
author: couldexist
manual: mustexist
---

## Point of Failure
Images of text should not be used as headings.

## Automation

### Linting
Potentially automatable but there are a lot of violations to consider.
- how do we programmatically identify images of text
- how do we programmatically identify headings
- how do we programmatically identify that an image of text is being used as a header

### Testing
See above

### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Review the page. Check headings to insure they are not images of text.
