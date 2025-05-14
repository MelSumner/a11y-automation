---
title: Invalid use of abstract role
tags:
  - wcag-1-3-1
linting: exists
testing: exists
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

Abstract roles should not be used.

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>

Automated linting exists in some JS frameworks:

* Ember: See the [`ember-template-lint`](https://github.com/ember-template-lint/ember-template-lint) library for the `no-abstract-roles` rule.
* Lit: See the [`eslint-plugin-lit-a11y`](https://github.com/open-wc/open-wc/blob/master/docs/docs/linting/eslint-plugin-lit-a11y/) library for the `aria-role` rule.
* React (JSX): See the [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) library for the `aria-role` rule.
* Vue: See the [`eslint-plugin-vuejs-accessibility`](https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility) library for the `aria-role` rule.

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>

See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the [`aria-allowed-role` rule](https://dequeuniversity.com/rules/axe/4.1/aria-allowed-role?application=RuleDescription).

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>

Developers should make sure that their code does not violate this rule, and try to write a test that would prevent a regression in accessibility if the code is later changed.

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>

Review page and ensure the point of failure does not exist, inspecting the DOM where required.

<TagLinks />
