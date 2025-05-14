---
title: Faux Lists
tags: 
  - wcag-1-3-1
linting: cannotexist
testing: exists
author: shouldexist
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
Lists should use the HTML list (ul/li, ol/li).

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>
How could we programmatically determine that it is a list without the required markup? If you have any ideas about how this could be done, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>
See `axe-core` library for the `listitem` rule.

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>
Do not put lists in anything other than ul/ol elements. Write tests that ensure that if the code is changed, regressions are not introduced.

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>
Review the page for lists. Inspect the DOM and ensure that the appropriate markup is used.


<TagLinks />