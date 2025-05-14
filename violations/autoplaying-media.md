---
title: Incorrect media element attribute (autoplay)
tags: 
  - wcag-1-4-2
  - failure-93
linting: couldexist
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

A media element that autoplays should have a way to pause or stop.

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>

Potentially automatable; check media elements for the `autoplay` attribute.

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>

Automated testing exists. See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `no-autoplay-audio` rule.

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>

Ideally, do not autoplay any media of any type. It is inconsiderate of users who may already have screen readers operating, or users who have noise sensitivity issues. Developers should make sure that their code does not violate this rule, and try to write a test that would prevent a regression in accessibility if the code is later changed.

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>

Review page and ensure the point of failure does not exist, inspecting the DOM where required.


<TagLinks />
