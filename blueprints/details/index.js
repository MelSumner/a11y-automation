'use strict';

module.exports = {
  description: 'a blueprint to generate a new detail markdown file',

  locals(options) {
    // Return custom template variables here.
    return {
      title: options.title,
      tags: options.tags,
      linting: options.linting,
      testing: options.testing,
      author: options.author,
      manual: options.manual,
    };
  },
  // afterInstall(options) {
    // Perform extra work here.
  // }
};