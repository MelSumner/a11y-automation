---
title: Invalid button/link text
tags: 
  - failure-84
  - wcag-1-3-1
linting: exists
testing: couldexist
author: couldexist
manual: shouldexist
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

Buttons and links should not use non-descriptive, non-unique words or phrases as the element's text content. Examples include "read more", "more", "read about it here", "click here". 

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>

See `ember-template-lint` for the `no-invalid-link-text` rule.

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>

It's possible that a check could be created for this potential failure. Review the linting rule and adapt for test suite.

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>

Developers should make sure that their code does not violate this rule, and try to write a test that would prevent a regression in accessibility if the code is later changed.

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>

Check the page for the presence of links or buttons that have "more", "read more", or similarly not meaningful text.


<TagLinks />