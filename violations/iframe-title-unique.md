---
title: Missing iframe title uniqueness
tags:
  - wcag-2-4-1
  - wcag-4-1-2
linting: couldexist
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

If there are multiple iframe elements on the page, they should each have a unique title.

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>

Potentially automatable, but the test covers it rather well.

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>

See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `frame-title-unique` rule.

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>

Developers should try to not use iframes in general; if you must, then ensure that the code does not violate this rule. Write a test to check for this if you do not use any form of automated accessibility testing.

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>

Review page and ensure the point of failure does not exist, inspecting the DOM where required.


<TagLinks />
