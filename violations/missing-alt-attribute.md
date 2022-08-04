---
title: Missing Alt Attribute
tags: 
  - wcag-1-1-1
  - failure-20
  - failure-38
  - failure-39
  - failure-65
  - failure-67
  - failure-71
linting: exists
testing: exists
author: couldexist
manual: exists
---

## Point of Failure

The `alt` attribute should not be missing on `<img>` elements, `<area>` elements, `<object>` elements, `<input type="image"/>` elements, or elements with the `role` of img (such as `<svg>`).

## Automation

Automation exists for this WCAG violation, so that's super helpful for us!

### Linting

These are the available linting rules for this violation:

* axe Accessibility Linter: [image-alt](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter#:~:text=html%2Dhas%2Dlang-,image%2Dalt,-input%2Dbutton%2Dname) (VS Code extension)
* Ember:  [require-valid-alt-text](https://github.com/ember-template-lint/ember-template-lint/blob/master/docs/rule/require-valid-alt-text.md)
* Lit: [alt-text (lit)](https://github.com/open-wc/open-wc/blob/master/docs/docs/linting/eslint-plugin-lit-a11y/rules/alt-text.md)
* React/JSX: [alt-text (jsx)](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md)

### Testing

The [axe-core testing library](https://github.com/dequelabs/axe-core) offers several separate rules to support testing for this WCAG violation:

* [object-alt](https://dequeuniversity.com/rules/axe/3.2/object-alt)
* [image-alt](https://dequeuniversity.com/rules/axe/3.2/image-alt)
* [input-image-alt](https://dequeuniversity.com/rules/axe/3.2/input-image-alt)
* [area-alt](https://dequeuniversity.com/rules/axe/3.2/area-alt)

### Manual Testing

If you are able to use the linting and testing libraries mentioned here, then you will need to manually test for this point of failure. Inspect the DOM, checking for the elements listed in the point of failure, and ensure that each have an `alt` attribute.
