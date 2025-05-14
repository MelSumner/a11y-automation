---
title: Multiple H1 elements
tags:
  - wcag-2-4-6
  - best-practice
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
Generally, best practice is to have one `<h1>` and only one `<h1>` element on the page. This allows users with screen readers to find their way around the page in a logical manner.

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>
Since templates are generally composed together to make a complete "page", a linting check for this violation It does not seem possible to have an automated test for this potential failure, yet. If you an idea about how this could be linted in an automated fashion, or are aware of an automated linting rule that already exists, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>
It's possible that a linting rule could be created for this potential failure.


## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>
Developers should make sure that their code does not violate this rule, and try to write a test that would prevent a regression in accessibility if the code is later changed.

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>
Review page and ensure the point of failure does not exist, inspecting the DOM where required.


<TagLinks />
