---
title: Missing heading text
tags:
  - wcag-1-3-1
  - wcag-2-4-6
linting: exists
testing: exists
author: couldexist
manual: couldexist
---

## Point of Failure

Every heading element (h1-h6) should contain meaningful content. Empty heading elements will cause a violation of the associated WCAG Success Criteria.

## Automation

### Linting

Automated linting exists in some JS frameworks:

* Ember: See the [`ember-template-lint`](https://github.com/ember-template-lint/ember-template-lint) library for the `no-empty-headings` rule.
* Lit: See the [`eslint-plugin-lit-a11y`](https://github.com/open-wc/open-wc/blob/master/docs/docs/linting/eslint-plugin-lit-a11y/) library for the `heading-has-content` rule.
* React (JSX): See the [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) library for the `heading-has-content` rule.
* Vue: See the [`eslint-plugin-vuejs-accessibility`](https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility) library for the `heading-has-content` rule.

### Testing

Automated testing exists. See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `empty-heading` rule.

### Developer Authored Test

Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed. Alternatively, integration of automated accessibility tests would also prevent violation of the related Success Criteria.

### Manual Test

Review page and ensure the point of failure does not exist, inspecting the DOM where necessary.
