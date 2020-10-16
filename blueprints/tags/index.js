'use strict';

module.exports = {
  description: 'a blueprint to generate a new tag markdown file',

  locals(options) {
    // Return custom template variables here.
    return {
      title: options.title,
      url: options.url
    };
  },
  // afterInstall(options) {
    // Perform extra work here.
  // }
};