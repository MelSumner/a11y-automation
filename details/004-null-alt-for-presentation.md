---
title: Null Alt Text for Presentation
tags: WCAG 1.1.1
# exists, couldExist, cannotExist
linting: exists
testing: couldExist
author: couldExist
manual: exists
id: 004
---

Review the page for decorative images. Inspect the DOM to see if `role` attribute has the value of `presentation` or `none`. If so, ensure that the `alt` attribute is present and that it is blank.