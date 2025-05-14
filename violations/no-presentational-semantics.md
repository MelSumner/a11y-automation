---
title: Invalid semantic element role
tags: 
  - wcag-1-3-1
linting: exists
testing: couldexist
author: couldexist
manual: exists
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

The `role="presentation"` or `"none"` should not be used on content that conveys semantic information.

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>

See the `ember-template-lint` library for the `no-invalid-role` rule.

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>

It's possible that a check could be created for this potential failure. Review linting rule and adapt rule for test suite.

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>

Developers should make sure that their code does not violate this rule, and try to write a test that would prevent a regression in accessibility if the code is later changed.

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>

Inspect DOM. Ensure that semantic html elements do not have `role` of presentation or none.


<TagLinks />
