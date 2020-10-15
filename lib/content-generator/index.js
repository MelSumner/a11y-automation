'use strict';

const StaticSiteJson = require('broccoli-static-site-json');

const contentsJson = new StaticSiteJson('details', {
  type: 'detail',
  contentFolder: 'details',
  collate: true,
  attributes: ['title', 'type', 'tags', 'linting', 'testing', 'author', 'manual']
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
