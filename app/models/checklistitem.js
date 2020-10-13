import Model from '@ember-data/model';
import { attr } from '@ember-data/model';
// import { computed } from '@ember/object';

export default class checklistitemModel extends Model {
  @attr content;
  @attr title;
  @attr tags;
  @attr lintingExists;
  @attr testingExists;
  @attr devMustAuthor;
  @attr manualTest;
  @attr id;
  // checklistitemName = computed('id', function() {
  //   return this.id.split('-').slice(1).join('-');
  // });
}
