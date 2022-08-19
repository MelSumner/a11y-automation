---
title: Color Differences in Alt Text
tags: 
  - failure-13
  - wcag-1-1-1
  - wcag-1-4-1
linting: couldexist
testing: couldexist
author: couldexist
manual: mustexist
---

## Point of Failure

The `alt` attribute value should not include information conveyed by color differences (e.g., "click the red button to submit the form")

## Automation

### Linting

Potentially Automatable. Parse `alt` attribute value and determine whether or not it uses any color words.

### Testing

Potentially Automatable. Parse `alt` attribute value and determine whether or not it uses any color words.

### Developer Authored Test

Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test

While inspecting `alt` attribute values, ensure that no information is included that conveys color differences.
