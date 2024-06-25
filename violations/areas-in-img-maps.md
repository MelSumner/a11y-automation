---
title: Missing `area` attribute (`alt`)
tags:
  - wcag-1-1-1
  - wcag-2-4-4
  - wcag-4-1-2
linting: exists
testing: couldexist
author: couldexist
manual: exists
---

## Point of Failure

The `<area>` elements of image maps that are active should have `alt` attributes with valid values.

## Automation

### Linting

See Ember Template Lint: [require-valid-alt-text](https://github.com/ember-template-lint/ember-template-lint/blob/master/docs/rule/require-valid-alt-text.md).

See [axe Accessibility Linter](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter): For the [aria-alt](https://dequeuniversity.com/rules/axe/4.1/area-alt) rule.

### Testing

Potentially Automatable. Review linting equivalent and adapt for testing suite.

### Developer Authored Test

Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test

Inspect DOM. If image maps exist, ensure that active `<area>` elements have valid `alt` attributes.
