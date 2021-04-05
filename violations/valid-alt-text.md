---
title: Valid Alt Text
tags:
  - wcag-1-1-1
  - wcag-1-2-1
linting: exists
testing: couldexist
author: couldexist
manual: shouldexist
---

## Point of Failure
Alt text should not contain filenames or placeholder text

## Automation

### Linting
Ember Template Lint: [require-valid-alt-text](https://github.com/ember-template-lint/ember-template-lint/blob/master/docs/rule/require-valid-alt-text.md)

### Testing
Potentially Automatable. Review require-valid-alt-text linting rule and adapt for testing.

### Developer Authored Test
The developer should ensure that they do not use filenames or placeholder text for alt attribute values. A test should be written to ensure that the code does not regress if changed.

### Manual Test
Observe if there are images on the page. If there are, inspect the DOM and ensure that the alt text does not contain filenames or placeholder text.