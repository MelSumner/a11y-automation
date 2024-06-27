---
title: Disappearing content on smaller viewports
tags: 
  - wcag-1-4-10
  - failure-102
linting: cannotexist
testing: cannotexist
author: shouldexist
manual: mustexist
---

## Point of Failure

A change of the viewport width to 320px should not make content disappear that was available at wider viewport widths. Some content available at wider widths may not be shown in the same way or at the same position at the viewport width of 320px, simply because there is less space (screen 'real estate') to display it. This content, however, should still be available after reflow to 320px viewport width, either by being repositioned in a single column view, or through some interaction offering the information in some other way, for example, in a disclosure area, a dialog, or via a link to another view.

## Automation

### Linting

Cannot Exist Yet. If you think it can, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Testing

Cannot Exist Yet. If you think it can, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Developer Authored Test

Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test

Review page and ensure the point of failure does not exist, inspecting the DOM where required.
