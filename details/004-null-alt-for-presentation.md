---
title: Null Alt Text for Presentation
tags: WCAG 1.1.1
# exists, couldExist, cannotExist
linting: exists
testing: couldExist
author: couldExist
manual: mustexist
id: 004
---
## Point of Failure
The `alt` attribute must be null for any image that should be ignored by assistive tech

## Automation

### Linting
We can lint to see if images have the role of presentation or none, and then check to ensure that the alt attribute is both present and empty.

### Testing
Potentially Automatable: check for presence of role of presentation or none on image elements. Then look for alt attributes and ensure they are empty. 

### Developer Authored Test
Ensure that presentational images have an empty `alt` attribute. Write a test to ensure the code does not regress if changed. 

### Manual Test
Must exist because we cannot lint dynamic content in a template. Review the page for decorative images. Inspect the DOM to see if `role` attribute has the value of `presentation` or `none`. If so, ensure that the `alt` attribute is present and that it is blank.