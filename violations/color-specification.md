---
title: Missing color/background-color property specification
tags: 
  - wcag-1-4-3
  - wcag-1-4-6
  - wcag-1-4-8
  - failure-24
linting: couldexist
testing: couldexist
author: shouldexist
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

If the `color` property is specified; the `background-color` must also be specified, and vice-versa.

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>

Potentially Automatable with CSS linting.

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>

It's possible that a check could be created for this potential failure.

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>

Ideally, developers can train themselves to always declare a color and a background color in their CSS.

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>

Review page and ensure the point of failure does not exist, inspecting the DOM where required.


<TagLinks />
