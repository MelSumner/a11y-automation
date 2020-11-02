---
title: Faux Lists
tags: 
  - wcag-1-3-1
linting: cannotexist
testing: exists
author: shouldexist
manual: shouldexist
---

## Point of Failure
Lists should use the HTML list (ul/li, ol/li).

## Automation

### Linting
How could we programmatically determine that it is a list without the required markup? If you have any ideas about how this could be done, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Testing
See `axe-core` library for the `listitem` rule.

### Developer Authored Test
Do not put lists in anything other than ul/ol elements. Write tests that ensure that if the code is changed, regressions are not introduced.

### Manual Test
Review the page for lists. Inspect the DOM and ensure that the appropriate markup is used.