---
title: Shape & Location Only Identifiers
tags: 
  - failure-14
  - wcag-1-3-3
linting: couldexist
testing: couldexist
author: couldexist
manual: mustexist
---

## Point of Failure

Content should not be identified only through its shape or location (e.g., "the button on the bottom right", or "the round button")

## Automation

### Linting

Potentially automatable but in a limited fashion. It could be a little tricky, but perhaps a dictionary of shape and location phrases could be created, and strings of text could be compared against that dictionary.

### Testing

Potentially automatable but in a limited fashion.

### Developer Authored Test

Developers should educate themselves about this rule, and avoid it while creating code.

### Manual Test

Review page and ensure the point of failure does not exist, inspecting the DOM where required.
