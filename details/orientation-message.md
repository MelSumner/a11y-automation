---
title: Device Orientation Message
tags: 
  - wcag-1-3-4
linting: couldexist
testing: couldexist
author: couldexist
manual: mustexist
---

## Point of Failure
A message should not be shown that asks the user to change the orientation of the device.

## Automation

### Linting
Potentially automatable through CSS linting.

### Testing
Potentially automatable but needs further analysis. 

### Developer Authored Test
Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test
Rotate the device and ensure that a message does not appear to ask you to change your device's orientation.