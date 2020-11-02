---
title: Autoplaying Media
tags: 
  - wcag-1-4-2
  - failure-93
linting: couldexist
testing: exists
author: shouldexist
manual: shouldexist
---

## Point of Failure
A media element that autoplays should have a way to pause or stop.

## Automation

### Linting
Potentially Automatable; check media elements for the `autoplay` attribute.

### Testing
Automated testing exists. See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `no-autoplay-audio` rule.


### Developer Authored Test
Ideally, do not autoplay any media of any type. It is inconsiderate of users who may already have screen readers operating, or users who have noise sensitivity issues. Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.