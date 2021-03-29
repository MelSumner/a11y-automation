---
title: Link Titles
tags:
  - wcag-2-4-4
  - html-33
linting: exists
testing: couldexist
author: shouldexist
manual: shouldexist
---

## Point of Failure
The <code>`title`</code> attribute is a useful way to give users extra context for a link. However, this content should be complementary content and should not be the exact same value as the link text.

## Automation

### Linting
Automated linting exists. See the [`ember-template-lint`](https://github.com/ember-template-lint/ember-template-lint) library for the [`no-invalid-link-title`](https://github.com/ember-template-lint/ember-template-lint/blob/master/docs/rule/no-invalid-link-title.md) rule.

### Testing
Potentially Automatable.

### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.
