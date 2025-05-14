---
title: Insufficient color contrast
tags: 
  - wcag-1-4-3
linting: couldexist
testing: exists
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

Text (or images of text, but don't do that) must have sufficient color contrast (4.5:1). If they do not, they fail this Success Criterion.

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>

Potentially Automatable with a CSS linter, but this is more likely to be something that should be checked as a test; even more ideally, this should be determined in the design phase.

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>

Automated testing exists. See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `color-contrast` rule.

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>

Developers should ensure that their code does not violate this rule; if a lack of color contrast is noted, have a chat with the designer! "I noticed that this text fails WCAG color contrast standards for text; is there something we can do to improve this?"

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>

Review page and ensure the point of failure does not exist, inspecting the DOM where required.


<TagLinks />
