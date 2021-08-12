import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ViolationsIndexController extends Controller {
  @tracked sortBy = '';
  @tracked sortOrder = 'asc';

  queryParams = ['sortBy', 'sortOrder'];

  @action
  setSortBy(value) {
    this.sortBy = value;
  }

  @action
  setSortOrder(value) {
    this.sortOrder = value;
  }
}
