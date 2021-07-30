import Model, { attr, hasMany } from '@ember-data/model';

const STATUS_TEXTS = {
  exists: 'Exists',
  couldexist: 'Could Exist',
  cannotexist: 'Cannot Exist',
  mustexist: 'Must Exist',
  shouldexist: 'Should Exist',
};

export default class violationModel extends Model {
  @attr author;
  @attr content;
  @attr html;
  @attr linting;
  @attr manual;
  @attr testing;
  @attr title;
  @hasMany('tag') tags;

  @attr('id', {
    function() { return this.id.split('-').slice(1).join('-'); }
  }) violationName;

  get lintingText() {
    return STATUS_TEXTS[this.linting];
  }

  get manualText() {
    return STATUS_TEXTS[this.manual];
  }

  get testingText() {
    return STATUS_TEXTS[this.testing];
  }

  get authorText() {
    return STATUS_TEXTS[this.author];
  }

  get webAimLevel() {
    let filteredLevels = ['A', 'AA', 'AAA'];
    return this.tags.find(tag => filteredLevels.includes(tag?.level))?.level;
  }
}
