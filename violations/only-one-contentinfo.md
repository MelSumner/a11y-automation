---
title: Only One Contentinfo Landmark
tags: 
- wcag-1-3-1
linting: cannotexist
testing: couldexist
author: couldexist
manual: mustexist
---

## Point of Failure
There should not be more than one contentinfo landmark.

## Automation

### Linting
Cannot exist yet.

### Testing
Potentially Automatable. Test the page for the presence of the contentinfo landmark and ensure that there is only one.

### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.