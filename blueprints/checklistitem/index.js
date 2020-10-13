'use strict';

const { readdirSync } = require('fs');
const { join } = require('path');

module.exports = {
  description: 'a blueprint to generate a new checklist item markdown file',

  locals(options) {
    // Return custom template variables here.
    return {
      checklistitemTitle: options.title,
      checklistitemTags: options.tags,
      lintingExists: options.lintingExists,
      testingExists: options.testingExists,
      devMustAuthor: options.devMustAuthor,
      manualTest: options.manualTest

    };
  },

  fileMapTokens() {
    // Return custom tokens to be replaced in your files
    return {
      __number__() {
        let existingFiles = readdirSync(join(process.cwd(), 'checklistitems'));

        let numbers = existingFiles.map((filename) => {
          return parseInt(filename.split('-')[0])
        });

        let highestNumber = Math.max(...numbers);

        // Logic to determine value goes here
        return (highestNumber + 1).toString().padStart(3, '0');
      }
    };
  },

  // afterInstall(options) {
    // Perform extra work here.
  // }
};