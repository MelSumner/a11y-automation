---
title: Invalid Interactive Elements
tags:
  - wcag-1-3-1
  - wcag-4-1-2
linting: exists
testing: exists
author: couldexist
manual: shouldexist
---

## Point of Failure

There are only certain elements that are eligibile to receive interactions (and focus), and these are specified by the HTML specification. Specifically, name and role must be able to be programmatically determined.

## Automation

### Linting

Automated linting exists in some JS frameworks:

* Ember: See the [`ember-template-lint`](https://github.com/ember-template-lint/ember-template-lint) library for the `no-invalid-interactive` rule.
* React (JSX): See the [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) library for the `no-noninteractive-element-interactions` rule.

### Testing

Automated testing exists. See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `focus-order-semantics` rule.

### Developer Authored Test

Developers should ensure that their code does not violate this rule by using the native HTML element appropriate for the interaction. Alternatively, using the correct role and associated keyboard support and HTML attributes would suffice.

### Manual Test

Review interactive elements on the page and ensure the point of failure does not exist, inspecting the DOM where required.
