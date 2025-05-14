---
title: Invalid use of text-decoration
tags:
  - wcag-2-2-2
  - failure-4
linting: couldexist
testing: couldexist
author: couldexist
manual: mustexist
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
The `text-decoration: blink` should not be used.

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>
It's possible that a linting rule could be created for this potential failure.

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>
It's possible that a linting rule could be created for this potential failure.

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>
Developers should make sure that their code does not violate this rule, and try to write a test that would prevent a regression in accessibility if the code is later changed.

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>
Review page and ensure the point of failure does not exist, inspecting the DOM where required.


<TagLinks />
