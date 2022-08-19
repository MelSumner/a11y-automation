---
title: Hoverable Content Is Unusable
tags: 
  - wcag-1-4-13
  - failure-95
linting: cannotexist
testing: cannotexist
author: shouldexist
manual: mustexist
---

## Point of Failure

Content that is shown on hover or focus should be dismissible, not disappear when the mouse moves between the hoverable item and the content that appears, and should persist for the user. See [Failure 95](https://www.w3.org/WAI/WCAG21/Techniques/failures/F95) for examples.

## Automation

### Linting

Cannot Exist Yet. If you an idea about how this could be linted in an automated fashion, or are aware of an automated linting rule that already exists, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Testing

Cannot Exist Yet. If you an idea about how this could be tested in an automated fashion, or are aware of an automated test that already exists, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Developer Authored Test

Developers should try out the content they make available on hover or focus. How easy is it to use? Can it be dismissed with the ESC key? Is it easy to keep open while moving the mouse from the trigger and the content that is shown?

### Manual Test

Review page and ensure the point of failure does not exist, inspecting the DOM where required.
