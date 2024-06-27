---
title: Insufficient color contrast
tags: 
  - wcag-1-4-3
linting: couldexist
testing: exists
author: couldexist
manual: exists
---

## Point of Failure

Text (or images of text, but don't do that) must have sufficient color contrast (4.5:1). If they do not, they fail this Success Criterion.

## Automation

### Linting

Potentially Automatable with a CSS linter, but this is more likely to be something that should be checked as a test; even more ideally, this should be determined in the design phase.

### Testing

Automated testing exists. See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `color-contrast` rule.

### Developer Authored Test

Developers should ensure that their code does not violate this rule; if a lack of color contrast is noted, have a chat with the designer! "I noticed that this text fails WCAG color contrast standards for text; is there something we can do to improve this?"

### Manual Test

Review page and ensure the point of failure does not exist, inspecting the DOM where required.
