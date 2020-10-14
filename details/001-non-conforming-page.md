---
title: Non-Conforming Alternative
tags: WCAG 1, Failure 19
linting: cannotexist 
testing: couldexist
author: couldexist
manual: exists
id: 001
---

## Point of Failure 
If a page is non-conformant, it should provide a link at the beginning of the page that points to a conforming alternative version. 

## Automation

### Linting
It is not possible to lint for this error at this time.

### Testing
Test to write: If accessibility issues are found on the page, check for a link at the beginning of the page (since this could be a link to a conforming alternative).

### Developer Authored Testing
If the developer knows the page will be non-conformant, a link should be added to a conforming alternative, and a test should be added to prevent regression.

### Manual Testing
Review page for conformance. If non-conformant, check to see if the beginning of the page has a link to a conforming alternate version.