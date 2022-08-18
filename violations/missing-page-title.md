---
title: Missing Page Title
tags:
  - wcag-2-4-2
linting: exists
testing: exists
author: couldexist
manual: couldexist
---

## Point of Failure

If a page does not have a page title, then it would fail Success Criterion 2.4.2, which requires each page to have a title.

## Automation

### Linting

Automated linting exists in some JS frameworks:

Potentially automatable, but a non-priority for two reasons: first, there is a test available. Second, the benefit of a JS framework is that a page or app-level template is used which typically contains the meta info, including the title element. It is not typical for a developer to change this file nor is it typical for a linter to check this file.

### Testing

Automated testing exists. See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `document-title` rule.

### Developer Authored Test

Developers should ensure that their app does not violate this rule by integrating accessibility testing into their app or CI workflow.

### Manual Test

Review page and ensure that there is a page title, and that the page title is meaningful to the page/url.
