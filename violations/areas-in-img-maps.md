---
title: Missing `alt` attribute in `area` element
tags:
  - wcag-1-1-1
  - wcag-2-4-4
  - wcag-4-1-2
linting: exists
testing: couldexist
author: couldexist
manual: exists
---
<script setup>
  const normalize = (value) => {
    const v = (value || '').toLowerCase()
    if (v === 'exists') return 'Exists'
    if (v === 'couldexist') return 'Could Exist'
    if (v === 'cannotexist') return 'Cannot Exist'
    if (v === 'shouldexist') return 'Should Exist'
    if (v === 'mustexist') return 'Must Exist'
    return '—'
  }
</script>

# Potential Violation: <br/> {{ $frontmatter.title }}

## Point of Failure

The `<area>` elements of image maps that are active should have `alt` attributes with valid values.

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>

See Ember Template Lint: [require-valid-alt-text](https://github.com/ember-template-lint/ember-template-lint/blob/master/docs/rule/require-valid-alt-text.md).

See [axe Accessibility Linter](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter): For the [aria-alt](https://dequeuniversity.com/rules/axe/4.1/area-alt) rule.

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>

It's possible that a check could be created for this potential failure. Review linting equivalent and adapt for testing suite.

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>

Developers should make sure that their code does not violate this rule, and try to write a test that would prevent a regression in accessibility if the code is later changed.

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>

Inspect DOM. If image maps exist, ensure that active `<area>` elements have valid `alt` attributes.


<TagLinks />