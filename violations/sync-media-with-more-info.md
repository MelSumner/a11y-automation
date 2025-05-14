---
title: Missing synchronized media captions
tags: 
  - wcag-1-2-2
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
Synchronized media that provides more information than is presented in text on the page should have captions.

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>
It does not seem possible to have an automated test for this potential failure, yet.

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>
It does not seem possible to have an automated test for this potential failure, yet.

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>
Developers should make sure that their code does not violate this rule, and try to write a test that would prevent a regression in accessibility if the code is later changed.

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>
Review media. If more information is presented in the media than is presented in the text on the page, ensure the media has captions.


<TagLinks />
