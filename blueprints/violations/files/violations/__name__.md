---
title:
tags:
linting:
testing:
author:
manual:
---

## Point of Failure

<!-- Instructions: summarize the point of failure here. Then delete these instructions. -->

## Automation

### Linting

<!-- Instructions: 
1. Determine what information is valid of the three primary options: automation linting exists, potentially automatable, or cannot exist yet. 
2. If automated linting exists for at least one of the JS frameworks, replace `xxx` with the rule name. Remove any referenced linters that do not have a linting rule for the violation.
3. Remove the other primary options that are not valid.
4. If you want to add info about a JS lib/framework not mentioned here, that's fine; keep the bullet points sorted alphabetically. 
5. Finally, delete these instructions. -->

Automated linting exists in some JS frameworks:

* Ember: See the [`ember-template-lint`](https://github.com/ember-template-lint/ember-template-lint) library for the `xxx` rule.
* Lit: See the [`eslint-plugin-lit-a11y`](https://github.com/open-wc/open-wc/blob/master/docs/docs/linting/eslint-plugin-lit-a11y/) library for the `xxx` rule.
* React (JSX): See the [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) library for the `xxx` rule.
* Vue: See the [`eslint-plugin-vuejs-accessibility`](https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility) library for the `xxx` rule.

Potentially Automatable.

Cannot Exist Yet. If you an idea about how this could be linted in an automated fashion, or are aware of an automated linting rule that already exists, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Testing

<!-- Instructions: 
1. Update this section by determining which statement is factually accurate. Update that section if required.
2. Delete the other statements.
3. Delete these instructions. -->

Automated testing exists. See the [`axe-core`](https://github.com/dequelabs/axe-core) library for the `zzz` rule.

Potentially Automatable.

Cannot Exist Yet. If you an idea about how this could be tested in an automated fashion, or are aware of an automated test that already exists, please [file an issue on this app's GitHub Repository](https://github.com/MelSumner/a11y-automation/issues).

### Developer Authored Test

<!-- Instructions: Update this information to be more specific to the violation. Either way, delete these instructions. -->

Developers should ensure that their code does not violate this rule, and write a test that prevents regressions in code if it is later changed.

### Manual Test

<!-- Instructions: If you are able, update these manual test instructions with more details. Delete these instructions either way. -->

Review page and ensure the point of failure does not exist, inspecting the DOM where required.
