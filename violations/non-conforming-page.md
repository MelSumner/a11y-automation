---
title: Missing non-conforming alternative
tags: 
  - wcag-1-1-1
linting: cannotexist 
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

If a page is non-conformant, it should provide a link at the beginning of the page that points to a conforming alternative version.

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>

It is not possible to lint for this error at this time; component templates are not differentiated from page templates.

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>

Potentially Automatable: If accessibility issues are found on the page, check for a link at the beginning of the page (since this could be a link to a conforming alternative).

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>ing

If the developer knows the page will be non-conformant, a link should be added to a conforming alternative, and a test should be added to prevent regression.

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>ing

Manual testing for this item must exist, because there is no bullet-proof way to automate a test for this item.
To manually test: Review page for conformance. If non-conformant, check to see if the beginning of the page has a link to a conforming alternate version.


<TagLinks />
