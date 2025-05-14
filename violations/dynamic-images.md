---
title: Missing image dynamic alt attribute
tags: 
  - wcag-1-1-1
  - wcag-4-1-2
linting: couldexist
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

If an image is updated dynamically, the `alt` attribute value must be updated as well.

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>

It's possible that a linting rule could be created for this potential failure.

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>

How could you determine that an image was being updated dynamically?

If you have any thoughts on how to solve this problem, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>

If the developer knows that images will be updated dynamically, write a test to ensure that the alt text is also updated dynamically.

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>

Observe the page and see if any images are being updated dynamically. If they are, inspect each one to ensure that the `alt` attribute values are being updated as well.


<TagLinks />
