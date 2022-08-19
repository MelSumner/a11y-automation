---
title: Text in Background Images
tags: 
  - wcag-1-1-1
linting: cannotexist 
testing: cannotexist
author: cannotexist
manual: mustexist
---

## Point of Failure

Images of text should not be used as background images.

## Automation

### Linting

Cannot exist yet. How would you be able to programmatically determine that there is a background image, and that the image has meaningful text in it?

### Testing

Cannot exist yet. How would you be able to programmatically determine that there is a background image, and that the image has meaningful text in it?

### Developer Authored Testing

Developers should manually review image files provided for them, and not use background images if they contain text.

### Manual Testing

Must exist. Review page for images; if images contain text, inspect the DOM to see if the image has been placed as a background image for an element.
