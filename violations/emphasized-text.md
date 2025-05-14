---
title: Invalid visual emphasis through CSS
tags: 
  - wcag-1-3-1
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

CSS should not be used to visually emphasize a word or phrase without conveying that emphasis through semantic HTML.

### Okay To Do

```html
<p>We will <strong>require</strong> proof of ID.</p>
```

```html
<p class="text-bold">Page Title</p>
```

### Not Okay

```html
<p>We will <span class="text-bold">require</span> proof of ID.</p>
```

```html
<h1>Page Title</h1>
```

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>

Potentially automatable through a CSS linter. Ensure there are no classes that do the same thing the `<strong>` or `<em>` elements do.

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>

See `axe-core` library for `p-as-heading` rule.

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>

Developers should ensure that their code does not violate this rule.

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>

Inspect DOM where words have been given emphasis or boldness. Ensure that the appropriate HTML element has been used instead of CSS.


<TagLinks />
