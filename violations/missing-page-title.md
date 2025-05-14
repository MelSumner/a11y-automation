---
title: Missing page title
tags:
  - wcag-2-4-2
linting: exists
testing: exists
author: couldexist
manual: couldexist
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

If a page does not have a page title, then it would fail Success Criterion 2.4.2, which requires each page to have a title.

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>

Potentially automatable, but a non-priority for two reasons: first, there is a test available. Second, the benefit of a JS framework is that a page or app-level template is used which typically contains the meta info, including the title element. It is not typical for a developer to change this file nor is it typical for a linter to check this file.

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>

Automated testing exists. See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `document-title` rule.

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>

Developers should ensure that their app does not violate this rule by integrating accessibility testing into their app or CI workflow.

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>

Review page and ensure that there is a page title, and that the page title is meaningful to the page/url.


<TagLinks />
