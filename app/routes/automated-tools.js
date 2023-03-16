import Route from '@ember/routing/route';

export default class AutomatedToolsRoute extends Route {
  model() {
    let tools = [
      { title: 'ember-a11y-testing',
        category: 'Testing Library',
        description: 'Accessibility testing for Ember apps; provides middleware that allows the browser to talk to the node process running the tests via testem.',
        link: 'https://github.com/ember-a11y/ember-a11y-testing' 
      },
      { title: 'ember-template-lint',
        category: 'Code Linter (Static)',
        description: 'Linting for your handlebars templates. Supports custom and shared configs, todo utils, and auto-fixes.',
        link: 'https://github.com/ember-template-lint/ember-template-lint'
      }, {
        title: 'storybook-addon-a11y',
        category: 'Documentation',
        description: 'Use Storybook? This addon can help make your UI components more accessible.',
        link: 'https://storybook.js.org/addons/@storybook/addon-a11y',
      }, {
        title: 'Accessibility Insights',
        category: 'Browser Extension',
        description: 'A browser extension that helps developers find and fix accessibility issues in web apps and sites.',
        link: 'https://accessibilityinsights.io/downloads/',
      }, {
        title: 'eslint-plugin-jsx-a11y',
        category: 'Code Linter (Static)',
        description: 'Accessibility Linting for your React applications.',
        link: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y',
      }, {
        title: 'eslint-plugin-vuejs-accessibility',
        category: 'Code Linter (Static)',
        description: 'Accessibility Linting for your Vue applications.',
        link: 'https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility',
      }, {
        title: 'aXe DevTools',
        category: 'Browser Extension',
        description: 'A browser extension that anyone can use to help identify and resolve common accessibility issues.',
        link: 'https://www.deque.com/axe/browser-extensions/',
      }, {
        title: 'ARC',
        category: 'Browser Extension',
        description: 'Single-page, on-demand, accessibility testing tool.',
        link: 'https://www.tpgi.com/arc-platform/arc-toolkit/',
      }, {
        title: 'Lighthouse',
        category: 'Chrome DevTools',
        description: 'The Lighthouse Accessibility score is a weighted average of all accessibility audits.',
        link: 'https://github.com/GoogleChrome/lighthouse',
      }, {
        title: 'eslint-plugin-lit-a11y',
        category: 'Code Linter (Static)',
        description: 'Accessibility linting plugin for lit-html. Most of the rules are ported from eslint-plugin-jsx-a11y, and made to work with lit-html templates and custom elements.',
        link: 'https://github.com/open-wc/open-wc/tree/master/docs/docs/linting/eslint-plugin-lit-a11y'
      }, {
        title: '@axe-core/react',
        category: 'Testing Library',
        description: 'Test your React application with the axe-core accessibility testing library. Results will show in the Chrome DevTools console.',
        link: 'https://github.com/dequelabs/axe-core-npm/tree/master/packages/react'
      }, {
        title: 'jest-axe',
        category: 'Testing Library',
        description: 'Custom Jest matcher for axe for testing accessibility.',
        link: 'https://github.com/nickcolley/jest-axe#readme'
      }, {
        title: 'Pa11y',
        category: 'Testing Tool',
        description: 'A command-line tool for testing the accessibility of any URL.',
        link: 'https://pa11y.org/'
      }, {
        title: 'aXe-core',
        category: 'Testing Engine',
        description: 'A accessibility testing engine for JavaScript.',
        link: 'https://github.com/dequelabs/axe-core'
      },
      {
        title: 'keyboard-testing-library',
        category: 'Testing Tool',
        description: 'An extension of Testing Library focused on simulating keyboard-only users behaviors ',
        link: 'https://www.npmjs.com/package/keyboard-testing-library'
      },
    ];

    tools.sort((a, b) => (a.category > b.category) ? 1 : -1)

    return tools;
  }
}
