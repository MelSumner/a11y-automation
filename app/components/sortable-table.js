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

    // reset all arrows
    const filledArrows = document.querySelectorAll('.icon-sort-filled');
    const openArrows = document.querySelectorAll('.icon-sort-open');
    filledArrows.forEach(arrow => arrow.classList.add('hidden'));
    openArrows.forEach(arrow => arrow.classList.remove('hidden'));

    // style target arrows
    const targetFilledArrow = currentColHeading.querySelector(`.icon-sort-${sortOrder}.icon-sort-filled`);
    const targetOpenArrow = currentColHeading.querySelector(`.icon-sort-${sortOrder}.icon-sort-open`);
    targetFilledArrow.classList.remove('hidden');
    targetOpenArrow.classList.add('hidden');

    const liveRegion = document.getElementById('a11y-notification');
    liveRegion.innerHTML = `Sorted by ${currentColHeading.querySelector('.col-heading').innerText} ${sortOrder}ending`;
    setTimeout(function () {
      liveRegion.innerHTML = '';
    }, 1000);
  }
}
