---
title: Text for Buttons and Links
tags: 
  - wcag-1-3-1
linting: exists
testing: couldexist
author: couldexist
manual: shouldexist
---

## Point of Failure
Buttons and links should not use "more" as the text 

## Automation

### Linting
See `ember-template-lint` for the `no-invalid-link-text` rule.

### Testing
Potentially automatable. Review the linting rule and adapt for test suite.

### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Check the page for the presence of links or buttons that have "more", "read more", or similarly not meaningful text.