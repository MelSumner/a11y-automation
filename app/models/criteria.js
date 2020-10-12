import Model from '@ember-data/model';
import { attr } from '@ember-data/model';
import { computed } from '@ember/object';

export default class CriteriaModel extends Model {
  content = attr();
  title = attr();
  tags = attr();
  lintingExists = attr();
  testingExists = attr();
  devMustAuthor = attr();
  manualTest = attr();
  criteria_id = computed('id', function() {
    return this.id.split('-').slice(1).join('-');
  })
}
