import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SortableTableComponent extends Component {
  @tracked sortBy = '';
  @tracked sortOrder = 'asc';

  get sort() {
    return `${this.sortBy}:${this.sortOrder}`;
  }

  @action
  setSortBy(type) {
    if (this.sortBy === type) {
      //invert the sort order
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortBy = type;
      this.sortOrder = 'asc';
    }

    const currentColHeading = event.target.parentElement;

    const liveRegion = document.getElementById('a11y-notification');
    liveRegion.innerHTML = `Sorted by ${currentColHeading.querySelector('.col-heading').innerText} ${this.sortBy}ending`;
    setTimeout(function () {
      liveRegion.innerHTML = '';
    }, 1000);
  }
}
