---
title: Unequal non-text content descriptions
tags: 
  - wcag-1-1-1
  - wcag-1-2-1
linting: cannotexist
testing: cannotexist
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

Long descriptions for non-text content should serve the same purpose and present the same information (not more or less)

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>

It does not seem possible to have an automated test for this potential failure, yet. How would we programmatically be able to not only identify what should be compared but also compare the two and determine that they are the same?

If you have any thoughts on how to solve this problem, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>

It does not seem possible to have an automated test for this potential failure, yet. How would we programmatically be able to not only identify what should be compared but also compare the two and determine that they are the same?

If you have any thoughts on how to solve this problem, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>

When adding long descriptions for non-text content, ensure that it presents the same information as is visible. Developers could even write a test that ensures the long description text is not changed.

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>

A manual test must exist. Observe if there is any non-text content on the page, and inspect the DOM for long descriptions. Ensure that they serve the same purpose and present the same information, not more or less.


<TagLinks />
