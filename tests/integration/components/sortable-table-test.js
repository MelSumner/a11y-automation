import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | sortable-table', function(hooks) {
  setupRenderingTest(hooks);

  const mockModel = [
    {
      id: 1,
      title: 'Apples',
      linting: 'a lint',
      lintingText: 'a lint text',
      testing: 'a test',
      testingText: 'a test text',
      manual: 'a manual',
      manualText: 'a manual text'
    },
    {
      id: 2,
      title: 'Oranges',
      linting: 'o lint',
      lintingText: 'o lint text',
      testing: 'o test',
      testingText: 'o test text',
      manual: 'o manual',
      manualText: 'o manual text'
    },
    {
      id: 3,
      title: 'Bananas',
      linting: 'b lint',
      lintingText: 'b lint text',
      testing: 'b test',
      testingText: 'b test text',
      manual: 'b manual',
      manualText: 'b manual text'
    },
  ];

  hooks.beforeEach(function() {
    this.set('model', mockModel);
  });

  test('it renders sortable-table elements as expected', async function(assert) {
    await render(hbs`<SortableTable @model={{this.model}}/>`);

    const table = this.element.querySelector('.sortable-table');
    const rows = table.querySelectorAll('tbody tr');

    assert.dom('.sort-toggle').exists({count: 4});
    assert.equal(rows.length, 3);
    assert.equal(rows[0].querySelector('th').textContent.trim(), 'Apples');
    assert.equal(rows[1].querySelector('th').textContent.trim(), 'Oranges');
    assert.equal(rows[2].querySelector('th').textContent.trim(), 'Bananas');
    assert.equal(rows[0].querySelectorAll('td')[0].textContent.trim(), 'a lint text');
    assert.equal(rows[0].querySelectorAll('td')[1].textContent.trim(), 'a test text');
    assert.dom('#a11y-notification').exists();
  });

  test('it sorts headings as expected', async function(assert) {
    this.set('sortBy', '');
    this.set('sortOrder', 'asc');

    this.setSortBy = (value) => {
      this.set('sortBy', value);
      return value;
    }
    this.setSortOrder = (value) => {
      this.set('sortOrder', value);
      return value;
    }

    await render(hbs`<SortableTable @model={{this.model}} @sortBy={{this.sortBy}} @setSortBy={{this.setSortBy}} @sortOrder={{this.sortOrder}} @setSortOrder={{this.setSortOrder}}/>`);

    const table = this.element.querySelector('.sortable-table');
    const th = table.querySelectorAll('th');
    const sortButtons = table.querySelectorAll('.sort-toggle');

    const failureBtn = sortButtons[0];
    await click(failureBtn);
    assert.equal(table.querySelectorAll('tbody tr')[0].querySelector('th').textContent.trim(),
      'Apples');
    assert.dom(th[0]).hasAttribute('aria-sort', 'ascending');
    assert.dom(failureBtn.querySelector('.icon-sort-filled.icon-sort-asc')).exists();
    assert.dom(failureBtn.querySelector('.icon-sort-open.icon-sort-asc')).doesNotExist();

    await click(failureBtn);
    assert.equal(table.querySelectorAll('tbody tr')[0].querySelector('th').textContent.trim(),
    'Oranges');
    assert.dom(th[0]).hasAria('sort', 'descending');
    assert.dom(failureBtn.querySelector('.icon-sort-filled.icon-sort-desc')).exists();
    assert.dom(failureBtn.querySelector('.icon-sort-open.icon-sort-desc')).doesNotExist();

    const lintingBtn = sortButtons[1];
    await click(lintingBtn);
    assert.equal(table.querySelectorAll('tbody tr')[0].querySelectorAll('td')[0].textContent.trim(),
    'a lint text');
    assert.dom(th[1]).hasAria('sort', 'ascending');
    assert.dom(lintingBtn.querySelector('.icon-sort-filled.icon-sort-asc')).exists();
    assert.dom(lintingBtn.querySelector('.icon-sort-open.icon-sort-asc')).doesNotExist();

    await click(lintingBtn);
    assert.equal(table.querySelectorAll('tbody tr')[0].querySelectorAll('td')[0].textContent.trim(),
    'o lint text');
    assert.dom(th[1]).hasAria('sort', 'descending');
    assert.dom(lintingBtn.querySelector('.icon-sort-filled.icon-sort-desc')).exists();
    assert.dom(lintingBtn.querySelector('.icon-sort-open.icon-sort-desc')).doesNotExist();

    const testingBtn = sortButtons[2];
    await click(testingBtn);
    assert.equal(table.querySelectorAll('tbody tr')[0].querySelectorAll('td')[1].textContent.trim(),
    'a test text');
    assert.dom(th[2]).hasAttribute('aria-sort', 'ascending');
    assert.dom(testingBtn.querySelector('.icon-sort-filled.icon-sort-asc')).exists();
    assert.dom(testingBtn.querySelector('.icon-sort-open.icon-sort-asc')).doesNotExist();

    await click(testingBtn);
    assert.equal(table.querySelectorAll('tbody tr')[0].querySelectorAll('td')[1].textContent.trim(),
    'o test text');
    assert.dom(th[2]).hasAttribute('aria-sort', 'descending');
    assert.dom(testingBtn.querySelector('.icon-sort-filled.icon-sort-desc')).exists();
    assert.dom(testingBtn.querySelector('.icon-sort-open.icon-sort-desc')).doesNotExist();

  });

  test('it populates the live region', async function(assert) {
    this.set('sortBy', '');
    this.set('sortOrder', 'asc');

    this.setSortBy = (value) => {
      this.set('sortBy', value);
      return value;
    }
    this.setSortOrder = (value) => {
      this.set('sortOrder', value);
      return value;
    }

    await render(hbs`<SortableTable @model={{this.model}} @sortBy={{this.sortBy}} @setSortBy={{this.setSortBy}} @sortOrder={{this.sortOrder}} @setSortOrder={{this.setSortOrder}}/>`);

    const table = this.element.querySelector('.sortable-table');
    const sortButtons = table.querySelectorAll('.sort-toggle');
    const liveRegion = this.element.querySelector('#a11y-notification');

    assert.dom(liveRegion).hasText('');

    await click(sortButtons[0]);
    assert.dom(liveRegion).hasText('Sorted by Failure ascending');
  });
});
