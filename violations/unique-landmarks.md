---
title: Non-unique landmark elements
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

# Potential A11y Violation:<br/>{{ $frontmatter.title }}

## Point of Failure

Landmarks should be unique (if more than one of the same landmark on the page, a label/title should be provided for each)

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>

See `ember-template-lint` library for [`no-duplicate-landmark-elements`](https://github.com/ember-template-lint/ember-template-lint/blob/master/docs/rule/no-duplicate-landmark-elements.md) rule.

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>

See `axe-core` library for `landmark-unique` rule.

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>

Developers should make sure that their code does not violate this rule, and try to write a test that would prevent a regression in accessibility if the code is later changed.

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>

When inspecting the DOM, review for duplicate landmark elements. If there are duplicates, ensure that unique labels have been provided for each.


<TagLinks />
