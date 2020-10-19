---
title: Single Main Landmark
tags: 
  - wgac-1-1-1
linting: cannotexist
testing: exists
author: couldexist
manual: exists
---

## Point of Failure
A document should not have more than one `main` landmark.

## Automation

### Linting
Cannot exist yet. We would need a way to identify that a specific template was a "page" template, and that it was the primary page template for the site.

### Testing
See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `landmark-no-duplicate-main` rule.

### Developer Authored Test
TBD

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.