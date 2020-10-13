---
title: Ignore Decorative Images
tags: WCAG 1.1
# exists, couldExist, cannotExist, mustExist
lintingExists: exists 
testingExists: cannotExist
devMustAuthor: couldExist
manualTest: mustExist
---

Review the page and identify any decorative images. If any are found, inspect the DOM and ensure that the alt attribute is present and blank, and that the image has the role of presentation or none. 