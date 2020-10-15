---
title: ASCII Art Must Have Text Alternative
tags: WCAG 1.1.1
linting: cannotexist 
testing: cannotexist
author: couldexist
manual: mustexist
id: 008
---

## Point of Failure
ASCII art should not be used without providing a text alternative

## Automation

### Linting
There is no programmatic way to determine if something is ASCII art.

### Testing
There is no programmatic way to determine if something is ASCII art.

### Developer Authored Test
Developers should provide alt text if ASCII art is used.

### Manual Test
A manual test must exist. Review the page, and determine if ASCII art exists. If it does, inspect the DOM and look for an appropriate `alt` attribute.