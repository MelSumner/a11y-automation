import { computed } from '@ember/object';
import { sort } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({
  sortedviolations: sort('model', 'sortDefinition'),
  sortBy: 'title',
  reverseSort: false,
  sortDefinition: computed('sortBy', 'reverseSort', function() {
    const sortOrder = this.reverseSort ? 'desc' : 'asc';
    return [ `${this.sortBy}:${sortOrder}` ];
  }),
  actions: {
    changeSorting() {
      this.set('reverseSort', !this.reverseSort);
    }
  }
});
