---
title: Using th in Layout Tables
tags: 
  - wcag-1-3-1
linting: couldexist
testing: couldexist
author: couldexist
manual: mustexist
---

## Point of Failure
Tables should not be used for layout at all. Many modern solutions exist, such as flexbox or grid in CSS.However, legacy code may need to be maintained but not updated; it still must meet accessibility criteria. In these cases, the `<th>` element should not be used in layout tables (tables marked with `role="presentation"` or `role="none"`).

## Automation

### Linting
Potentially Automatable.

### Testing
Potentially Automatable.

### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.