---
title: Invalid interactive elements
tags:
  - wcag-1-3-1
  - wcag-4-1-2
linting: exists
testing: exists
author: couldexist
manual: shouldexist
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

# Potential A11y Violation:<br/>{{ $frontmatter.title }}

## Point of Failure

There are only certain elements that are eligible to receive interactions (and focus), and these are specified by the HTML specification. Specifically, name and role must be able to be programmatically determined.

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>

Automated linting exists in some JS frameworks:

* Ember: See the [`ember-template-lint`](https://github.com/ember-template-lint/ember-template-lint) library for the `no-invalid-interactive` rule.
* React (JSX): See the [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) library for the `no-noninteractive-element-interactions` rule.

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>

Automated testing exists. See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `focus-order-semantics` rule.

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>

Developers should ensure that their code does not violate this rule by using the native HTML element appropriate for the interaction. Alternatively, using the correct role and associated keyboard support and HTML attributes would suffice.

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>

Review interactive elements on the page and ensure the point of failure does not exist, inspecting the DOM where required.


<TagLinks />
