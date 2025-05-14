---
title: Missing character shortcut controls
tags: 
  - failure-99
  - wcag-2-1-4
linting: couldexist
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

Character key shortcuts should not be implemented in such a way that they can not be turned off or remapped.

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>

It's possible that a linting rule could be created for this potential failure.

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>

It does not seem possible to have an automated test for this potential failure, yet. If you an idea about how this could be tested in an automated fashion, or are aware of an automated test that already exists, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>

Developers should ensure that any character key shortcuts can be turned off by the user, or remappable.

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>

Review page and ensure the point of failure does not exist, inspecting the DOM where required.


<TagLinks />
