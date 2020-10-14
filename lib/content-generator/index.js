'use strict';

const StaticSiteJson = require('broccoli-static-site-json');

const contentsJson = new StaticSiteJson('details', {
  type: 'details',
  contentFolder: 'details',
  collate: true,
  attributes: ['title', 'type', 'tags', 'lintingExists', 'testingExists', 'devMustAuthor', 'manualTest']
});

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },

  treeForPublic() {
    return contentsJson;
  }
};
