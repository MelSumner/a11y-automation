---
title: No Text in Background Images
id: 002
tags: WCAG 1.1.1
# exists, couldExist, cannotExist
lintingExists: cannotExist 
testingExists: cannotExist
devMustAuthor: cannotExist
manualTest: exists
---

## Point of Failure 
Images of text should not be used as background images. 

## Automation

### Linting
It is not possible to lint for this error at this time.

### Testing
It is not possible to provide automated testing for this error at this time.

### Developer Authored Testing
Developers should manually review image files provided for them, and not use background images if they contain text.

### Manual Testing
Review page for images. If images contain text, inspect the DOM to see if the image has been placed as a background image for an element.