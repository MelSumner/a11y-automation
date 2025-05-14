---
title: Incomplete captions
tags: 
  - failure-8
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

Captions should not exclude any of the dialog or description of important sounds.

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>

No current method exists to lint video or the quality of video captions, so this It does not seem possible to have an automated test for this potential failure, yet.

If you think it can, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>

Cannot exist yet; how could a machine determine this? No current method exists to test captions produced to accompany video. If you think it can, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>

Developers should consider whether or not they could write an app test for captions; if not, ensure that manual testing is completed.

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>

Watch video and ensure that captions do not exclude any dialog or descriptions of important sounds.


<TagLinks />