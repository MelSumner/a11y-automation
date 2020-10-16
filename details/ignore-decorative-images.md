---
title: Ignore Decorative Images
tags: 
  - wcag-1-1-1
  - failure-38
linting: exists 
testing: cannotExist
author: couldExist
manual: mustExist
---
## Point of Failure
Decorative images should be marked up in a way that allows assistive tech to ignore them

## Automation

### Linting
Can be linted in a limited way- if the `alt` attribute is empty, check for `role="presentation"` or `role="none"`, and vice versa. 

### Testing

### Developer Authored Test
Developers should ensure that decorative images are marked with the role of presentation or none. A test should be written to ensure that a regression is not introduced if the code is changed.

### Manual Test
Must exist because there is no complete way to ensure that decorative images are marked properly. Review the page and identify any decorative images. If any are found, inspect the DOM and ensure that the alt attribute is present and blank, and that the image has the role of presentation or none. 