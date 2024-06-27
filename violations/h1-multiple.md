---
title: Multiple H1 elements
tags:
  - wcag-2-4-6
  - best-practice
linting: cannotexist
testing: couldexist
author: couldexist
manual: mustexist
---

## Point of Failure
Generally, best practice is to have one `<h1>` and only one `<h1>` element on the page. This allows users with screen readers to find their way around the page in a logical manner.

## Automation

### Linting
Since templates are generally composed together to make a complete "page", a linting check for this violation cannot exist yet. If you an idea about how this could be linted in an automated fashion, or are aware of an automated linting rule that already exists, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Testing
Potentially Automatable.


### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.
