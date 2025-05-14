---
title: Malformed image markup for decorative images
tags: 
  - wcag-1-1-1
linting: exists 
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
Decorative images should be marked up in a way that allows assistive tech to ignore them

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>
Can be linted in a limited way- if the `alt` attribute is empty, check for `role="presentation"` or `role="none"`, and vice versa. See Ember Template Lint rule [require-valid-alt-text](https://github.com/ember-template-lint/ember-template-lint/blob/master/docs/rule/require-valid-alt-text.md).

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>
It's possible that a linting rule could be created for this potential failure. Adapt linting rule for testing.

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>
Developers should ensure that decorative images are marked with the role of presentation or none. A test should be written to ensure that a regression is not introduced if the code is changed.

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>
Must exist because there is no complete way to ensure that decorative images are marked properly. Review the page and identify any decorative images. If any are found, inspect the DOM and ensure that the alt attribute is present and blank, and that the image has the role of presentation or none. 


<TagLinks />
