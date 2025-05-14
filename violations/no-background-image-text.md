---
title: Invalid background image
tags: 
  - wcag-1-1-1
linting: cannotexist 
testing: cannotexist
author: cannotexist
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

Images of text should not be used as background images.

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>

It does not seem possible to have an automated test for this potential failure, yet. How would you be able to programmatically determine that there is a background image, and that the image has meaningful text in it?

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>

It does not seem possible to have an automated test for this potential failure, yet. How would you be able to programmatically determine that there is a background image, and that the image has meaningful text in it?

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>ing

Developers should manually review image files provided for them, and not use background images if they contain text.

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>ing

Must exist. Review page for images; if images contain text, inspect the DOM to see if the image has been placed as a background image for an element.


<TagLinks />
