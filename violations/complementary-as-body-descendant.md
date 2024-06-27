---
title: Misplaced complementary landmark
tags: 
  - wcag-1-3-1
linting: cannotexist
testing: exists
author: couldexist
manual: exists
---

## Point of Failure

The complementary landmark (aside) should be a direct descendant of the body element.

## Automation

### Linting

Cannot Exist Yet. If you think it can, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Testing

See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `landmark-complementary-is-top-level` rule.

### Developer Authored Test

Take a little time to evaluate the whole page. Is there an element with the role of complementary that is not the direct descendant of the body element? Can you write a test to prevent this in the future?

### Manual Test

Review page and ensure the point of failure does not exist, inspecting the DOM where required.
