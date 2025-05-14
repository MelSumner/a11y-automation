---
title: Incorrect element identifiers (shape/location)
tags: 
  - failure-14
  - wcag-1-3-3
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

Content should not be identified only through its shape or location (e.g., "the button on the bottom right", or "the round button")

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>

Potentially automatable but in a limited fashion. It could be a little tricky, but perhaps a dictionary of shape and location phrases could be created, and strings of text could be compared against that dictionary.

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>

Potentially automatable but in a limited fashion.

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>

Developers should educate themselves about this rule, and avoid it while creating code.

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>

Review page and ensure the point of failure does not exist, inspecting the DOM where required.


<TagLinks />
