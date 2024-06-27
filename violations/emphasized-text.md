---
title: Invalid visual emphasis through CSS
tags: 
  - wcag-1-3-1
linting: couldexist
testing: exists
author: couldexist
manual: exists
---

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

## Automation

### Linting

Potentially automatable through a CSS linter. Ensure there are no classes that do the same thing the `<strong>` or `<em>` elements do.

### Testing

See `axe-core` library for `p-as-heading` rule.

### Developer Authored Test

Developers should ensure that their code does not violate this rule.

### Manual Test

Inspect DOM where words have been given emphasis or boldness. Ensure that the appropriate HTML element has been used instead of CSS.
