---
title: Caption Elements in Layout Tables
tags: 
  - failure-46
  - wcag-1-3-1
linting: couldexist
testing: couldexist
author: couldexist
manual: mustexist
---

## Point of Failure

Tables should not be used for layout at all. Many modern solutions exist, such as flexbox or grid in CSS. However, there are cases where legacy code may need to be maintained but not updated; it still must meet accessibility criteria. In these cases, the `<caption>` element should not be used in layout tables (tables marked with `role="presentation"` or `role="none"`).

## Automation

### Linting

Potentially automatable. Look for table elements with the role of presentation or none, and ensure that they do not contain the caption element.

### Testing

Potentially automatable. Look for table elements with the role of presentation or none, and ensure that they do not contain the caption element.

### Developer Authored Test

Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test

Review page and ensure the point of failure does not exist, inspecting the DOM where required.
