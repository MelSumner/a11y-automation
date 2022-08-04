---
title: Non-text Content Missing Alt Attribute
tags: 
  - wcag-1-1-1
linting: exists
testing: exists
author: couldexist
manual: shouldexist
---
## Point of Failure

The `alt` attribute must be present for all  non-text content that is meaningful. For example, `img` elements should have meaningful text; if the image is purely decorative, the `alt` attribute should still be present, but have an empty value (e.g., `alt=""`).

## Automation

### Linting

* Ember:  [`require-valid-alt-text` rule](https://github.com/ember-template-lint/ember-template-lint/blob/master/docs/rule/require-valid-alt-text.md) in `ember-template-lint`.
* Lit: [`alt-text` rule](https://github.com/open-wc/open-wc/blob/master/docs/docs/linting/eslint-plugin-lit-a11y/rules/alt-text.md) in `eslint-plugin-lit-a11y`
* React/JSX: [`alt-text` rule](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md) in `eslint-plugin-jsx-a11y`.
* axe Accessibility Linter: [`image-alt`](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter#:~:text=html%2Dhas%2Dlang-,image%2Dalt,-input%2Dbutton%2Dname) (VS Code extension)

### Testing

The [axe-core testing library](https://github.com/dequelabs/axe-core) offers several rules to support this WCAG violation.

* [axe-core, object-alt](https://dequeuniversity.com/rules/axe/3.2/object-alt)
* [axe-core, image-alt](https://dequeuniversity.com/rules/axe/3.2/image-alt)
* [axe-core, input-image-alt](https://dequeuniversity.com/rules/axe/3.2/input-image-alt)
* [axe-core, area-alt](https://dequeuniversity.com/rules/axe/3.2/area-alt)

### Developer Authored Test

Ensure that presentational images have an empty `alt` attribute. Write a test to ensure the code does not regress if changed.

### Manual Test

Must exist because we cannot lint dynamic content in a template. Review the page for decorative images. Inspect the DOM to see if `role` attribute has the value of `presentation` or `none`. If so, ensure that the `alt` attribute is present and that it is blank.
