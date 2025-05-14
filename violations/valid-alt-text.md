---
title: Invalid 'alt' attribute value
tags:
  - wcag-1-1-1
  - wcag-1-2-1
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

The 'alt' attribute value should not contain filenames or placeholder text.

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>

Ember Template Lint: [require-valid-alt-text](https://github.com/ember-template-lint/ember-template-lint/blob/master/docs/rule/require-valid-alt-text.md)

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>

It's possible that a check could be created for this potential failure. Review require-valid-alt-text linting rule and adapt for testing.

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>

The developer should ensure that they do not use filenames or placeholder text for alt attribute values. A test should be written to ensure that the code does not regress if changed.

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>

Observe if there are images on the page. If there are, inspect the DOM and ensure that the alt attribute value does not contain filenames or placeholder text.


<TagLinks />
