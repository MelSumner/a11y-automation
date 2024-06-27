---
title: Missing link text (ACCNAME)
tags:
  - wcag-2-4-4
  - wcag-4-1-2
linting: exists
testing: exists
author: couldexist
manual: exists
---

## Point of Failure
All links should have an accessible name/discernible text

## Automation

### Linting
Automated linting exists. See the [`ember-template-lint`](https://github.com/ember-template-lint/ember-template-lint) library for the `no-invalid-link-text` rule.

See [axe Accessibility Linter](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter): For the [link-name](https://dequeuniversity.com/rules/axe/4.1/link-name) rule.


### Testing
Automated testing exists. See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `link-name` rule.

### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.
