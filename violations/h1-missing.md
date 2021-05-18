---
title: Missing H1 Element
tags:
  - wcag-2-4-6
  - best-practice
linting: cannotexist
testing: exists
author: couldexist
manual: exists
---

## Point of Failure
Each page should have an `<h1>` element.

## Automation

### Linting
Since templates are generally composed together to make a complete "page", a linting check for this violation cannot exist yet. If you an idea about how this could be linted in an automated fashion, or are aware of an automated linting rule that already exists, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Testing
Automated testing exists. See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `page-has-heading-one` rule.

Potentially Automatable.

Cannot Exist Yet. If you an idea about how this could be tested in an automated fashion, or are aware of an automated test that already exists, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.
