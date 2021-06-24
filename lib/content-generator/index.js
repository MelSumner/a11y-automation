'use strict';

const StaticSiteJson = require('broccoli-static-site-json');
const mergeTrees = require('broccoli-merge-trees');
const { readdirSync } = require('fs');
const { join } = require('path');

const contentsJson = new StaticSiteJson('violations', {
  type: 'violation',
  contentFolder: 'violations',
  collate: true,
  attributes: ['title', 'type', 'linting', 'testing', 'author', 'manual'],
  references: ['tags']
});

const tagsJson = new StaticSiteJson('tags', {
  type: 'tag',
  contentFolder: 'tags',
  collate: true,
  attributes: ['title', 'type', 'url', 'level'],
});

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },

  urlsForPrember(distDir) {
    return readdirSync(join(distDir, 'violations'))
      // skip the collated file
      .filter(file => file !== 'all.json')
      .map(file => `/violations/${file.replace(/\.json$/, '')}`);
  },

  treeForPublic() {
    return mergeTrees([contentsJson, tagsJson]);
  }
};
