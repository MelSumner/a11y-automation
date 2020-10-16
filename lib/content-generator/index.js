'use strict';

const StaticSiteJson = require('broccoli-static-site-json');
const mergeTrees = require('broccoli-merge-trees');

const contentsJson = new StaticSiteJson('details', {
  type: 'detail',
  contentFolder: 'details',
  collate: true,
  attributes: ['title', 'type', 'linting', 'testing', 'author', 'manual'],
  references: ['tags'] 
});

const tagsJson = new StaticSiteJson('tags', {
  type: 'tag',
  contentFolder: 'tags',
  collate: true,
  attributes: ['title', 'type', 'url'],
});

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },

  treeForPublic() {
    return mergeTrees([contentsJson, tagsJson]);
  }
};
