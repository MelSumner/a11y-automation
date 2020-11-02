---
title: Required Attribute Use
tags: 
  - wcag-1-3-1
linting: couldexist
testing: couldexist
author: couldexist
manual: mustexist
---

## Point of Failure
Required `input` fields should use the HTML `required` attribute correctly 

## Automation

### Linting
Potentially automatable.  

### Testing
Potentially automatable. Check for presence of common required indicators and make sure the `required` attribute also exists.

### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Review input fields for common required indicators. Inspect the DOM to ensure that the `required` attribute is present on those fields.