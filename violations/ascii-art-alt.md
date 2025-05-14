---
title: Missing ASCII art text alternative
tags: 
  - failure-72
  - wcag-1-1-1
linting: cannotexist 
testing: cannotexist
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

ASCII art should not be used without providing a text alternative.

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>

There is no programmatic way to determine if something is ASCII art. It does not seem possible to have an automated test for this potential failure, yet. If you think it can, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>

There is no programmatic way to determine if something is ASCII art, so it does not seem possible to have an automated test for this potential failure, yet. If you think it can, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>

Developers should provide alternative text if ASCII art is used, and write a test to ensure that this code does not regress if changed.

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>

A manual test must exist. Review the page, and determine if ASCII art exists. If it does, inspect the DOM and look for an appropriate `alt` attribute.


<TagLinks />