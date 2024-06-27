---
title: Malformed image markup for decorative images
tags: 
  - wcag-1-1-1
linting: exists 
testing: cannotexist
author: couldexist
manual: mustexist
---
## Point of Failure
Decorative images should be marked up in a way that allows assistive tech to ignore them

## Automation

### Linting
Can be linted in a limited way- if the `alt` attribute is empty, check for `role="presentation"` or `role="none"`, and vice versa. See Ember Template Lint rule [require-valid-alt-text](https://github.com/ember-template-lint/ember-template-lint/blob/master/docs/rule/require-valid-alt-text.md).

### Testing
Potentially automatable. Adapt linting rule for testing.

### Developer Authored Test
Developers should ensure that decorative images are marked with the role of presentation or none. A test should be written to ensure that a regression is not introduced if the code is changed.

### Manual Test
Must exist because there is no complete way to ensure that decorative images are marked properly. Review the page and identify any decorative images. If any are found, inspect the DOM and ensure that the alt attribute is present and blank, and that the image has the role of presentation or none. 