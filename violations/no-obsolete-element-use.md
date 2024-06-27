---
title: Use of obsolete elements
tags:
  - wcag-2-2-2
linting: exists
testing: exists
author: couldexist
manual: exists
---

## Point of Failure
Obsolete elements should not be used:
- acronym
- applet
- basefont
- bgsound
- big
- blink
- center
- dir
- font
- frame
- frameset
- isindex
- keygen
- listing
- marquee
- menuitem
- multicol
- nextid
- nobr
- noembed
- noframes
- plaintext
- rb
- rtc
- spacer
- strike
- tt
- xmp

## Automation

### Linting
Automated linting exists. See the [`ember-template-lint`](https://github.com/ember-template-lint/ember-template-lint) library for the `no-obsolete-elements` rule.

### Testing
Some automated testing exists. See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `marquee` rule. Further automated testing could exist by imitating the linting rule and checking for the presence of any obsolete elements.

### Developer Authored Test
Developers should be aware that these elements are obsolete and not use them.

### Manual Test
Review page and ensure the point of failure does not exist, inspecting the DOM where required.