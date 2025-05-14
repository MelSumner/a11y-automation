---
title: Use of obsolete elements
tags:
  - wcag-2-2-2
linting: exists
testing: exists
author: couldexist
manual: exists
---

<script setup>
  const normalize = (value) => {
    const v = (value || '').toLowerCase()
    if (v === 'exists') return 'Exists'
    if (v === 'couldexist') return 'Could Exist'
    if (v === 'cannotexist') return 'Cannot Exist'
    if (v === 'shouldexist') return 'Should Exist'
    if (v === 'mustexist') return 'Must Exist'
    return '—'
  }
</script>

# Potential A11y Violation:<br/>{{ $frontmatter.title }}

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

## Available Automation Evaluation

In checking known available linting and testing tools, these are our findings.

### Linting <Badge type="info">{{ normalize($frontmatter.linting) }}</Badge>

Automated linting exists. See the [`ember-template-lint`](https://github.com/ember-template-lint/ember-template-lint) library for the `no-obsolete-elements` rule.

### Testing <Badge type="info">{{ normalize($frontmatter.testing) }}</Badge>

Some automated testing exists. See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `marquee` rule. Further automated testing could exist by imitating the linting rule and checking for the presence of any obsolete elements.

## Other Test Methods

In addition to automated tests, there are other types of tests that could be conducted to prevent this potential violation.

### Developer Authored Test <Badge type="info">{{ normalize($frontmatter.author) }}</Badge>

Developers should be aware that these elements are obsolete and not use them.

### Manual Test <Badge type="info">{{ normalize($frontmatter.manual) }}</Badge>

Review page and ensure the point of failure does not exist, inspecting the DOM where required.


<TagLinks />
