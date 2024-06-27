---
title: Missing bypass block
tags:
  - wcag-2-4-1
linting: couldexist
testing: exists
author: couldexist
manual: couldexist
---

## Point of Failure

If there is no mechanism to skip blocks of content that is repeated on multiple pages within a website/app, then it fails this Success Criterion.

This is known as a bypass block or skip link.

## Automation

### Linting

Potentially automatable, but a non-priority for two reasons: first, there is a test available. Second, the benefit of a JS framework is that a page or app-level template is used which typically contains the markup for the reusable elements of the page.

### Testing

Automated testing exists. See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `bypass` rule.

### Developer Authored Test

Developers should ensure that their code includes a bypass (aka skip link); sometimes this is managed in the application routing solution, and other times it is managed separately. If managing this manually, then developers should ensure that there's a test, that way the code doesn't regress when it is inevitably changed at a later date.

### Manual Test

Visit each page of the application, and press the TAB key when the page loads. Observe whether or not there is a bypass link, allowing the user to skip to the primary page content.
