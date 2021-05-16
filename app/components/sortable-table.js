import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SortableTableComponent extends Component {
  @tracked sort = '';
  reverseSort = false;

  @action
  sortBy(type) {
    const sortOrder = this.reverseSort ? 'desc' : 'asc';
    this.reverseSort = !this.reverseSort;
    this.sort = `${type}:${sortOrder}`;

    const columnHeadings = document.querySelectorAll('.sortable');
    const currentColHeading = event.target.parentElement;
    columnHeadings.forEach(colHeading => { colHeading.removeAttribute('aria-sort') });
    currentColHeading.setAttribute('aria-sort', `${sortOrder}ending`);

    const arrowWrappers = document.querySelectorAll('.sort-arrow');
    const targetArrow = currentColHeading.querySelector('.sort-arrow');
    arrowWrappers.forEach(arrowWrapper => { arrowWrapper.innerHTML = '' });
    targetArrow.innerHTML = this.reverseSort ? '&#9660' : '&#9650;' // down/up pointing triangles

    const liveRegion = document.getElementById('a11y-notification');
    liveRegion.innerHTML = `Sorted by ${currentColHeading.querySelector('.col-heading').innerText} ${sortOrder}ending`;
    setTimeout(function () {
      liveRegion.innerHTML = '';
    }, 1000);
  }
}
