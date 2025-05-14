---
title: Incorrect page title
tags:
    - failure-25
    - wcag-2-4-2
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
This describes a failure condition when the Web page has a title, but the title does not identify the contents or purpose of the Web page.

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>
Cannot exist yet; there is no current known method to determine whether or not a page's title accurately describes the page's content or purpose. 

If you an idea about how this could be linted in an automated fashion, or are aware of an automated linting rule that already exists, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>
It does not seem possible to have an automated test for this potential failure, yet. 

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>
Cannot exist yet; as such, it is recommended to be a part of regular manual analysis.

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>
Review page and ensure the point of failure does not exist, inspecting the DOM where required.



<TagLinks />
