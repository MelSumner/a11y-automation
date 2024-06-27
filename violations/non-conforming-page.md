---
title: Missing non-conforming alternative
tags: 
  - wcag-1-1-1
linting: cannotexist 
testing: couldexist
author: couldexist
manual: mustexist
---

## Point of Failure

If a page is non-conformant, it should provide a link at the beginning of the page that points to a conforming alternative version.

## Automation

### Linting

It is not possible to lint for this error at this time; component templates are not differentiated from page templates.

### Testing

Potentially Automatable: If accessibility issues are found on the page, check for a link at the beginning of the page (since this could be a link to a conforming alternative).

### Developer Authored Testing

If the developer knows the page will be non-conformant, a link should be added to a conforming alternative, and a test should be added to prevent regression.

### Manual Testing

Manual testing for this item must exist, because there is no bullet-proof way to automate a test for this item.
To manually test: Review page for conformance. If non-conformant, check to see if the beginning of the page has a link to a conforming alternate version.
