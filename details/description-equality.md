---
title: Description Equality
tags: 
  - wcag-1-1-1
  - wcag-1-2-1
linting: cannotexist
testing: cannotexist
author: couldexist
manual: mustexist
---

## Point of Failure
Long descriptions for non-text content should serve the same purpose and present the same information (not more or less)

## Automation

### Linting
Cannot exist yet. How would we programmatically be able to not only identify what should be compared but also compare the two and determine that they are the same?

### Testing
Cannot exist yet. How would we programmatically be able to not only identify what should be compared but also compare the two and determine that they are the same?

### Developer Authored Test
When adding long descriptions for non-text content, ensure that it presents the same information as is visible.

### Manual Test
A manual test must exist. Observe if there is any non-text content on the page, and inspect the DOM for long descriptions. Ensure that they serve the same purpose and present the same information, not more or less.