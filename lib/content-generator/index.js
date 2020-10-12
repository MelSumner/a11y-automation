const StaticSiteJson = require('broccoli-static-site-json');

const contentsJson = new StaticSiteJson('criterias', {
  contentFolder: 'criterias',
  collate: true,
  attributes: ['title', 'tags', 'lintingExists', 'testingExists', 'devMustAuthor', 'manualTest'],
  contentTypes: ['content', 'html']
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
