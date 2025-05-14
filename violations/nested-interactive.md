---
title: Nested interactive elements
tags:
  - wcag-4-1-2
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

# Potential A11y Violation:<br/>{{ $frontmatter.title }}

## Point of Failure

Interactive elements must not have focusable descendants. Example: if there's a link inside of a button, it will be ignored by assistive technology; all child elements of buttons are considered presentational (per the spec).

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>

Automated linting exists in some JS frameworks:

* Ember: See the [`ember-template-lint`](https://github.com/ember-template-lint/ember-template-lint) library for the `no-nested-interactive` rule.

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>

Automated testing exists. See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `nested-interactive` rule.

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>

Developers should ensure that their code does not violate this rule. If using a linter or automated testing library is not possible, then write a test to ensure that the code throws an error if this potential violation occurs.

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>

Review page and ensure the point of failure does not exist, inspecting the DOM where required.


<TagLinks />
