---
title: Malformed structural markup
tags: 
  - wcag-1-3-1
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
Structural markup should not be used in a way that does not represent relationships in the content.

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>
Potentially automatable to some extent. Identify specifics of structural content and write linting rules that ensure the content is appropriate.

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>
See above

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>
(Learn HTML, use HTML validators)

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>
Run the page's markup through an HTML validator.


<TagLinks />
