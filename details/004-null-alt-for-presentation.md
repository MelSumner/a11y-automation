---
title: Null Alt Text for Presentation
id: 004
tags: WCAG 1.1.1
# exists, couldExist, cannotExist
lintingExists: exists
testingExists: couldExist
devMustAuthor: couldExist
manualTest: exists
---

Review the page for decorative images. Inspect the DOM to see if `role` attribute has the value of `presentation` or `none`. If so, ensure that the `alt` attribute is present and that it is blank.