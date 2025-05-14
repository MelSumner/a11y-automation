---
title: Reflow & Disappearing Content
tags: 
  - wcag-1-4-10
  - failure-102
linting: cannotexist
testing: cannotexist
author: shouldexist
manual: mustexist
editLink: true
lastUpdated: true
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

A change of the viewport width to 320px should not make content disappear that was available at wider viewport widths. Some content available at wider widths may not be shown in the same way or at the same position at the viewport width of 320px, simply because there is less space (screen 'real estate') to display it.

This content, however, should still be available after reflow to 320px viewport width, either by being repositioned in a single column view, or through some interaction offering the information in some other way, for example, in a disclosure area, a dialog, or via a link to another view.

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>

It does not seem possible to have an automated test for this potential failure, yet. If you think it can, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>

It does not seem possible to have an automated test for this potential failure, yet. If you think it can, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>

Developers should ensure that their code does not violate this rule, and may write a test that prevents regressions in code if it is later changed.

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>

Use browser zoom and ensure that all of the content is still available. None of the content should be clipped or otherwise hidden.


<TagLinks />

