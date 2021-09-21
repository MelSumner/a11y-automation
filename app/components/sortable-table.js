import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SortableTableComponent extends Component {
  get sort() {
    return `${this.args.sortBy}:${this.args.sortOrder}`;
  }

  @action
  setSortBy(type) {
    if (this.args.sortBy === type) {
      //invert the sort order
      this.args.setSortOrder(this.args.sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      this.args.setSortBy(type);
      this.args.setSortOrder('asc');
    }

    const currentColHeading = event.target.parentElement;

    const liveRegion = document.getElementById('a11y-notification');
    liveRegion.innerHTML = `Sorted by ${currentColHeading.querySelector('.col-heading').innerText} ${this.args.sortOrder}ending`;
    setTimeout(function () {
      liveRegion.innerHTML = '';
    }, 1000);
  }
}
