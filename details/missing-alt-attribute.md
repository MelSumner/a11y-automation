---
title: Missing Alt Attribute
tags: 
  - wcag-1-1-1
linting: exists
testing: exists
author: couldexist
manual: exists
---

## Point of Failure
The `alt` attribute should not be missing on `<img>` elements, `<area>` elements, `<object>` elements, `<input type="image"/>` elements, or elements with the `role` of img (such as `<svg>`).

## Automation

### Linting
See the [`ember-template-lint`](https://github.com/ember-template-lint/ember-template-lint) library for the `require-valid-alt` rule.

### Testing
See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `role-img-alt`, `input-image-alt`, `image-alt rules`.

### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.