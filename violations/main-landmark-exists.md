---
title: Missing main element
tags:
  - wcag-1-3-1
linting: cannotexist
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
Every page should have a `main` landmark element.

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>
We would need a way to identify that a specific template was a page-level template vs a component template.

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>
See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `page-has-main` rule.

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>
Developers should make sure that their code does not violate this rule, and try to write a test that would prevent a regression in accessibility if the code is later changed.

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>
Review page and ensure the point of failure does not exist, inspecting the DOM where required.


<TagLinks />
